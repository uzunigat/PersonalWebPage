<template>

        <div class="divide-y-2 divide-gray-600 divide-opacity-25">
                
                <div class="text-center mx-6">
                        <px-contact class="shadow-inner py-5 text-white" />
                </div>

                <div class="mx-8">

                       <div class="grid grid-cols-2 divide-x-2 divide-gray-400 py-5 divide-opacity-25" >
                               
                               <div v-for="tag in tags" :key="tag.name">
                                        <px-contact-tag :tag="tag" class="text-center"/>
                               </div>

                        </div>
                </div>
                        <div class="mx-8">
                                <p class="text-gray-600 text-sm pt-3 text-opacity-75"> Created by Uriel ZUNIGA </p>
                                <p class="text-gray-600 text-sm pb-3 text-opacity-50"> 2020 </p>
                        </div>
                
                        
                
        </div>


</template>

<script>

import PxContact from "@/components/PxContact"
import PxContactTag from "@/components/PxContactTag"

export default {

        name: "PxFooter",
        components: {PxContact, PxContactTag},
        data(){

                return{

                        tags: [
                                {name: "email", icon: 'mail.png', value: "zuniga.tellez.rodrigo.uriel@hotmail.com"},
                                {name: "linkedin", icon: 'linkedin.png', value: "https://www.linkedin.com/in/rodrigo-uriel-zuniga-tellez-1121431b9"}
                        ]

                }

        }
    
}
</script>

<style scoped>

</style>