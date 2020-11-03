<template>
    <div class="flex flex-col divide-y divide-gray-400">

        <div>
            <px-title title="Skills" font-style="font-serif" size="text-6xl" color="text-blue-600" class="block"/>
            <px-title title="The only source of knowledge is experience" font-style="font-serif" size="text-xl" color="text-gray-600" class="block"/>
            <px-title title="- Albert Einstein" font-style="font-serif" size="text-md" color="text-gray-600 text-opacity-75" class="block pb-8"/>
        </div>

        <div class="grid xl:grid-cols-2 lg:grid-cols-2 md:grid-cols-1 sm:grid-cols-1 py-8">
        
            <div v-for="skill of skills" :key="skill">
            
                    <px-skill :name="skill.name" :level="skill.level" />
            </div>

        </div>

        <div>
            <px-title title="Languages" font-style="font-serif" size="text-4xl" color="text-blue-500" class="block py-8"/>
        </div>

        <div class="grid xl:grid-cols-2 lg:grid-cols-2 md:grid-cols-1 sm:grid-cols-1 py-8">
        
            <div v-for="language of languages" :key="language">
            
                    <px-skill :name="language.name" :level="language.level" />
            </div>

        </div>

        
        <div>
            <px-title title="Tools" font-style="font-serif" size="text-4xl" color="text-blue-500" class="block py-8"/>
        </div>

        <div class="grid xl:grid-cols-2 lg:grid-cols-2 md:grid-cols-1 sm:grid-cols-1 py-8">
        
            <div v-for="tool of tools" :key="tool">
            
                    <px-skill :name="tool.name" :level="tool.level" />
            </div>

        </div>

    </div>
</template>

<script>

import PxTitle from "@/components/PxTitle.vue"
import PxSkill from "@/components/PxSkill.vue"
import Skill from "@/class/Skill.js"
import Tool from "@/class/Tool.js"
import Languages from "@/class/Language.js"


export default {
    name: "Skills",
    components: {PxTitle, PxSkill},

    data() {

        return {

            skills: new Array,
            tools: new Array,
            languages: new Array

        }

    },

    created(){

        //Push of Skills elements

        this.skills.push(new Skill("C", 9));
        this.skills.push(new Skill("C++", 7));
        this.skills.push(new Skill("JavaScript", 7));
        this.skills.push(new Skill("PHP", 7));
        this.skills.push(new Skill("HTML", 7));
        this.skills.push(new Skill("XML", 7));
        this.skills.push(new Skill("JSON", 6));
        this.skills.push(new Skill("MYSQL", 6));
        this.skills.push(new Skill("Bootstrap Framework", 6));
        this.skills.push(new Skill("TailWind Framework", 6));
        this.skills.push(new Skill("CSS", 6));
        this.skills.push(new Skill("Python", 5));
        this.skills.push(new Skill("C#", 5));
        this.skills.push(new Skill("Unity", 5));
        this.skills.push(new Skill("Java", 5));
        this.skills.push(new Skill("Docker", 3));
        this.skills.push(new Skill("Visual Basic", 3));

        // Push of Tools elements

        this.tools.push(new Tool("Git", 8));
        this.tools.push(new Tool("VSCode", 8));
        this.tools.push(new Tool("MS Office", 8));
        this.tools.push(new Tool("Linux", 6));

        // Push of Languages elements
        this.languages.push(new Languages("Spanish (native)",10))
        this.languages.push(new Languages("English (B2)",7))
        this.languages.push(new Languages("French (B2)",7))
    }
}
</script>