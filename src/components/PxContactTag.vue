<template>
    <div>
        <!-- <img :src="tag.icon" :alt="tag.name" class="pr-2 w-8 h-8"> -->
        <a :href="tag.value" class="bold text-gray-600 hover:text-white px-5"> {{tag.value}}</a>
    </div>
</template>

<script>
export default {

    name: "PxContactTag",
    props: ["tag"]
    
}
</script>

<style scoped>

</style>