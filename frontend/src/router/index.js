import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";
import AddUser from "../components/AddUser.vue";
import AddTransaction from "../components/AddTransaction.vue";
import ViewAllTransactions from "../components/ViewAllTransactions.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home
  },
  {
    path: "/add-user",
    name: "AddUser",
    component: AddUser
  },
  {
    path: "/add-transaction",
    name: "AddTransaction",
    component: AddTransaction
  },
  {
    path: "/view-all-transactions",
    name: "ViewAllTransactions",
    component: ViewAllTransactions
  },
  {
    path: "/about",
    name: "About",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/About.vue")
  }
];

const router = new VueRouter({
  routes
});

export default router;
