<template>

    <header class="bg-red-900">

        <nav>
            <nav class="flex items-center justify-between flex-wrap bg-current p-6">

                <div class="flex items-center flex-shrink-0 text-white mr-6">

                   
                    <pxLogo class="mr-3 h-10 w-10"></pxLogo>
                    
                    <span v-for="item in items" v-bind:key="item"> 

                        <px-item-navbar class="mr-5" :item="item"/>

                    </span>
                   

                </div>

                <div class="hidden sm:block w-full block flex-grow lg:flex lg:items-center">
                
                    <div class="text-sm lg:flex-grow"></div>
                
                </div>

            </nav>


        </nav>

    </header>

</template>

<script>

import PxLogo from "@/components/PxLogo";
import PxItemNavbar from "@/components/PxItemNavbar"

export default {
    
    name: "Pxheader",
    components: {PxLogo, PxItemNavbar},
    data(){

        return {

            items:[
            {name: "Home",  link: "/"},
            {name: "Project", link: "/Project" },
            {name: "About", link: "/About"}]

        }

    }
}
</script>>