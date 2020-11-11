<template>
    <div>

        <a :href="url"> <p class="py-2"> <span class="font-bold mr-3">Name: </span>{{name}} </p> </a>
        <p class="py-2"> <span class="font-bold mr-3">Description: </span>{{desc}} </p>
        <p> <span class="font-bold mr-3"> Language: </span> <span class="text-blue-700">{{language}} </span></p>

    </div>
</template>

<script>
export default {

    name: "PxContainerRepo",
    props: ['name', 'url', 'desc', 'language']

    
}
</script>

<style scoped>

</style>