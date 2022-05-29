import * as actionTypes from './constants'
import {
  getTopBanners,
  getHotRecommend, getNewAlbum, getRanking, getArtistList
} from "../../services/recommend";
import {newRanking, originRanking, upRanking} from "../../mock/data";

// 定义普通的action (action定义成函数，并返回对象)
export const changeTopBannersAction = (banners) => ({
  type: actionTypes.CHANGE_TOP_BANNERS,
  topBanners: banners
})

export const changeHotRecommendAction = (hotRecommends) => ({
  type: actionTypes.CHANGE_HOT_RECOMMENDS,
  hotRecommends,
})

export const changeNewAlbumsAction = res => ({
  type: actionTypes.CHANGE_NEW_ALBUM,
  // newAlbums: res.albums
  newAlbums: res.weekData
})

const changeUpRankingAction = res => ({
  type: actionTypes.CHANGE_UP_RANKING,
  upRanking: res.playlist
})

const changeNewRankingAction = res => ({
  type: actionTypes.CHANGE_NEW_RANKING,
  newRanking: res.playlist
})

const changeOriginRankingAction = res => ({
  type: actionTypes.CHANGE_ORIGIN_RANKING,
  originRanking: res.playlist
})

const changeSettleSingersAction = (res) => ({
  type: actionTypes.CHANGE_SETTLE_SINGER,
  settleSinger: res.artists
})

// 定义redux-thunk的action，用于处理网络请求
export const getTopBannerAction = () => {
  return async dispatch => {
    let res = await getTopBanners()
    // 派发action，保存网络请求数据到redux中
    dispatch(changeTopBannersAction(res.banners))
  }
}

export const getHotRecommendAction = (limit) => {
  return async dispatch => {
    let res = await getHotRecommend(limit)
    dispatch(changeHotRecommendAction(res.result))
  }
}

export const getNewAlbumsAction = (limit) => {
  return async dispatch => {
    let res = await getNewAlbum(limit)
    dispatch(changeNewAlbumsAction(res))
  }
}

export const getRankingAction = (id) => {
  return async dispatch => {
    // 这里接口有问题，我们使用本地数据
    // let res = await getRanking(id)
    switch (id) {
      case 19723756:
        dispatch(changeUpRankingAction({playlist: upRanking}))
        break;
      case 3779629:
        dispatch(changeNewRankingAction({playlist: newRanking}))
        break;
      case 2884035:
        dispatch(changeOriginRankingAction({playlist: originRanking}))
        break;
      default:
    }
  }
}


export const getSettleSingersAction = () => {
  return async dispath => {
    let res = await getArtistList(5001, 5)
    dispath(changeSettleSingersAction(res))
  }
}

