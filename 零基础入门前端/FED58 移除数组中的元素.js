/*
 * @description: 
 * @Author: changjia
 * @Date: 2021-12-09 10:51:17
 * @LastEditors: changjia
 * @LastEditTime: 2021-12-09 16:34:31
 */
// function removeWithoutCopy(arr, item) {
//   arr.forEach((ele, index) => {
//     if (ele === item) {
//       arr.splice(index, 1) // 从索引index位置开始删除一个元素，即删除该元素
//     }
//     index--
//   })
//   return arr
// }

// function removeWithoutCopy(arr, item) {
//   let index = arr.indexOf(item)
//   let count = 0
//   for (let i = 0; i < arr.length; i++) {
//     if (arr[i] === item) count++
//   }
//   arr.splice(index, count)
//   return arr
// }

function removeWithoutCopy(arr, item) {
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] == item) {
      arr.splice(i, 1)
      i--
    }
  }
  return arr
}

let arr = [1, 2, 2, 3, 4, 2, 2]
let item = 2
console.log(removeWithoutCopy(arr, item));