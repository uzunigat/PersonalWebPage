<template>
    <div>

        <p class="inline-block text-center text-bold text-md xl:text-xl lg:text-xl md:text-md sm: text-md">{{name}}</p>
        <div class="px-24 relative pt-1">
            <div class="overflow-hidden h-3 mb-3 flex text-xs rounded bg-gray-400">
                <div :style="`width:${(level*100)/10}%`" class="shadow-none flex flex-col text-center whitespace-nowrap text-white justify-center bg-blue-800"></div>
            </div>
        </div>

    </div>
</template>

<script>
export default {
    name: "PxSkill",
    props: ["name", "level"],
}
</script>