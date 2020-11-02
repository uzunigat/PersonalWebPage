<template>

    <header class="bg-red-900">

        <nav>
            <nav class="flex items-center justify-between flex-wrap bg-current p-6">
                   
                    <px-logo class="mr-3 h-10 w-10"></px-logo>

                    <px-btn-menu v-on:menu-clicked="clickMenu"/>

            </nav>

        </nav>

        <div :class="isOpen ? 'block' : 'hidden'">

            <span class="block text-white font-semibold pt-2 pb-2" v-for="item in items" v-bind:key="item"> 

                 <px-item-navbar class="block hover:bg-red-800 px-15 py-2" :item="item"/>

            </span>

        </div>

    </header>

</template>

<script>

import PxLogo from "@/components/PxLogo";
import PxItemNavbar from "@/components/PxItemNavbar";
import PxBtnMenu from "@/components/PxBtnMenu";

export default {
    
    name: "Pxheader",
    components: {PxLogo, PxItemNavbar, PxBtnMenu},
    data(){

        return {

            items:[
            {name: "Home",  link: "/"},
            {name: "Project", link: "/Project" },
            {name: "About", link: "/About"}],

            isOpen: false,

        }

    },

        methods: {

        clickMenu(){

            this.isOpen = !this.isOpen

        }

    }
    
}
</script>>