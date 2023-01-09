import axios  from "../utils/request";
//login
export function login(data){
     return axios({
        method:'post',
        url:'/perinfo',
        data
     })
}
export function getNavData(){
   return axios({
      method:'get',
      url:'/getResources',
   })
}