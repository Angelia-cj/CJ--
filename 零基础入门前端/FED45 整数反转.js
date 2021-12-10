/*
 * @description: 
 * @Author: changjia
 * @Date: 2021-12-10 11:47:18
 * @LastEditors: changjia
 * @LastEditTime: 2021-12-10 11:51:53
 */
let number = 123456789

// 因为reverse是数组的方法，先转换为数组，反转，再转换为字符串，最后转换为数字。
let res = Number(String(number).split('').reverse().join(''));
console.log(res);