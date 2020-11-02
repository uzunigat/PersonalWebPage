import {createWebHistory, createRouter} from "vue-router"
import Home from "@/views/Home"
import Project from "@/views/Project"
import About from "@/views/About"

const routes = [

    {

        path: "/",
        name: "home",
        component: Home

    },

    {

        path: "/Project",
        name: "Project",
        component: Project

    },

    {

        path: '/About',
        name: "About",
        component: About


    }

];

const router = createRouter({

    history: createWebHistory(),
    routes

});

export default router;