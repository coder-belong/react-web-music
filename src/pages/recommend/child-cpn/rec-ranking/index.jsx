import React, {memo, useEffect} from "react";
import {RecRankingWrapper} from "./style";
import {shallowEqual, useDispatch, useSelector} from "react-redux";
import {getRankingAction} from "../../../../store/recommend/actionCreators";
import RecThemeHeader from "../../../../components/rcm-theme-header";
import TopRanking from "../../../../components/top-ranking";
import {login} from "../../../../services/login";
import {getRanking} from "../../../../services/recommend";

const RecRanking = memo((props) => {
  // state and props

  // redux hook
  const {upRanking, newRanking, originRanking} = useSelector(state => ({
    upRanking: state.getIn(["recommend", "upRanking"]),
    newRanking: state.getIn(["recommend", "newRanking"]),
    originRanking: state.getIn(["recommend", "originRanking"]),
  }), shallowEqual)

  const dispatch = useDispatch()

  // others hook
  useEffect(() => {
    dispatch(getRankingAction(19723756))
    dispatch(getRankingAction(3779629))
    dispatch(getRankingAction(2884035))
  }, [dispatch])

  // 其他业务逻辑

  // 返回的jsx视图
  return (
    <RecRankingWrapper>
      {/*标题*/}
      <RecThemeHeader title={"榜单"}/>

      {/*3个榜单区域*/}
      <div className="tops">
        <TopRanking
          title={"飙升榜"}
          pictureUrl={upRanking.coverImgUrl}
          songs={upRanking.tracks}/>

        <TopRanking
          title={"新歌榜"}
          pictureUrl={newRanking.coverImgUrl}
          songs={newRanking.tracks}/>

        <TopRanking
          title={"原创榜"}
          pictureUrl={originRanking.coverImgUrl}
          songs={originRanking.tracks}/>
      </div>
    </RecRankingWrapper>
  )
})

export default RecRanking
