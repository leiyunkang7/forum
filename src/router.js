import Vue from "vue";
import Router from "vue-router";
import Home from "./views/home";

Vue.use(Router);

export default new Router({
  mode: "history",
  base: process.env.BASE_URL,
  routes: [
    {
      path: "/:tab?",
      name: "home",
      component: Home,
      props: true
    },
    {
      path: "/question/:questionId",
      name: "question",
      component: () =>
        import(/* webpackChunkName: "me" */ "./views/question/index.vue")
    },
    {
      path: "/about",
      name: "about",
      // route level code-splitting
      // this generates a separate chunk (about.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () =>
        import(/* webpackChunkName: "about" */ "./views/About.vue")
    },
    {
      path: "/me",
      name: "me",
      component: () => import(/* webpackChunkName: "me" */ "./views/me.vue")
    }
  ]
});
