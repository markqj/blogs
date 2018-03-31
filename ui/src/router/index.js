import Vue from 'vue'
import Router from 'vue-router'
// import HelloWorld from '@/components/HelloWorld'
import Resume from '@/components/Resume'
import Blogs from '@/components/Blogs'
import Home from '@/components/Home'
import User from '@/components/User'
import UserProfile from '@/components/UserProfile'
import UserIndex from '@/components/UserIndex'
Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home
    },
    {
      path: '/u/:username',
      name: 'Resume',
      component: User,
      children: [
        {
          path: '/',
          component: UserIndex
        },
        {
          // 当 /user/:id/profile 匹配成功，
          // UserProfile 会被渲染在 User 的 <router-view> 中
          path: 'profile',
          component: UserProfile
        },
        {
          path: 'resume',
          name: 'Resume',
          component: Resume
        }
      ]
    },
    {
      path: '/:username',
      name: 'Blogs',
      component: Blogs
    }
  ]
})
