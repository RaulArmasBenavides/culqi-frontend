// src/router/index.ts
import { createRouter, createWebHashHistory, RouteRecordRaw } from "vue-router";

const routes: RouteRecordRaw[] = [
  {
    path: "/",
    name: "landing",
    component: () => import("@/modules/landing/layout/LandingLayout.vue"),
    children: [
      {
        path: "/",
        name: "home",
        component: () =>
          import("../modules/landing/cards/pages/createToken.vue"),
      },
      {
        path: "/createToken",
        name: "home",
        component: () =>
          import("../modules/landing/cards/pages/createToken.vue"),
      },
      {
        path: "/createToken",
        name: "createToken",
        component: () =>
          import("../modules/landing/cards/pages/createToken.vue"),
      },
      {
        path: "/cardInformation",
        name: "cardInformation",
        component: () =>
          import("../modules/landing/cards/pages/cardInformation.vue"),
      },
    ],
  },

  // Auth
  {
    path: "/auth",
    redirect: { name: "login" }, //'/login',
    component: () => import("@/modules/auth/layouts/AuthLayout.vue"),
    children: [
      {
        path: "login",
        name: "login",
        component: () => import("@/modules/auth/pages/LoginPage.vue"),
      },
      {
        path: "register",
        name: "register",
        component: () => import("@/modules/auth/pages/RegisterPage.vue"),
      },
    ],
  },
  {
    path: "/:pathMatch(.*)*",
    name: "NotFound",
    component: () => import("../modules/shared/pages/NoPageFound.vue"),
  },
];

export default createRouter({
  history: createWebHashHistory(),
  routes,
});
