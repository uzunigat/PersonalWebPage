<template>
    <div class="flex flex-col divide-y divide-gray-400">
        
            <div>
                <px-title title="Profile" font-style="font-serif" size="text-6xl" color="text-blue-600" class="block"/>
                <px-title title="I'm a creative Developer" font-style="font-serif" size="text-2xl" color="text-gray-600" class="block pb-5"/>
            </div>
       

        <div class="flex items-center sm:flex-col md:flex-col lg:flex-row xl:flex-row pt-5 " id="content">

            <px-profile-content title="About" :content="about" class="flex-1 py-8 xl:px-8 sm:px-1"/>
            <img src="../assets/profilepicture.jpg" alt="Profile_Picture" class="flex-1 w-3/6 py-8 xl:px-8 sm:px-1 align-middle">

            <div class="flex-1 py-8 xl:px-8 sm:px-1">
                <px-title title="Details" font-style="font-serif" size="text-xl" color="text-blue-600" class="pb-5"></px-title>
                <p class="font-bold text-black text-md" align="left"> NAME:</p>
                <p class="text-black text-md pb-5" align="left"> {{details.name}}</p>

                <p class="font-bold text-black text-md" align="left"> Age:</p>
                <p class="text-black text-md pb-5" align="left"> {{details.Age}}</p>

                <p class="font-bold text-black text-md" align="left"> Location:</p>
                <p class="text-black text-md" align="left"> {{details.Location}}</p>


            </div>

        </div>
    </div>
</template>

<script>

import PxTitle from "@/components/PxTitle.vue"
import PxProfileContent from "@/components/PxProfileContent.vue"

export default {
    name: "Profile",
    components: {PxTitle, PxProfileContent},
    data() {

        return {

            about: "Student at the University of Technology at Compiegne (France) of the 'computer engineering' career. After having followed a computer technicien training within the IPN, I managed to obtain a scholarship thanks to my good academic performance to strat a double diploma between the IPN and the UTC. In my spare time I like to learn new technologies currently used by large technology companies. On the other hand, I'm looking to become a video game deveoper and that's why I started a personal project as a Facebook Instant Game Developer",
            details: {name: "Rodrigo Uriel ZUNIGA TELLEZ",
                      Age: "21 Years",
                      Location: "Beauvais, France"
                      }
                }
        }

    }

</script>

<style scoped>



</style>