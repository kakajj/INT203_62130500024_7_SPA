<template>
  <nav id="nav">
    <p class="nav-logo">My JourNeys</p>
    <ul class="nav-ul">
      <li class="nav-li">
        <router-link to="/"> Home </router-link>
      </li>
      <li class="nav-li">
        <router-link to="/diaries"> Diary </router-link>
      </li>
       <li class="nav-li">
        <router-link to="/about"> About </router-link>
      </li>
    </ul>
  </nav>
</template>

<script>

export default {
  data() {
    return {
    };
  },
  methods: {
  },
};
</script>

<style scoped>
#nav {
  background-color: #f6dfeb;
  @apply mx-auto max-w-4xl flex flex-row justify-start  p-3 mt-40;
}
.router-link-active {
  color: aquamarine;
}
.nav-ul{
  @apply flex flex-row
}
.nav-li{
  @apply mx-8
}
.nav-logo{
  @apply text-xl font-bold text-green-500  inline-block align-middle
}
.nav-li:hover{
  @apply underline;
}
#nav a {
  color: #2c3e50;
  @apply  no-underline font-bold ;
}

#nav a.vue-school-active-class {
  color: #42b983;
}

#nav a.router-link-exact-active {
  color: #42b983;
}

</style>