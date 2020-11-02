<template>
  <main>
    <px-header class="py-3 shadow-inner py-3 bg-gray-700" />
    <router-view class="container px-5 sm:px-20 py-20 flex justify-center"/> <!-- Aqui se va a reemplazar la pagina que deseemos -->
    <px-footer class="bg-gray-900 text-white"/>
    </main>
</template>

<script>

import PxHeader from "@/components/PxHeader"
import PxFooter from "@/components/PxFooter"

export default {
  name: "App",
  components: {
    PxHeader,
    PxFooter
  }
};
</script>

<style>
#app {

  text-align: center;
  background-color: white;
  
}
</style>
