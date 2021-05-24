import Vue from 'vue'
import VueRouter from './router'
import Home from "../views/Home.vue"
import About from '../src/views/About.vue'

Vue.use(VueRouter);

const routes=[
  {
    path:"/",
    name:"Home",
    Comment:Home,
  },
  {
    path:"/src/views/About.vue",
    name:"About",
    component:About,
    props:true,
  },
];
const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

export default router;