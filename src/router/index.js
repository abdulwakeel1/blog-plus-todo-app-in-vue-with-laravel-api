import { createRouter, createWebHistory } from "vue-router";

// import { useAuthStore } from '../stores/auth'


const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/login",
      name: "login",
      component: () => import("../views/LoginView.vue"),
    },
    {
      path: "/register",
      name: "register",
      component: () => import("../views/RegisterView.vue"),
    },
    {
      path: "/dashboard",
      name: "dashboard",
      component: () => import("../views/DashBoardView.vue"),
    },
    {
      path: "/",
      name: "home",
      component: import("../views/HomeView.vue"),
    },
    {
      path: "/about",
      name: "about",
      // component: HomeView,

      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import("../views/AboutView.vue"),
    },
    {
      path: "/counter-component",
      name: "counter-component",
      component: () => import("../views/Counter.vue"),
    },
    {
      path: "/blogs",
      name: "blogs",
      component: () => import("../views/BlogVue.vue"),
    },
    {
      path: "/blogsListing",
      name: "blogsListing",
      component: () => import("../views/BlogsListing.vue"),
    },
    {
      path: "/practice",
      name: "practice",
      component: () => import("../views/PracticeConcepts.vue"),
    },
    {
      path: "/blog/create",
      name: "/blog/create",
      component: () => import("../views/CreateBlog.vue"),
    },
    {
      path: "/blog/show/:id",
      name: "/show-blog",
      component: () => import("../views/ShowBlog.vue"),
    },
    {
      path: "/blog/edit/:id",
      name: "/edit-blog",
      component: () => import("../views/EditBlog.vue"),
    },
    {
      path: "/profile",
      name: "/profile",
      component: () => import("../views/Profile.vue"),
    },
  ],
});

// router.beforeEach(async (to) => {
//   // redirect to login page if not logged in and trying to access a restricted page
//   const publicPages = ['/login'];
//   const authRequired = !publicPages.includes(to.path);
//   const auth = useAuthStore();
//   auth.login()

//   console.log(auth.user);
//   // console.log('auth.user');

//   if (authRequired && !auth.user) {
//       auth.returnUrl = to.fullPath;
//       return '/login';
//   }
// });

export default router;
