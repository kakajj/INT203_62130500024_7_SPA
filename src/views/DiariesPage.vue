<template>
  <section class="diary">
    <go-back></go-back>
    <h1>All Diaries</h1>
    <div class="content-block">
      <ul class="list" v-for="d in destinationArray" :key="d.name">
        <li class="list-item">{{ d.name }}</li>
        <div class="action">
          <button class="btn-edit">Edit</button>
          <button class="btn-delete">Delete</button>
        </div>
      </ul>
    </div>
    <div class="btn-add">
        <button class="btn-add-new">Add new Diary!</button>
    </div>
  </section>
</template>

<script>
import GoBack from "../components/GoBack";

export default {
  created() {
    this.fetchDestination();
  },
  components: {
    GoBack,
  },
  data() {
    return {
      destinationArray: [],
      url: "http://localhost:5000/diaries",
    };
  },
  methods: {
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
    },
  },
};
</script>

<style scoped>
.diary {
  @apply mx-auto max-w-4xl;
}
.list {
  @apply flex flex-row  justify-between py-5;
}
.list-item {
  @apply ml-10 bg-green-200 hover:bg-green-500 text-white font-bold w-4/6 text-left;
}
.btn-edit {
  @apply mx-6 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full;
}
.btn-delete {
  @apply bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded-full
}
.content-block {
 @apply bg-gray-100
}
.action {
  @apply pr-10;
}
.btn-add{
    @apply flex justify-end
}
.btn-add-new{
    @apply bg-green-500 hover:bg-green-700 text-white font-bold w-full h-10 text-center mb-10;
}
</style>