<template>
    <section class="aboutme">
        <go-back/>
        <h1>About Me</h1>
    </section>
</template>

<script>
import GoBack from '../components/GoBack.vue'

export default {
    components:{
        GoBack
    }
}
</script>

<style scoped>
.aboutme{
    @apply mx-auto max-w-4xl;
}
</style>