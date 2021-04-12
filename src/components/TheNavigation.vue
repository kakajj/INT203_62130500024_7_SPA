<template>
  <nav id="nav">
    <p class="logo">The Travel App</p>
    <ul class="nav-links">
      <li class="links">
        <router-link to="/"> Home </router-link>
      </li>
      <li v-for="dest in destinations" :key="dest.name" class="links">
        <router-link
          :to="{ name: 'DestinationDetails', params: { slug: dest.slug } }"
        >
          {{ dest.name }}
        </router-link>
      </li>
    </ul>
  </nav>
</template>

<script>
import store from "@/store";
export default {
  data() {
    return {
      destinations: store.destinations,
    };
  },
};
</script>
<style scoped>
#nav {
  display: flex;
}
.router-link-active {
  color: aquamarine;
}
#nav {
  padding: 30px;
}

#nav a {
  text-decoration: none;
  font-weight: bold;
  color: #2c3e50;
}

#nav a.vue-school-active-class {
  color: #42b983;
}

#nav a.router-link-exact-active {
  color: #42b983;
}
.nav-links {
  display: flex;
}
.links {
  padding-right: 20px;
  list-style: none;
}
.links:hover {
  text-decoration: underline;
}
.logo {
  font-size: 20px;
  color: purple;
  font-weight: bold;
}
</style>