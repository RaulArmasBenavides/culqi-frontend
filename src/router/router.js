import { createWebHashHistory,createRouter } from 'vue-router'
import createToken from '../modules/cards/pages/createToken'
import cardInformation from '../modules/cards/pages/cardInformation'
import NoPageFound from '../modules/shared/pages/NoPageFound'

const routes = [
    {
        path :'/', 
        name: 'createToken',
        component:createToken
    },
    {
        path :'/cardInformation', 
        name: 'cardInformation',
        component:cardInformation
    },
    {
        path:'/;pathMatch(.*)*', 
        component:NoPageFound
    }
]

const router = createRouter({
    history: createWebHashHistory(),
    routes,
})

export default router