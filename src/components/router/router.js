import {createRouter, createWebHistory} from 'vue-router'
import Main from "../pages/Main.vue"
import PostPage from "../pages/PostPage.vue"
import About from "../pages/About.vue"
import PostIdPage from "../pages/PostIdPage.vue"
import PostPageWithVuex from "../pages/PostPageWithVuex.vue"

const routes = [
    {
        path:'/',
        component: Main
    },
    {
        path:'/posts',
        component: PostPage
    },
    {
        path:'/about',
        component: About
    },
    {
        path:'/posts/:id',
        component: PostIdPage
    },
    {
        path:'/store',
        component: PostPageWithVuex
    },
]

const router = createRouter({
    routes,
    history: createWebHistory()
})

export default router;