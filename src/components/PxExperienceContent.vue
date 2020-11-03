<template>
    <div>
        <px-title :title="diploma" font-style="font-serif" size="text-md" color="text-black" class="block" />
        <p class="text-gray-600 pb-2" >{{description}}</p>
        <div class="inline-flex">
            <img src="@/assets/location_logo.png" class="w-6 h-6 mr-2"><p class="text-blue-600" >{{location}}</p>
        </div>
    </div>
</template>

<script>

import PxTitle from "@/components/PxTitle.vue"

export default {
    name: "PxExperienceContent",
    components: {PxTitle},
    props: ["diploma", "description", "location"]
}
</script>>