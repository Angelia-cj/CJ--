/*
 * @description: 
 * @Author: changjia
 * @Date: 2021-12-09 16:11:34
 * @LastEditors: changjia
 * @LastEditTime: 2021-12-09 16:23:02
 */
function _date(number) {
  // 补全代码
  // 方法一：
  // return new Date(number).toLocaleDateString().replace('/', '-').replace('/', '-')

  // 方法二：
  // return new Date(number).toISOString().slice(0, 10).replace('-0', '-').replace('-0', '-')

  // 方法三：
  let date = new Date(number)
  return `${date.getFullYear()}-${date.getMonth()+1}-${date.getDate()}`
}

let number = 1631159776311
console.log(_date(number));
// console.log(new Date(number).toLocaleDateString()); // 2021/9/9
// console.log(new Date(number).toISOString()); // 2021-09-09T03:56:16.311Z