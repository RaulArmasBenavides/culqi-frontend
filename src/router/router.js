// src/router/index.ts
import { createRouter, createWebHashHistory } from 'vue-router';
const routes = [
    {
        path: '/',
        name: 'createToken',
        component: () => import('../modules/cards/pages/createToken.vue'),
    },
    {
        path: '/cardInformation',
        name: 'cardInformation',
        component: () => import('../modules/cards/pages/cardInformation.vue'),
    },
    {
        path: '/:pathMatch(.*)*',
        name: 'NotFound',
        component: () => import('../modules/shared/pages/NoPageFound.vue'),
    },
];
export default createRouter({
    history: createWebHashHistory(),
    routes,
});
//# sourceMappingURL=router.js.map