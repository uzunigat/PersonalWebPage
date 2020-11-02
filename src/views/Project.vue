<template>

    <div>

        <px-content :assets="assets"/>

    </div>

</template>

<script>
import PxContent from "@/components/PxContent";
import api from "@/api"

export default {
    name: "Project",

    components: {PxContent},

    data(){

        return {

            assets: []

        }
    
    },

    created(){

        api.getAssets()
        .then(assets => this.assets = assets)

    }

}
</script>

<style scoped>

</style>