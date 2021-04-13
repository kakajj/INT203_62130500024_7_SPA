<template>
    <section class="diary">
        <go-back></go-back>
        <h1>All Diaries</h1>
    </section>
</template>

<script>
import GoBack from '../components/GoBack'

export default {
    components:{
        GoBack
    }
}
</script>

<style scoped>
.diary {
    @apply mx-auto max-w-4xl;
}
</style>