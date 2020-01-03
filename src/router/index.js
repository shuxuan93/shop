import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'

Vue.use(VueRouter)

const routes = [{
        path: '',
        name: '',
        component: Home,
        children: [{
                path: '',
                name: 'about',
                component: () =>
                    import ('../views/about')
            },
            {
                path: '/category',
                name: 'category',
                component: () =>
                    import ('../views/category/category')
            }
        ]
    },
    {
        path: '/details',
        name: 'details',
        component: () =>
            import ('../views/details/details.vue')
    },
    {
        path: '/address',
        name: 'address',
        component: () =>
            import ('../views/address/address')
    },

]

const router = new VueRouter({
    mode: 'history',
    base: process.env.BASE_URL,
    routes
})

export default router