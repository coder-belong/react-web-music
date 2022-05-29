import {Map} from 'immutable'
import {playList as mockPlayList} from "../../mock/data";
import * as actionTypes from './constants'

const initState = Map({
  currentSong: {},  // 当前播放的音乐
  playList: mockPlayList,   // 播放列表
  currentSongIndex: 0,  // 当前播放的音乐的索引
  sequenceType: 0,  // 0 顺序播放 1 随机播放 2 单曲循环
  LyricsList:[],   // 当前播放的歌曲歌词，数据结构：[{time: 'xxx', content: 'xxx'}]
  currentLyricIndex: -1,  // 记录当前播放歌曲的歌词索引
})

function reducer(state = initState, action) {
  switch (action.type) {
    case actionTypes.CHANGE_CURRENT_SONG:
      return state.set("currentSong", action.currentSong)
    case actionTypes.CHANGE_PLAY_LIST:
      return state.set("playList", action.playList)
    case actionTypes.CHANGE_CURRENT_SONG_INDEX:
      return state.set("currentSongIndex", action.currentSongIndex)
    case actionTypes.CHANGE_SEQUENCE_TYPE:
      return state.set("sequenceType", action.sequenceType)
    case actionTypes.CHANGE_LYRICS_LIST:
      return state.set("LyricsList", action.LyricsList)
    case actionTypes.CHANGE_CURRENT_LYRICS_INDEX:
      return state.set("currentLyricIndex", action.currentLyricIndex)
    default:
      return state
  }
}

export {
  reducer
}

