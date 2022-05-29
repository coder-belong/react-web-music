import request from "./request";

// 获取轮播图数据
export function getTopBanners() {
  return request({
    url: '/banner'
  })
}

export function getHotRecommend(limit) {
  return request({
    url: '/personalized',
    params: {
      limit,
    },
  })
}

export function getNewAlbum(limit) {
  return request({
    url: "/top/album",
    params: {
      limit,
    },
  })
}

// 获取榜单信息（5.26起接口更新）
export function getRanking(id) {
  return request({
    url: "/playlist/detail",
    params: {
      id
    },
  })
}

// 获取入驻歌手信息
export function getArtistList(cat, limit) {
  return request({
    url: "/artist/list",
    params: {
      cat,
      limit
    }
  })
}


