<template>
    <section>
        <h1>Experiences</h1>
        <h2>{{ exp.name }}</h2>
        <div class="exp-details">
            <img :src="require(`@/assets/${exp.image}`)" :alt="exp.name">
            <p>{{exp.description}}</p>
        </div>
    </section>
</template>

<script>
import store from  '@/store.js'

export default {
    props:{
        slug:{
            type:String,
            require:true
        },
        expSlug:{
            type:String,
            require: true
        }
    },
    computed:{
        destination(){
            return store.destinations.find(
                destination => destination.slug == this.slug
            );
        },
        exp(){
            return this.destination.experiences.find(
                exp => exp.slug == this.expSlug
            )
        }
    }
}
</script>


<style scoped>

.exp-details img{
    width: 100%;
    height: auto;
    max-height: 400px;
}
.exp-details{
    display: flex;
    justify-content: space-between;
}
p {
    margin: 0 40px;
    font-size: 20 px;
    text-align: left;
}
</style>