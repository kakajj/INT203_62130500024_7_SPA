<template>
  <section>
    <h1>Experiences</h1>
    <!-- <h2>{{ exp.name }}</h2>
    <div class="exp-details">
      <img :src="require(`@/assets/${exp.image}`)" :alt="exp.name" />
      <p>{{ exp.description }}</p>
    </div> -->
  </section>
</template>

<script>
export default {
  created() {
    this.fetchDestination();
  },
  watch: {
    $route: "fetchDestination",
  },
  data() {
    return {
      destinationArray: [],
      url: "http://localhost:5000/destinations",
      status: false,
    };
  },
  props: {
    slug: {
      type: String,
      require: true,
    },
    expSlug: {
      type: String,
      require: true,
    },
  },
  computed: {
    checkStatus(){
        if(this.status){
            return true
        }else{
            return false
        }
    },
    destination() {
      console.log(this.destinationArray);
      if (this.checkStatus) {
        const dest = this.destinationArray.find(
          (destination) => destination.slug == this.slug
        );
        return dest;
      } else {
        return [];
      }
    },
    exp() {
    console.log(this.destinationArray);
      if (this.checkStatus) {
        return this.destination.experiences.find(
        (exp) => exp.slug == this.expSlug
      );
      } else {
        return [];
      }

    },
  },
  methods: {
    fetchDestination() {
      fetch(this.url)
        .then((res) => {
          return res.json();
        })
        .then((data) => {
          this.destinationArray = data;
          this.status = !this.status;
        })
        .catch((error) => {
          console.log(error);
        });
    },
  },
};
</script>


<style scoped>
.exp-details img {
  width: 100%;
  height: auto;
  max-height: 400px;
}
.exp-details {
  display: flex;
  justify-content: space-between;
}
p {
  margin: 0 40px;
  font-size: 20 px;
  text-align: left;
}
</style>