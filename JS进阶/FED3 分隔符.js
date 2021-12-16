/*
 * @description: 
 * @Author: changjia
 * @Date: 2021-12-16 20:16:32
 * @LastEditors: changjia
 * @LastEditTime: 2021-12-16 20:20:24
 */
function _comma(number) {
  // 补全代码
  // let e = String(number).split('')
  let e = number.toString().split('')
  e.splice(-3, 0, ',')
  return e.join('')
}

console.log(_comma(200000000));