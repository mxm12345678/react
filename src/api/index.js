// 包含应用中所有接口请求函数的模块,每个函数的返回值都是Promise

import ajax from './ajax';
//登录
// export function reqLogin(username,password){
//     return ajax('/login',{username,password},'POST').then()
// }

export const reqLogin=(username,password)=>ajax('/login',{username,password},'POST')




//添加用户
export const reqAddUser=(username,password,phone,email)=>ajax('/manage/user/add',{username,password,phone,email},'POST')

