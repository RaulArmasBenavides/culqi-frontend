import { createRouter, createWebHashHistory, RouteRecordRaw } from "vue-router";
import isAuthenticatedGuard from "@/modules/auth/guards/is-authenticated.guard";

const routes: RouteRecordRaw[] = [
  {
    path: "/",
    name: "landing",
    component: () => import("@/modules/landing/layout/LandingLayout.vue"),
    children: [
      {
        path: "",
        name: "home",
        component: () =>
          import("@/modules/landing/cards/pages/createToken.vue"),
      },
      {
        path: "createToken",
        name: "createToken",
        component: () =>
          import("@/modules/landing/cards/pages/createToken.vue"),
        beforeEnter: isAuthenticatedGuard,
      },
      {
        path: "cardInformation",
        name: "cardInformation",
        component: () =>
          import("@/modules/landing/cards/pages/cardInformation.vue"),
        beforeEnter: isAuthenticatedGuard,
      },
    ],
  },

  // Auth
  {
    path: "/auth",
    redirect: { name: "login" },
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
    component: () => import("@/modules/shared/pages/NoPageFound.vue"),
  },
];

export default createRouter({
  history: createWebHashHistory(),
  routes,
});
