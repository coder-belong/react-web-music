// 返回一个0 ~ num之间的整数（不包括num）
export function getRandomNumber(num = 100) {
  return Math.floor(Math.random() * num)
}
