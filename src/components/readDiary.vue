<template>
  <div class="outside">
    <div class="card-area">
      <div class="text-area">
        <h2>{{ name }}</h2>
        <p>{{ description }}</p>
      </div>
      <div class="date-time">
        <p>Written : {{ date }} when {{ time }}</p>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {};
  },
  props: ["name", "description", "date", "time"],
  methods: {},
};
</script>

<style scoped>
.card-area {
  @apply max-w-3xl pt-4 px-8 bg-red-100 shadow-lg rounded-lg mt-5 mb-2 mx-auto;
}
.text-area h2 {
  @apply text-gray-800 text-3xl font-semibold;
}
.text-area p {
  @apply mt-2 text-gray-600 font-bold text-lg ;
}
.date-time {
  @apply flex justify-end mt-4 font-extralight text-sm;
}

</style>