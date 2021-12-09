/*
 * @description: 
 * @Author: changjia
 * @Date: 2021-12-09 16:58:52
 * @LastEditors: changjia
 * @LastEditTime: 2021-12-09 17:01:06
 */
function concat(arr1, arr2) {
  let newArr = [...arr1, ...arr2]
  return newArr
}
let arr1 = [1, 2, 3, 4],
  arr2 = ['a', 'b', 'c', 1]

let newArr = [...arr1, ...arr2]
console.log(newArr);

let newArr1 = concat(arr1, arr2)
console.log(newArr1);

let newArr2 = arr1.concat(arr2)
console.log(newArr2);