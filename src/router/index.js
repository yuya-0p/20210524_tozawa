import Vue from 'vue'
import VueRouter from './router'
import About from '../src/views/About.vue'

Vue.use(VueRouter);

const routes=[
  {
    path:"/",
    name:"App",
    Comment:App,
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