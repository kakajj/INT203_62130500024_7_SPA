<template>
  <the-navigation></the-navigation>
  <transition name="fade">
    <router-view :key="$route.path" />
  </transition>
</template>

<script>
import TheNavigation from "./components/TheNavigation.vue";

export default {
  components: {
    TheNavigation,
  },
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
.slide-fade-enter-active {
  transition: all .3s ease-out;
}

.slide-fade-leave-active {
  transition: all .3s cubic-bezier(1.0, 0.5, 0.8, 1.0);
}

.slide-fade-enter-from,
.slide-fade-leave-to {
  transform: translateX(20px);
  opacity: 0;
}
.moveUp-enter-active{
  animation: fadeIn 1s ease-in;
}
@keyframes fadeIn{
  0%{
    opacity: 0;
  }
  50%{
    opacity: 0.5;
  }
  100%{
    opacity: 1;
  }
}
.moveUp-leave-active{
  animation: moveUp 0.3s  ease-in;
}
@keyframes moveUp {
    0%{
      transform: translateY(0);
    }
    100%{
      transform: translateY(-400px);
    }
}
.fade-enter-active,
.fade-leave-active{
  transition: opacity 0.3s;
}
.fade-enter, .fade-leave-to{
  opacity: 0;
}
</style>
