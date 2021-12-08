import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import Login from '@/components/Login'
import Register from '@/components/Register'
import AdminPage from '@/components/User/AdminPage'
import viewbook from '@/components/books/viewbook'
import Editbook from '@/components/books/Editbook'


Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'HelloWorld',
      component: HelloWorld
    },
    {
      path: '/Login',
      name: 'Login',
      component: Login
    },
    {
      path: '/Register',
      name: 'Register',
      component: Register
    },
    {
      path: '/AdminPage',
      name: 'AdminPage',
      component: AdminPage
    },
    {
      path: '/viewbook',
      name: 'viewbook',
      component: viewbook
    },
    {
      path: '/Editbook',
      name: 'Editbook',
      component: Editbook
    }
  ]
})
