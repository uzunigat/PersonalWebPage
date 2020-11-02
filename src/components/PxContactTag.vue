<template>
    <div>
        <a v-if="tag.name == 'email'" :href="`mailto:${tag.value}`"><img :src="require(`../assets/${tag.icon}`)" :alt="tag.name" class="center w-12 h-12"></a>
        <a v-else :href="tag.value" ><img :src="require(`../assets/${tag.icon}`)" :alt="tag.name" class="center w-12 h-12"></a>
        <!-- <a :href="tag.value" class="bold text-gray-600 hover:text-white px-5"> {{tag.value}}</a> -->
    </div>
</template>

<script>
export default {

    name: "PxContactTag",
    props: ["tag"]
    
}
</script>

<style scoped>

.center {

        display: block;
        margin-left: auto;
        margin-right: auto;
        width: 50%;

}

</style>