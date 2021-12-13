import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import Login from '@/components/Login'
import Register from '@/components/Register'
import AdminPage from '@/components/User/AdminPage'
import ViewUser from '@/components/User/ViewUser'
import viewbook from '@/components/books/viewbook'
import AddBook from '@/components/books/AddBook'
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
      path: '/viewusers',
      name: 'viewuser',
      component: ViewUser
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
      path: '/AddBook',
      name: 'addbook',
      component: AddBook
    },
    {
      path: '/Editbook/:id',
      name: 'editbook',
      component: Editbook
    }
  ]
})