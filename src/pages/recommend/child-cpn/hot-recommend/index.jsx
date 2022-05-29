import React, {memo, useEffect} from "react";
import {HotRecommendWrapper} from "./style";
import {shallowEqual, useDispatch, useSelector} from "react-redux";

import RecThemeHeader from "../../../../components/rcm-theme-header";
import SongSheetCard from "../../../../components/song-sheet-card";
import {getHotRecommendAction} from "../../../../store/recommend/actionCreators";

const HotRecommend = memo((props) => {
  // state

  // redux hook
  const {hotRecommends} = useSelector(state => ({
    hotRecommends: state.getIn(["recommend", "hotRecommends"])
  }), shallowEqual)

  const dispatch = useDispatch()

  // other  hook
  useEffect(() => {
    dispatch(getHotRecommendAction(8))
  }, [dispatch])


  return (
    <HotRecommendWrapper>
      {/*头部*/}
      <RecThemeHeader title={"热门推荐"} items={['华语', '流行', '民谣', '摇滚', '电子']}/>
      {/*  歌单列表*/}
      <div className="song-list">
        {
          hotRecommends.map(item => {
            return (
              <SongSheetCard songInfo={item} key={item.id}/>
            )
          })
        }
      </div>
    </HotRecommendWrapper>
  )
})

export default HotRecommend
