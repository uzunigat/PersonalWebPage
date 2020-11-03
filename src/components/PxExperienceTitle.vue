<template>
    <div>
        <px-title :title="name" font-style="font-serif" size="text-md" color="text-black" class="block" />
        <px-title :title="`${date_debut} - ${date_fin}`" font-style="font-serif" size="text-md" color="text-gray-700" class="block" />
    </div>
</template>

<script>
import PxTitle from "@/components/PxTitle.vue"

export default {
    name: "PxExperienceTitle",
    components: {PxTitle},
    props: ["name", "date_debut", "date_fin"]
}
</script>