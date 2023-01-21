import { createRouter, createWebHashHistory } from "vue-router";
import { getNavData } from "../api/api";
import { mainStore } from "../store";
const routes = [
  {
    path: "/",
    redirect: "/login",
  },
  {
    path: "/login",
    name: "login",
    component: () => import("../views/login.vue"),
  },
  {
    path: "/home",
    name: "home",
    component: () => import("../views/home/index.vue"),
  },
];
const router = createRouter({
  history: createWebHashHistory(),
  routes,
});
//路由拦截
router.beforeEach(async (to, from, next) => {
  if (to.path === "/login") {
    next();
  } else {
    if (mainStore() && mainStore().nav.length == 0) {
      //发送请求，拿到数据
      let { data } = await getNavData();
      let res = data.data.info.res;
      let lists = data.data.data;
      let {pageSize,tatol} = data.data.info
      //数据缓存
      mainStore().setNav(res);
      mainStore().setList(lists)
      mainStore().setTatolAndPageSize(pageSize,tatol)
      //转换数据类型
      const navData = fn(res);
      //动态路由数据添加
      router.addRoute(navData);
      next({ path: to.path });
    } else {
      const isPath = mainStore().nav.find(v=>to.path === v.path)
      if(isPath){
        next()
      }else{
        next({path:mainStore().nav[0].path});
      }
    }
  }
});
//转换数据类型
function fn(res) {
  let homeRoutes = routes.filter((v) => v.path == "/home")[0];
  homeRoutes.children = [];
  res.forEach((item) => {
    homeRoutes.children.push({
      path: item.path,
      name: item.title,
      component: () =>
        import(`../views/home/content/${item.component}/index.vue`),
    });
  });
  return homeRoutes;
}
export default router;
