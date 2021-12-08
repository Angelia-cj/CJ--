/*
 * @description: 
 * @Author: changjia
 * @Date: 2021-12-08 14:23:31
 * @LastEditors: changjia
 * @LastEditTime: 2021-12-08 15:18:37
 */
let num = 3
let arr = []
for (let i = 0; i < num; i++) {
  let temp = Math.random(1, 1000)
  arr[temp] = 1
}
arr.forEach((item, index) => {
    if (item === 1) {
      console.log(index);
    }
  })
  // console.log('hello world');
  // console.log(1 + 1);

// console.log(!isNaN('11'));