/*
 * @description: 
 * @Author: changjia
 * @Date: 2021-12-16 20:16:32
 * @LastEditors: changjia
 * @LastEditTime: 2021-12-16 20:37:59
 */
function _comma(number) {
  // 补全代码
  // // 判断是否是负数
  // let head = number < 0 ? '-' : ''
  // let arr = String(number).split('')
  // if (number < 0) {
  //   // arr.slice(1)
  //   // arr.pop()
  //   arr.shift()
  //   console.log(arr);
  // }
  // for (let i = 3; i < arr.length; i += 4) {
  //   arr.splice(-i, 0, ',')
  // }
  // return head + arr.join('')
  let head = number < 0 ? '-' : ''
  let arr = String(number).split('').reverse()
  if (number < 0) {
    arr.pop()
  }
  for (let i = 3; i < arr.length; i += 4) {
    arr.splice(i, 0, ',')
  }
  return head + arr.reverse().join('')
}

console.log(_comma(-20000007777000));