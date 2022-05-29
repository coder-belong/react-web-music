import request from "./request";

// 获取歌曲详情数据
export function getCurrentSongDetail(ids) {
  return request({
    url: "/song/detail",
    params: {
      ids
    }
  })
}

// 获取当前播放的歌曲歌词
export function getLyricList(id) {
  return request({
    url: "/lyric",
    params: {
      id
    }
  })
}
