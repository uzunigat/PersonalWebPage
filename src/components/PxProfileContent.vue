<template>
    <div>
        <px-title :title="title" font-style="font-serif" size="text-xl" color="text-blue-600" class="pb-5"/>
        <p class="justify-self-auto" align="center">{{content}}</p>
    </div>
</template>

<script>
import PxTitle from "@/components/PxTitle.vue"
export default {
    name: "PxProfileContent",
    components: {PxTitle},
    props: ["title", "content" ]
}
</script>