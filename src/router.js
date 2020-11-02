import {createWebHistory, createRouter} from "vue-router"
import Home from "@/views/Home"
import Project from "@/views/Project"
import Profile from "@/views/Profile"
import Experiences from "@/views/Experiences"
import Skills from "@/views/Skills"

const routes = [

    {

        path: "/",
        name: "home",
        component: Home

    },

    {

        path: "/Profile",
        name: "Profile",
        component: Profile

    },

    {

        path: '/Experiences',
        name: "Experiences",
        component: Experiences

    },

    {

        path: '/Skills',
        name: "Skills",
        component: Skills

    },

    {

        path: '/Project',
        name: "Project",
        component: Project

    }

];

const router = createRouter({

    history: createWebHistory(),
    routes

});

export default router;