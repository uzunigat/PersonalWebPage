<template>

        <div class="bg-fixed bg-center large-height background" >
            <div class="effect">
                <p class="flex justify-center"></p>
            </div>
        </div>
 
</template>

<script>

export default {
    name: "Home",


    
};

</script>

<style scoped>

    .background{

        background-image: url("../assets/background.jpg");
        background-position: center center;
        background-repeat: no-repeat;
        background-attachment: fixed;
        background-size: cover;
        background-color: #464646;

        
        filter: blur(10px);  
        -webkit-filter: blur(10px);

        height: 1000px;
        width: 100%

    }




</style>