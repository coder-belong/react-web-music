import React, {memo} from "react";
import Banner from "./child-cpn/banner";
import {RecommendWrapper} from "./style";

import HotRecommend from "./child-cpn/hot-recommend";
import NewAlbum from "./child-cpn/new-album";
import RecRanking from "./child-cpn/rec-ranking";
import UserLogin from "./child-cpn/user-login";
import SettleSinger from "./child-cpn/settle-singer";
import HotAnchor from "./child-cpn/hot-anchor";

const Recommend = memo((props) => {
  return (
    <RecommendWrapper>
      {/*轮播图区域*/}
      <Banner/>
      {/*主体内容区域*/}
      <div className="content wrap-v2">
        <div className="left">
          {/*热门推荐*/}
          <HotRecommend/>
          {/*新碟上架区域*/}
          <NewAlbum/>
          {/*榜单区域*/}
          <RecRanking/>
        </div>
        {/*右侧区域*/}
        <div className="right">
          {/*用户登录区域*/}
          <UserLogin/>
          {/*入住歌手区域*/}
          <SettleSinger/>
          {/*热门主播区域*/}
          <HotAnchor/>
        </div>
      </div>
    </RecommendWrapper>
  )
})

export default Recommend
