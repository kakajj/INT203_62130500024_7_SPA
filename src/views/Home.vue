<template>
  <div class="home">
    <h1>Welcome!</h1>
    <div class="destinations" v-if="start">
      <div class="links">
        <router-link to="/diaries">
          <button class="btn"> Check My Diaries </button>
        </router-link>
          <router-link to="/about">
            <button class="btn"> About Me </button>
          </router-link>
      </div>
    </div>
    <div v-else>
        <button class="btn" @click="getStart">Enter</button>
    </div>
  </div>
</template>


<script>
// @ is an alias to /src
export default {
  name: "Home",
  components: {},
  data() {
    return {
      start: false,
    };
  },
  methods: {
    getStart(){
      this.start = !this.start
    }
    },
  };
</script>

<style scoped>
.home {
  background-color: #e4bad4;
 @apply mx-auto max-w-4xl  ;
}

</style>
