import * as actionTypes from './constants'
import {Map} from "immutable";
import {getArtistList} from "../../services/recommend";

const initState = Map({
  topBanners: [],  // 轮播图数据
  hotRecommends: [],  // 热门推荐的歌单数据
  newAlbums: [],  // 新碟上架的数据

  upRanking: {},  // 飙升榜数据
  newRanking: {},  // 新歌榜数据
  originRanking: {},  // 原创榜数据

  settleSinger: [],  // 入驻歌手数据
})

function reducer(state = initState, action) {
  switch (action.type) {
    case actionTypes.CHANGE_TOP_BANNERS:
      return state.set("topBanners", action.topBanners);
    case actionTypes.CHANGE_HOT_RECOMMENDS:
      return state.set("hotRecommends", action.hotRecommends);
    case actionTypes.CHANGE_NEW_ALBUM:
      return state.set("newAlbums", action.newAlbums);

    case actionTypes.CHANGE_UP_RANKING:
      return state.set("upRanking", action.upRanking);
    case actionTypes.CHANGE_NEW_RANKING:
      return state.set("newRanking", action.newRanking);
    case actionTypes.CHANGE_ORIGIN_RANKING:
      return state.set("originRanking", action.originRanking);

    case actionTypes.CHANGE_SETTLE_SINGER:
      return state.set("settleSinger", action.settleSinger)

    default:
      return state
  }
}

export  {
  reducer
}
