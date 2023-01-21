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
//删除列表数据
/* export function deleteList(index){
   return axios({
      method:'delete',
      url:`/deleteList?cid=${index}`,
   })
} */