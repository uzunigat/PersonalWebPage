<template>

    <header class="bg-gray-900">

        <nav>
            <nav class="text-right bg-gray-900 p-6">
                   
                    <!-- <px-logo class="mr-3 h-10 w-10"></px-logo> -->

                    <px-btn-menu v-on:menu-clicked="clickMenu"/>

            </nav>

        </nav>

        <div :class="isOpen ? 'block' : 'hidden'">

            <span class="block text-center px-6 text-white font-semibold pt-2 pb-2" v-for="item in items" v-bind:key="item"> 

                 <px-item-navbar class="block hover:bg-red-900 px-15 py-2" :item="item"/>

            </span>

        </div>

    </header>

</template>

<script>

//import PxLogo from "@/components/PxLogo";
import PxItemNavbar from "@/components/PxItemNavbar";
import PxBtnMenu from "@/components/PxBtnMenu";

export default {
    
    name: "Pxheader",
    components: {PxItemNavbar, PxBtnMenu},
    data(){

        return {

            items:[
            {name: "Home",  link: "/"},
            {name: "Profile", link: "/Profile" },
            {name: "Experiences", link: "/Experiences"},
            {name: "Skills", link: "/Skills"},
            {name: "Projects", link: "/Project"}],

            isOpen: false,

        }

    },

        methods: {

        clickMenu: function(){

            this.isOpen = !this.isOpen;

        },

    }
    
}
</script>>