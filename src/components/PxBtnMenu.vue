<template>

        <button @click="clickMenu" type="button">
                        
            <img class="w-8 h-8 " src="../assets/menu_icon.png" alt="menu_icon">

        </button>

</template>

<script>

export default {

    name: "PxBtnMenu",

    methods: {

        
        clickMenu() {

            this.$emit('menu-clicked')

        }

    },

}
</script>

<style scoped>

</style>