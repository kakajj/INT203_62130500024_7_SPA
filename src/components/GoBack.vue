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
    width: fit-content;
    cursor: pointer;
}
button {
    border: antiquewhite;
    background-color: seashell;
}
</style>