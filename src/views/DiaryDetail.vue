<template>
  <div>This is from Diary {{ $route.params.slug }}</div>
</template>

<script>
export default {
   mounted(){
     console.log(this.slug)
   },
  data() {
    return {
      
    };
  },
  props: {
    slug: {
      require: true,
      type: String,
    },
  },
};
</script>

<style scoped>
</style>