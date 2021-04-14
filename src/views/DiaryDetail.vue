<template>
  <div  class="detail">
    <go-back></go-back>
    <read-diary :name="diary.name" :description="diary.description" :date="diary.date" :time="diary.time"></read-diary>
  </div>
</template>

<script>
import GoBack from '../components/GoBack.vue';
import readDiary from '../components/readDiary';
const axios = require("axios");

export default {
  components: { GoBack,readDiary },
   created(){
     this.fetchDestination();
   },
  data() {
    return {
      diary: [],
      url: "http://localhost:5000/diaries/",
    };
  },
  props: {
    slug: {
      require: true,
      type: String,
    },
  },
  methods:{
    fetchDestination() {
      axios
        .get(this.url+this.$route.params.slug)
        .then((response) => {
          this.diary = response.data;
          return response.data ;
        })
        .catch((err) => {
          console.error(err);
        });
    },
  }
};
</script>

<style scoped>
.detail{
  @apply mx-auto max-w-4xl;
}
</style>