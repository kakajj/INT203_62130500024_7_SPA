<template>
  <section class="diary">
    <go-back></go-back>
    <h1>ไดอารี่ทั้งหมด</h1>
    <p class="font-light">Click ที่ชื่อไดอารี่เพื่อเปิดอ่าน</p>
    <div class="content-block" v-if="checkArray">
      <ul class="list" v-for="(d,index) in destinationArray" :key="d.name">
        <router-link :to="{ name: 'DiaryDetail', params: { slug: d.id }}" class="list-item">
          <li>ไดอารี่ที่ {{ index }}) {{ d.name }} <p class="font-light">สร้างเมื่อ {{d.date}} เวลา {{d.time}}</p> </li>
        </router-link>
        <router-view :key="$route.path" />
        <div class="action">
          <button class="btn-delete" @click="deleteDiary(d.id)">Delete</button>
        </div>
      </ul>
    </div>
    <h1 v-else class="font-bold text-xl">- No Diary Here -</h1>
    <div class="btn-add">
      <button class="btn-add-new" @click="openAddForm">{{ formStatus }}</button>
    </div>
    <div v-show="addForm" class="mb-20">
      <!-- component -->
      <div class="heading text-center font-bold text-2xl m-5 text-gray-800">
        New Diary (บันทึก TimeStamp อัตโนมัติ)
      </div>
      <div class="editor mx-auto w-10/12 flex flex-col text-gray-800 border border-gray-300 p-4 shadow-lg max-w-2xl">
        <p class="invalid" v-if="invalidName">Please enter correct name.</p>
        <input
          class="title bg-gray-100 border border-gray-300 p-2 mb-4 outline-none"
          spellcheck="false"
          placeholder="Diary Name"
          type="text"
          v-model="dName" />
        <p class="invalid" v-if="invalidDescription">Please enter something.</p>
        <textarea
          class="description bg-gray-100 sec p-3 h-60 border border-gray-300 outline-none"
          spellcheck="false"
          placeholder="Describe everything about this diary"
          v-model="dDescription"></textarea>
        <!-- buttons -->
        <div class="buttons flex mt-4">
          <div class="border border-gray-300 p-1 px-4 font-semibold cursor-pointer text-gray-500 ml-auto"
            @click="clear">Cancel</div>
          <div class="border border-indigo-500 p-1 px-4 font-semibold cursor-pointer text-gray-200 ml-2 bg-indigo-500"
            @click="submit">Post</div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import GoBack from "../components/GoBack";
const axios = require("axios");

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
      dName: "",
      dDescription: "",
      addForm: false,
      destinationArray: [],
      url: "http://localhost:5000/diaries",
      invalidName: false,
      invalidDescription:false
    };
  },
  methods: {
    openAddForm() {
      this.addForm = !this.addForm;
    },
    fetchDestination() {
      axios
        .get(this.url)
        .then((response) => {
          this.destinationArray = response.data;
          return response.data;
        })
        .catch((err) => {
          console.error(err);
        });
    },
    clear() {
      this.dName = "";
      this.dDescription = "";
      this.invalidName = false,
      this.invalidDescription = false
    },
    post(newSurveyObject) {
      axios
        .post("http://localhost:5000/diaries", {
          name: newSurveyObject.name,
          date: newSurveyObject.date,
          time: newSurveyObject.time,
          description: newSurveyObject.description,
        })
        .then((response) => {
          this.destinationArray = [...this.destinationArray, response.data];
        })
        .catch((err) => {
          console.error(err);
        }).then(()=>{
            this.clear();
        });
    },
    deleteDiary(id) {
      axios
        .delete(`http://localhost:5000/diaries/${id}`)
        .then((response) => {
        return response.data;
        })
        .catch((err) => {
          console.error(err);
        })
        .then(()=>{
        this.destinationArray = this.destinationArray.filter(
        (diary) => diary.id !== id);
        });
    },
    submit() {
      this.invalidName = this.dName === "" ? true : false;
      this.invalidDescription = this.dDescription === "" ? true : false;
      if(this.invalidName || this.invalidDescription){
        return ;
      }else{
      let today = new Date();
      this.post({
        name: this.dName,
        date:
          today.getFullYear() +
          "-" +
          (today.getMonth() + 1) +
          "-" +
          today.getDate(),
        time:
          today.getHours() +
          ":" +
          today.getMinutes() +
          ":" +
          today.getSeconds(),
        description: this.dDescription,
      });
      }
    },
  },
};
</script>

<style scoped>
.diary {
  @apply mx-auto max-w-4xl;
}
.list {
  @apply flex flex-row inline-block  justify-between py-5;
}
.list-item {
  @apply ml-10 bg-green-200 hover:bg-green-500 text-black font-bold w-9/12 text-left pl-5;
}
.btn-delete {
  @apply bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded-full w-28;
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
.invalid{
  @apply text-left font-bold text-red-400
}
</style>