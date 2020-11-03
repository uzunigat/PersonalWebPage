<template>
    <div >

        <p :class="`${font-style} ${size} ${color}`">{{title}}</p>

    </div>
</template>

<script>
export default {
    name: "PxTitle",
    props: ["title", "font-style", "size", "color"],
}
</script>