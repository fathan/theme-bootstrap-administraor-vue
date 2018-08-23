import Vue from 'vue'
import Router from 'vue-router'

// CONTAINERS
import LayoutFull from '@/containers/LayoutFull/LayoutFull'

// COMPONENTS
import Dashboard from '@/views/Dashboard/Dashboard'

import DataTable from '@/views/SampleData/DataTable'
import DataInput from '@/views/SampleData/DataInput'
import Print from '@/views/SampleData/Print'

import SignIn from '@/views/Authentication/SignIn/SignIn'
import PageNotFound from '@/views/PageNotFound/PageNotFound'

Vue.use(Router)

export default new Router({
  mode: 'history',
  linkActiveClass: 'open active',
  scrollBehavior: () => ({ y: 0 }),
  routes: [
    {
      path: '/',
      redirect: '/',
      name: 'LayoutFull',
      component: LayoutFull,
      children: [
        {
          path: '/',
          name: 'Dashboard',
          component: Dashboard,
          meta: { requiresAuth: true }
        },
        {
          path: '/sample-data-table',
          name: 'Sample Data Table',
          component: DataTable,
          meta: { requiresAuth: true }
        },
        {
          path: '/sample-data-input',
          name: 'Sample Data Input',
          component: DataInput,
          meta: { requiresAuth: true }
        },
        {
          path: '/sample-print',
          name: 'Sample Print',
          component: Print,
          meta: { requiresAuth: true }
        }
      ]
    },
    {
      path: '/sign-in',
      name: 'sign-in',
      component: SignIn,
      meta: { requiresNoAuth: true }
    },
    {
      path: '*',
      component: PageNotFound
    }
  ]
})
