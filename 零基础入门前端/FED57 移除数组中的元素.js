/*
 * @description: 
 * @Author: changjia
 * @Date: 2021-12-09 10:34:36
 * @LastEditors: changjia
 * @LastEditTime: 2021-12-09 10:45:11
 */
function remove(arr, item) {
  return arr.filter(e => e !== item)
}
let arr = [1, 2, 3, 4, 2]
let item = 2

console.log(remove(arr, item));