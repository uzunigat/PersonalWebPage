<template>

    <div class="flex flex-col divide-y divide-gray-400">

        <div>
            <px-title title="Projects" font-style="font-serif" size="text-6xl" color="text-blue-600" class="block"/>
            <px-title title="Share your knowledge. It’s a way to achieve immortality." font-style="font-serif" size="text-xl" color="text-gray-600" class="block"/>
            <px-title title="- Dalai Lama" font-style="font-serif" size="text-md" color="text-gray-600 text-opacity-75" class="block pb-8"/>
        </div>

        <div>
            <div class="grid lg:grid-cols-2 xl:grid-cols-2 xl:gap-x-3 lg:gap-x-2 md:gap-y-2 sm:gap-y-2 ">
                
                <div v-for="repo of repos" :key="repo.id">
                        <a :href="repo.html_url"><px-container-repo class="transition duration-500 ease-in-out py-6 mx-3 text-left px-3 transform hover:-translate-y-1 hover:scale-105" :name="repo.name" :url="repo.html_url" :desc="repo.description" :language="repo.language"/></a>
                </div>

            </div>

        </div>

    </div>

</template>

<script>

//import PxContainerRepo from "../components/PxContainerRepo.vue";
import PxTitle from "../components/PxTitle.vue";
import PxContainerRepo from "../components/PxContainerRepo.vue";

export default {
    name: "Project",

    components: {PxContainerRepo, PxTitle},

    data(){

        return {

            repos: null

        }
    
    },

    beforeMount(){

            fetch('https://api.github.com/users/uzunigat/repos')
                .then(response => response.json())
                .then( repos => {

                    this.repos = repos;

                });

    },


}
</script>

<style scoped>

</style>