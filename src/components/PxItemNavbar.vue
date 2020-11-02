<template>
    <router-link :to="item.link">
        <span class="font-semibold text-xl tracking-tight"> {{item.name}}</span>
    </router-link>
</template>

<script>

export default {

    name: "PxItemNavbar",

    props: ["item"]
    
}
</script>>

<style scoped>

</style>>