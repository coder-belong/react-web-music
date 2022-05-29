/*
  [00:00.000] 作词 : 羽生まゐご
  [00:01.000] 作曲 : 羽生まゐご/羽生まゐご
  [00:10.666]夜の街迷いし穢れの乱歩
  [00:13.421]何処から来たのよ見窄らしいね
  [00:16.164]ねぇうちにおいで温めてあげるよ
 */

export function parseLyrics(lyricsString) {
  let lineStr = lyricsString.split('\n')
  let lyricsList = []

  for (let item of lineStr) {
    let time = item.split(']')[0].split('[')[1]
    if (time === undefined) continue
    let content = item.split(']')[1].trim()

    // 将分:秒格式转换为毫秒形式
    let time1 = time.split(":")[0] * 60 * 1000
    let time2 = time.split(':')[1].split('.')[0] * 1000
    let time3 = time.split('.')[1].length === 3 ? time.split('.')[1] * 1 : time.split('.')[1] * 10
    let resultTime = time1 + time2 + time3  // 最终的时间格式：34665
    lyricsList.push({time:resultTime, content})
  }
  // console.log(lyricsString)
  // console.log(lyricsList)
  return lyricsList
}


