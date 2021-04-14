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
    display: flex;
    cursor: pointer;
    @apply w-2/12 
}
button {
    border: antiquewhite;
    background-color: seashell;
    @apply w-full
}
</style>