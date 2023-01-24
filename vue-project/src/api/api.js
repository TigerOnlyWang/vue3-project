import axios  from "../utils/request";
//login
export function login(data){
     return axios({
        method:'post',
        url:'/perinfo',
        data
     })
}
//获取表数据和导航
export function getNavData(){
   return axios({
      method:'get',
      url:'/getResources',
   })
}
//添加商品
export function addShop(data){
   return axios({
      method:'post',
      url:'/addShop',
      data
   })
}