<template>
    <div class="flex flex-col divide-y divide-gray-400">

        <div>
            <px-title title="Experiences" font-style="font-serif" size="text-6xl" color="text-blue-600" class="block"/>
            <px-title title="The only source of knowledge is experience" font-style="font-serif" size="text-xl" color="text-gray-600" class="block"/>
            <px-title title="- Albert Einstein" font-style="font-serif" size="text-md" color="text-gray-600 text-opacity-75" class="block pb-8"/>
        </div>

        <px-title title="Education" font-style="font-serif" size="text-3xl" color="text-blue-600" class="block py-3"/>

        <div class="grid grid-flow-row auto-rows-max gap-y-6 py-6">
        
            <div v-for="experience of experiences" :key="experience.name">
                <div class="grid lg:grid-cols-2 xl:grid-cols-2 xl:gap-x-3 lg:gap-x-2 md:gap-y-2 sm:gap-y-2" >
                    <px-experience-title class="text-left pl-24 xl:py-5 " :name="experience.name.toUpperCase()" :date_debut="experience.date_debut" :date_fin="experience.date_fin" />
                    <px-experience-content class="text-left pl-24 xl:py-5" :diploma="experience.diploma" :description="experience.description" :location="experience.location"/>
                </div>
            </div>


        </div>

        <px-title title="Careers" font-style="font-serif" size="text-3xl" color="text-blue-600" class="block py-3"/>

        <div class="grid grid-flow-row auto-rows-max gap-y-6 py-6">
        
            <div v-for="career of careers" :key="career.name">
                <div class="grid lg:grid-cols-2 xl:grid-cols-2 xl:gap-x-3 lg:gap-x-2 md:gap-y-2 sm:gap-y-2 ">
                    <px-experience-title class="text-left pl-24 xl:py-5" :name="career.name.toUpperCase()" :date_debut="career.date_debut" :date_fin="career.date_fin" />
                    <px-experience-content class="text-left pl-24 xl:py-5" :diploma="career.project" :description="career.description" :location="career.location"/>
                </div>
            </div>


        </div>

    </div>
</template>

<script>

import PxTitle from "@/components/PxTitle.vue"
import PxExperienceTitle from "@/components/PxExperienceTitle.vue"
import PxExperienceContent from "@/components/PxExperienceContent.vue"
import Experience from "@/class/Experience.js"
import Career from "@/class/Career.js"



export default {
    name: "Experiences",
    components: {PxTitle, PxExperienceTitle, PxExperienceContent},
    data(){

        return {

            experiences: new Array(),
            careers: new Array()
        }

    },

    created() {

        this.experiences.push(new Experience("University of Technology at Compiegne", "Sept-2017", "Sept-2022", "Computer Engineering", "During my education within the university, the first two years I had the foundations of engineering (Physics, multivariable calculus, linear algebra, ...). The following years were oriented to programming, mostly programming based on the C language, although in the same way I learned other languages ​​such as python, PHP, SQL, among others. The most important thing, beyond a programming language, is to form logic and learn to create algorithms by analyzing their cost in execution and memory.", "Compiegne, France"))
        
        this.experiences.push(new Experience("IPN", "Sept-2017", "Sept-2022", "Computer Engineering", "Although it is true that I have not studied directly within the IPN in Mexico, currently my dual diploma training is ongoing.", "Mexico City"))

        this.careers.push(new Career("Faurecia", "Sept-2020", "February-2021", "SAFETY AND REGULATION", "Finalize the web-based digital audit version, Adapt the system according to the requests formulated by our internal 'GIS' department, Provide feedback and modifications to comments made by users, Ensure the setting and correction of bugs", "Beauvais, France"))

    }
}
</script>