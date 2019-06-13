import Vue from 'vue'
import Router from 'vue-router'
import index from '@/components/index'
import articleList from '@/components/article-list'
import articleDetail from '@/components/article-detail'
import weeklyList from '@/components/weekly'
Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'index',
      component: index
    },
    {
      path: '/article-list',
      name: 'articleList',
      component: articleList
    },
    {
      path: '/article-detail',
      name: 'articleDetail',
      component: articleDetail
    },
    {
      path: '/weekly-list',
      name: 'weeklyList',
      component: weeklyList
    }
  ],
  　mode: 'history',
  base:'',
  
　　　　　　scrollBehavior(to, from, savedPosition) {
　　　　　　　　if (to.hash) {
　　　　　　　　　　return {
　　　　　　　　　　　　selector: to.hash
　　　　　　　　　　}
　　　　　　　　}
　　　　　　}
})


//创建 router 实例
