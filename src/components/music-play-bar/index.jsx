import React, {memo, useCallback, useEffect, useRef, useState} from "react";
import {shallowEqual, useDispatch, useSelector} from "react-redux";
import moment from "moment";

import {getPlaySongUrl, getSizeImageUrl} from "../../utils/format-data";

import {Slider, message} from 'antd';
import {MusicPlayBarWrapper} from "./style";
import {
  changeCurrentLyricsIndexAction,
  changePlaySongAction,
  changeSequenceTypeAction,
  getCurrentSongAction,
  getLyricsListAction
} from "../../store/player/actionCreators";

const MusicPlayBar = memo((props) => {
  // state and props
  const [currentTime, setCurrentTime] = useState(0)
  const [progress, setProgress] = useState(0)
  const [sliderIsChanging, setSliderIsChanging] = useState(false)  // 控制拖拽进度条和进度条自增的冲突
  const [isPlaying, setIsPlaying] = useState(false)  // 记录音乐播放的状态

  // redux hook
  const {currentSong, sequenceType, LyricsList, currentLyricIndex} = useSelector(state => ({
    currentSong: state.getIn(["player", "currentSong"]),
    sequenceType: state.getIn(["player", "sequenceType"]),
    LyricsList: state.getIn(["player", "LyricsList"]),
    currentLyricIndex: state.getIn(["player", "currentLyricIndex"]),
  }), shallowEqual)

  const dispatch = useDispatch()

  // others hook
  const audioRef = useRef()

  // 调用dispatch 发送网络请求保存数据到redux中
  useEffect(() => {
    // dispatch(getCurrentSongAction(167876))
    dispatch(getCurrentSongAction(1377748914))  // 获取歌曲详情数据其中包括请求歌词
  }, [dispatch])

  // 页面渲染完成后处理的一些事...
  useEffect(() => {
    audioRef.current.src = getPlaySongUrl(currentSong.id)
    audioRef.current.play().then(res => {
      setIsPlaying(true)
    }).catch(err => {
      setIsPlaying(false)
    })
  }, [currentSong])

  // other handle
  const showDuration = moment(currentSong.dt).format("mm:ss")  // 音乐总时长
  const showCurrentTime = moment(currentTime).format("mm:ss")  // 当前音乐播放时长
  const showSequenceINfo = () => {
    switch (sequenceType) {
      case 1:
        return "随机播放";
      case 2:
        return "单曲循环";
      default:
        return "顺序播放";
    }
  }

  // other function
  // 监听播放按钮的点击
  const playMusicClick = () => {
    isPlaying ? audioRef.current.pause() : audioRef.current.play();
    setIsPlaying(!isPlaying)
  }

  // 监听音乐的播放
  const timeUpdate = (event) => {
    console.log('music-start....')
    if (!sliderIsChanging) {
      // 更新当前音乐播放的时间(需要转换成毫秒单位噢)
      setCurrentTime(event.target.currentTime * 1000)
      // 更新进度条
      setProgress((currentTime / currentSong.dt) * 100)
    }

    // 实时更新歌词
    let myCurrentTime = event.target.currentTime * 1000

    // 这里只能用原生的for循环遍历！不信的自己细品！
    let i = 0
    for (let item of LyricsList) {
      if (myCurrentTime < item.time) {
        break  // 一旦发现符合条件的歌词就立马终止循环！
      }
      i++  // 每次循环都需要i++操作
    }

    console.log(currentLyricIndex, i)
    // 这里的判断是为了性能优化，只有跟上次的歌词索引不一样时才会重新获取新的歌词，而不是每次都重新获取新歌词
    if (currentLyricIndex !== i - 1) {
      // console.log('xxx')
      let showLyrics = LyricsList[i - 1] // 获取要展示的歌词，是上一个
      dispatch(changeCurrentLyricsIndexAction(i - 1))
      // console.log(currentLyricIndex)
      // console.log(showLyrics)

      // 使用toast展示歌词！
      message.open({
        key: 'lyrics',
        content: showLyrics && showLyrics.content,
        duration: 0,
        className: "lyrics-message"
      })
    }
  }

  // 监听进度条的拖拽（更新进度条和时间）
  const slideChange = useCallback(value => {
    setSliderIsChanging(true)  // 更新滑动状态
    setCurrentTime(value / 100 * currentSong.dt)  // 更新播放时间
    setProgress(value)  // 更新进度条进度
  }, [currentSong])

  // 监听进度条的拖拽完成（更新音乐播放时间）
  const slideAfterChange = useCallback(value => {
    const time = value / 100.0 * currentSong.dt / 1000;
    audioRef.current.currentTime = time  // 根据拖拽的长度设置音乐播放的进度
    setSliderIsChanging(false)

    // 当滑动结束后，需要让歌曲播放起来噢
    if (!isPlaying) {
      setIsPlaying(true)
      audioRef.current.play()
    }
  }, [currentSong, isPlaying])

  // 监听播放顺序按钮的点击
  const playSequenceClick = () => {
    if (sequenceType >= 2) {
      return dispatch(changeSequenceTypeAction(0))
    }
    dispatch(changeSequenceTypeAction(sequenceType + 1))
  }

  // 监听上一首/下一首按钮的点击
  const changeMusicClick = (tag) => {
    // 进度条清空
    setCurrentTime(0)
    setProgress(0)
    // 派遣dispatch 更新currentSongIndex和currentSong
    dispatch(changePlaySongAction(tag))
    // 播放音乐...
  }

  // 监听音乐播放的结束
  const handleMusicEnded = () => {
    // 进度条清空
    setCurrentTime(0)
    setProgress(0)

    switch (sequenceType) {
      case 2:  // 单曲循环处理
        audioRef.current.currentTime = 0;
        audioRef.current.play()
        break
      default:  // 随机播放和顺序播放处理 (随机播放有点bug，后面处理  bug已解决 请放心食用)
        dispatch(changePlaySongAction(1))
    }
  }


  return (
    <MusicPlayBarWrapper isPlaying={isPlaying} sequenceType={sequenceType}>
      <div className="content wrap-v2">
        {/*左侧音乐控制按钮*/}
        <div className="control">
          <button className="sprite_player prev" onClick={event => changeMusicClick(-1)}/>
          <button className="sprite_player play" onClick={event => playMusicClick()}/>
          <button className="sprite_player next" onClick={event => changeMusicClick(+1)}/>
        </div>

        {/*中间音乐信息区域*/}
        <div className="music-info">
          {/*左侧图片区域*/}
          <img className="image"
               src={getSizeImageUrl(currentSong.al && currentSong.al.picUrl, 34)}/>
          {/*右侧歌曲信息区域*/}
          <div className="song">
            <div className="top-info">
              <span>{currentSong.name}</span>
              <span className="singer-name">{currentSong.ar && currentSong.ar[0].name}</span>
            </div>
            {/*底部进度条和时间区域*/}
            <div className="bottom-progress">
              <Slider defaultValue={10}
                      className="progress"
                      value={progress}
                      onAfterChange={slideAfterChange}
                      onChange={slideChange}
              />
              <div className="time">
                <span className="now-time">{showCurrentTime}</span>
                <span className="divider">/</span>
                <span className="all-time">{showDuration}</span>
              </div>
            </div>
          </div>
        </div>

        {/*右侧操作区域*/}
        <div className="operator">
          <div className="left">
            <button className="sprite_player btn favor"/>
            <button className="sprite_player btn share"/>
          </div>
          <div className="right sprite_player">
            <button className="sprite_player btn volume"/>
            <button className="sprite_player btn loop" onClick={event => playSequenceClick()}/>
            <button className="sprite_player btn playlist"/>
            <div className="sequence-info">{showSequenceINfo()}</div>
          </div>
        </div>
      </div>

      {/*音乐播放元素*/}
      <audio
        ref={audioRef}
        onTimeUpdate={event => timeUpdate(event)}
        onEnded={event => handleMusicEnded()}
      />
    </MusicPlayBarWrapper>
  )
})

export default MusicPlayBar
