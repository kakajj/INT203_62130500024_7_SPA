<template>
  <section class="diary">
    <go-back></go-back>
    <h1>All Diaries</h1>
    <div class="content-block" v-if="checkArray">
      <ul class="list" v-for="d in destinationArray" :key="d.name">
        <li class="list-item">{{ d.name }}</li>
        <div class="action">
          <button class="btn-edit">Edit</button>
          <button class="btn-delete">Delete</button>
        </div>
      </ul>
    </div>
    <h1 v-else class="font-bold text-xl">- No Diary Here -</h1>
    <div class="btn-add">
      <button class="btn-add-new" @click="openAddForm">{{ formStatus }}</button>
    </div>
    <div v-show="addForm">
      <!-- component -->
      <div class="heading text-center font-bold text-2xl m-5 text-gray-800">
        New Post
      </div>
      <div
        class="editor mx-auto w-10/12 flex flex-col text-gray-800 border border-gray-300 p-4 shadow-lg max-w-2xl"
      >
        <input
          class="title bg-gray-100 border border-gray-300 p-2 mb-4 outline-none"
          spellcheck="false"
          placeholder="Diary Name"
          type="text"
          v-model="dName"
        />
        <textarea
          class="description bg-gray-100 sec p-3 h-60 border border-gray-300 outline-none"
          spellcheck="false"
          placeholder="Describe everything about this diary"
          v-model="dDescription"
        ></textarea>
        <!-- buttons -->
        <div class="buttons flex">
          <div
            class="border border-gray-300 p-1 px-4 font-semibold cursor-pointer text-gray-500 ml-auto"
           @click="clear">
            Cancel
          </div>
          <div
            class="border border-indigo-500 p-1 px-4 font-semibold cursor-pointer text-gray-200 ml-2 bg-indigo-500"
          @click="submit">
            Post
          </div>
        </div>
      </div>
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
  computed: {
    checkArray() {
      return this.destinationArray.length === 0 ? false : true;
    },
    formStatus() {
      if (this.addForm) {
        return "Close Tab";
      } else {
        return "Add new Diary!";
      }
    },
  },
  data() {
    return {
      dName: '',
      dDescription: '',
      addForm: false,
      destinationArray: [],
      url: "http://localhost:5000/diaries",
    };
  },
  methods: {
    openAddForm() {
      this.addForm = !this.addForm;
    },
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
    clear(){
      this.dName = '';
      this.dDescription = '';
    },
    post(newSurveyObject){
      fetch("http://localhost:5000/diaries", {
        method: "POST",
        headers: {
          "Content-type": "application/json",
        },
        body: JSON.stringify({
          name: newSurveyObject.name,
          date: newSurveyObject.date,
          time: newSurveyObject.time,
          description: newSurveyObject.description
        }),
      })
        .then((response) => {
          return response.json();
        })
        .then((data) => {
          this.destinationArray = [...this.destinationArray, data];
        })
        .catch((error) => {
          console.log(error);
        });
      this.clear();
    },
    submit(){
      let today = new Date();
      this.post({
        name: this.dName,
        date: today.getFullYear()+'-'+(today.getMonth()+1)+'-'+today.getDate(),
        time: today.getHours() + ":" + today.getMinutes() + ":" + today.getSeconds(),
        description: this.dDescription
      })
    }
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
  @apply bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded-full;
}
.content-block {
  @apply bg-gray-100;
}
.action {
  @apply pr-10;
}
.btn-add {
  @apply flex justify-end;
}
.btn-add-new {
  @apply bg-green-500 hover:bg-green-700 text-white font-bold w-full h-10 text-center mb-10;
}
</style>