<template>
  <div>
    <section class="destinations">
      <go-back></go-back>
      <h1>
        {{ destination.name }}
      </h1>
      <div class="destination-details">
        <img
          :src="require(`@/assets/${destination.image}`)"
          :alt="destination.name"
        />
        <p>{{ destination.description }}</p>
      </div>
    </section>
    <section class="experiences">
      <h2>Top experiences in {{ destination.name }}</h2>
      <div class="cards">
        <div
          v-for="exp in destination.experiences"
          :key="exp.slug"
          class="card"
        >
          <router-link
            :to="{ name: 'expDetails', params: { expSlug: exp.slug } }"
          >
            <img :src="require(`@/assets/${exp.image}`)" :alt="exp.name" />
            <span class="card-text"> {{ exp.name }}</span>
          </router-link>
        </div>
      </div>
      <router-view :key="$route.fullPath"></router-view>
    </section>
  </div>
</template>
<script>
import GoBack from "../components/GoBack.vue"

export default {
  created() {
    this.fetchDestination();
  },
  watch: {
    '$route': 'fetchDestination'
  },
  data() {
    return {
      destinationArray: [],
      url: "http://localhost:5000/destinations",
    }
  },
  components:{
    GoBack
  },
  props: {
    slug: {
      require: true,
      type: String,
    },
  },
  computed: {
    destination() {
      return this.destinationArray.find(
        (destination) => destination.slug == this.slug
      );
    },
  },
  methods:{
    fetchDestination() {
      fetch(this.url)
        .then((res) => {
          return res.json();
        })
        .then((data) => {
          this.destinationArray = data;
        })
        .catch((error) => {
          console.log(error);
        });
    }
  }
};
</script>

<style scoped>
img {
  max-width: 600px;
  height: auto;
  width: 100%;
  max-height: 400px;
}
.destination-details {
  display: flex;
  justify-content: space-between;
}
p {
  margin: 0 40px;
  font-size: 20px;
  text-align: left;
}
.cards {
  display: flex;
  justify-items: center;
}
.cards img {
  max-height: 200px;
}
.card {
  padding: 0 20px;
  position: relative;
}
.card-text {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  color: white;
  font-size: 25px;
  font-weight: bold;
  text-decoration: none;
}
</style>