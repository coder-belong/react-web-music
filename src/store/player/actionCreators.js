import * as actionTypes from './constants'
import {getCurrentSongDetail, getLyricList} from "../../services/player";
import {getRandomNumber} from "../../utils/math-utils";
import {getPlaySongUrl} from "../../utils/format-data";
import {parseLyrics} from "../../utils/parse-lyrics";

const changeCurrentSongAction = (currentSong) => ({
  type: actionTypes.CHANGE_CURRENT_SONG,
  currentSong,
})

const changePlayListAction = (playList) => ({
  type: actionTypes.CHANGE_PLAY_LIST,
  playList
})

const changeCurrentSongIndexAction = (currentSongIndex) => ({
  type: actionTypes.CHANGE_CURRENT_SONG_INDEX,
  currentSongIndex
})

const changeLyricsListAction = (LyricsList) => ({
  type: actionTypes.CHANGE_LYRICS_LIST,
  LyricsList
})


// 向外暴露的普通action
export const changeSequenceTypeAction = (sequenceType) => ({
  type: actionTypes.CHANGE_SEQUENCE_TYPE,
  sequenceType
})

export const changeCurrentLyricsIndexAction = (currentLyricIndex) => ({
  type: actionTypes.CHANGE_CURRENT_LYRICS_INDEX,
  currentLyricIndex
})


// 添加歌曲到播放列表的逻辑
export const getCurrentSongAction = (id) => {
  return async (dispatch, getState) => {
    // 1. 根据id查找playList中是否有了该歌曲(需要返回索引)
    const playList = getState().getIn(["player", "playList"])
    const songIndex = playList.findIndex(item => item.id === id);

    if (songIndex !== -1) {  // 歌曲在playList数组中
      // 1.1 修改currentSongIndex
      dispatch(changeCurrentSongIndexAction(songIndex))
      // 1.2 修改currentSong
      dispatch(changeCurrentSongAction(playList[songIndex]))

    } else {  // 歌曲不在playList数组中
      // 1.3 根据id请求该歌曲的数据
      let res = await getCurrentSongDetail(id)
      let currentSong = res.songs[0]
      // 1.4 修改currentSong
      dispatch(changeCurrentSongAction(currentSong))
      // 1.5 将歌曲添加到playList中
      const newPlayList = [...playList, currentSong]
      dispatch(changePlayListAction(newPlayList))
      // 1.6 修改修改currentSongIndex
      dispatch(changeCurrentSongIndexAction(newPlayList.length - 1))
    }

    // 2. 解析即将播放的歌曲的歌词
    dispatch(getLyricsListAction(id))
  }
}

// 上一首/下一首的切换逻辑
export const changePlaySongAction = (tag) => {
  return (dispatch, getState) => {
    // 1. 获取当前播放歌曲的index
    let currentSongIndex = getState().getIn(["player", "currentSongIndex"])
    let playList = getState().getIn(["player", "playList"])
    let sequenceType = getState().getIn(["player", "sequenceType"])

    let nextSong = null // 存储即将要播放的歌曲信息

    // 2. 判断当前的播放顺序类型，生成新的currentIndex
    switch (sequenceType) {
      case 1:  // 随机播放
        // 获取playList数组长度的随机索引，注意不能和原来的currentSongIndex一致（确保下一首播放的歌曲不是上一首）
        let randomIndex = getRandomNumber(playList.length)
        while (randomIndex === currentSongIndex) {
          randomIndex = getRandomNumber(playList.length)
        }
        // 更新currentIndex和currentSong
        nextSong = playList[randomIndex]
        dispatch(changeCurrentSongIndexAction(randomIndex))
        dispatch(changeCurrentSongAction(nextSong))
        break;

      default:  // 顺序播放和单曲循环（+1 / -1即可 注意越界问题）
        currentSongIndex += tag
        if (currentSongIndex < 0) {
          currentSongIndex = playList.length - 1
        } else if (currentSongIndex >= playList.length) {
          currentSongIndex = 0
        }
        nextSong = playList[currentSongIndex]
        dispatch(changeCurrentSongIndexAction(currentSongIndex))
        dispatch(changeCurrentSongAction(nextSong))
    }

    // 3. 解析即将播放的歌曲的歌词
    dispatch(getLyricsListAction(nextSong.id))
  }
}

// 获取/解析歌词的逻辑处理
export const getLyricsListAction = (id) => {
  return async dispatch => {
    let res = await getLyricList(id)
    let lyricData = res.lrc.lyric
    let lyricsList = parseLyrics(lyricData)
    dispatch(changeLyricsListAction(lyricsList))
  }
}
