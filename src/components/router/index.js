import Vue from "vue";
import Router from "vue-router";
import MainPage from "@/components/MainPage";
import Sponsors from "@/components/Sponsors";
import Team from "@/components/Team";
import Gallery from "@/components/Gallery";
import AboutUs from "@/components/AboutUs";

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: "/",
      name: "MainPage",
      component: MainPage
    },
    {
      path: "/sponsors",
      name: "Sponsors",
      component: Sponsors
    },
    {
      path: "/team",
      name: "Team",
      component: Team
    },
    {
      path: "/gallery",
      name: "Gallery",
      component: Gallery
    },
    {
      path: "/aboutus",
      name: "AboutUs",
      component: AboutUs
    }
  ]
});
