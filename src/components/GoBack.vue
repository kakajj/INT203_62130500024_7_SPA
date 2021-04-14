<template>
    <span class="go-back">
        <button @click="goBack">Go Back</button>
    </span>
</template>

<script>
export default {
    methods:{
        goBack(){
            return this.$router.go(-1);
        }
    }
}
</script>

<style scoped>
.go-back{
    @apply w-full h-10 flex cursor-pointer
}
button {
    border: antiquewhite;
    background-color: seashell;
    @apply w-full hover:bg-red-100
}
</style>