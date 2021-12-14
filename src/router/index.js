import Vue from 'vue'
import Router from 'vue-router'
import HomePage from '@/components/HomePage'
import Login from '@/components/Login'
import Register from '@/components/Register'
import AdminPage from '@/components/User/AdminPage'
import UserPage from '@/components/User/UserPage'
import Profile from '@/components/User/Profile'
import ViewUser from '@/components/User/ViewUser'
import viewbook from '@/components/books/viewbook'
import BookDetail from '@/components/books/BookDetail'
import AddBook from '@/components/books/AddBook'
import Editbook from '@/components/books/Editbook'

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'HomePage',
      component: HomePage
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
      path: '/profile',
      name: 'profile',
      component: Profile
    },
    {
      path: '/UserPage',
      name: 'UserPage',
      component: UserPage
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
      path: '/detail/:id',
      name: 'detail',
      component: BookDetail
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