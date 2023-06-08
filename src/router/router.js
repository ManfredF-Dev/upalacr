

const router = [
    {
        path: '/',
        children:[
            {
                path: '/login', component: () => import('../components/login.vue')
            }
        ]
    }
]

export default router;

