import { createRouter, createWebHistory } from 'vue-router'

const routes = [
    {
        path: '/',
        name: 'home',
        component: () => import('@/views/Home.vue'),
    },
    {
        path: '/faceRecognition',
        name: 'faceRecognition',
        component: () => import('@/components/FaceRecognition.vue'),
    },
]

const router = createRouter({
    history: createWebHistory(),
    routes
})

export default router