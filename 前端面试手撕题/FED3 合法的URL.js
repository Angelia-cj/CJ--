/*
 * @description: 
 * @Author: changjia
 * @Date: 2021-12-14 22:59:10
 * @LastEditors: changjia
 * @LastEditTime: 2021-12-14 23:12:49
 */

/* 
  URL结构一般包括协议、主机名、主机端口、路径、请求信息、哈希，而本题协议已给出为HTTP(S)，使用正则匹配URL，核心步骤有：
    1.首先必须是以http(s)开头并且可以不包含协议头部信息
    2.主机名可以使用"-"符号，所以两种情况都要判断，包含"-"或不包含"-"
    3.顶级域名很多，直接判断"."之后是否为字母即可
    4.最后判断端口、路径和哈希，这些参数可有可无
*/

const _isUrl = url => {
  //  http://.com:80?name=?&age=1
  //  https://a.b.c.com:8080/get?name=?&age=1

  return /^((http|https):\/\/)?(([A-Za-z0-9]+-[A-Za-z0-9]+|[A-Za-z0-9]+)\.)+([A-Za-z]+)(:\d+)?(\/.*)?(\?.*)?(#.*)?$/.test(url)
}