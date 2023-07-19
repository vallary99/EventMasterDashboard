import { createRouter, createWebHistory } from "vue-router";
import HomeView from "@/views/HomeView.vue";
import FindActivity from "@/views/FindActivity.vue";
import CreateEvent from "@/views/CreateEvent.vue";
import HostEvents from "@/views/HostEvents.vue";
import ProfilePage from "@/views/ProfilePage.vue";
import Quiz from "@/views/Q&APage.vue";
import LoginPage from "@/views/Pages/LoginPage.vue";
import ResetPassword from "@/views/Pages/ResetPage.vue";
import ForgotPassword from "@/views/Pages/ForgotPage.vue";
import RegisterPage from "@/views/Pages/RegisterPage.vue";

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "login",
      component: LoginPage,
    },

    {
      path: "/reset-password",
      name: "reset-password",
      component: ResetPassword,
    },

    {
      path: "/register",
      name: "register",
      component: RegisterPage,
    },

    {
      path: "/forgot-password",
      name: "forgot-password",
      component: ForgotPassword,
    },

    {
      path: "/dashboard",
      name: "dashboard",
      component: HomeView,
      meta: {
        requiresAuth: true,
      },
    },
    {
      path: "/find-activity",
      name: "find-activity",
      component: FindActivity,
    },
    {
      path: "/create-event",
      name: "create-event",
      component: CreateEvent,
    },
    {
      path: "/host-events",
      name: "host-events",
      component: HostEvents,
    },
    {
      path: "/profile",
      name: "profile",
      component: ProfilePage,
    },
    {
      path: "/q&a",
      name: "q&a",
      component: Quiz,
    },
  ],
});

export default router;
