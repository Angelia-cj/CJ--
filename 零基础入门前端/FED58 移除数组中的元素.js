/*
 * @description: 
 * @Author: changjia
 * @Date: 2021-12-09 10:51:17
 * @LastEditors: changjia
 * @LastEditTime: 2021-12-09 11:10:30
 */
function removeWithoutCopy(arr, item) {
  arr.forEach((ele, index) => {
    if (ele === item) {
      arr.splice(index, 1) // 从索引index位置开始删除一个元素，即删除该元素
    }
    index--
  })
  return arr
}

let arr = [1, 2, 2, 3, 4, 2, 2]
let item = 2
console.log(removeWithoutCopy(arr, item));