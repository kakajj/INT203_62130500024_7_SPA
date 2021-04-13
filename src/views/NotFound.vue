<template>
    <div>
        
        <h1>Error Not Found</h1>
        <p>
            Oops we couldnt find that page, Try going
            <router-link :to="{name:'Home'}">Home Page</router-link>
        </p>
        <go-back></go-back>
    </div>
</template>
<script>
import GoBack from '../components/GoBack'
export default  {
    components:{
        GoBack
    }
}
</script>