<template>
  <div class="detail">
    <go-back></go-back>
    <read-diary
      :name="diary.name"
      :description="diary.description"
      :date="diary.date"
      :time="diary.time"
    ></read-diary>
    <div class="the-btn">
      <button class="edit" @click="addForm = !addForm">Edit This Diary</button>
    </div>
    <modal v-show="isModal" @close="closeModal"></modal>
    <div v-show="addForm" class="mb-20">
      <!-- component -->
      <div class="heading text-center font-bold text-2xl m-5 text-gray-800">
        แก้ไข Diary (บันทึก TimeStamp อัตโนมัติ)
      </div>
      <div
        class="editor mx-auto w-10/12 flex flex-col text-gray-800 border border-gray-300 p-4 shadow-lg max-w-2xl"
      >
        <p class="invalid" v-if="invalidName">Please enter correct name.</p>
        <input
          class="title bg-gray-100 border border-gray-300 p-2 mb-4 outline-none"
          spellcheck="false"
          placeholder="Diary Name"
          type="text"
          v-model="newDiary.name"
        />
        <p class="invalid" v-if="invalidDescription">Please enter something.</p>
        <textarea
          class="description bg-gray-100 sec p-3 h-60 border border-gray-300 outline-none"
          spellcheck="false"
          placeholder="Describe everything about this diary"
          v-model="newDiary.desc"
        ></textarea>
        <!-- buttons -->
        <div class="buttons flex justify-end mt-4">
          <div
            class="border border-indigo-500 p-1 px-4 font-semibold cursor-pointer text-gray-200 ml-2 bg-indigo-500"
            @click="updateJSON">
            Edit
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import GoBack from "../components/GoBack.vue";
import Modal from '../components/Modal.vue';
import readDiary from "../components/readDiary";
const axios = require("axios");

export default {
  components: { GoBack, readDiary, Modal },
  created() {
    this.fetchDestination();
  },
  data() {
    return {
      diary: [],
      newDiary: {
        name: "",
        desc: "",
        time: "",
        date: "",
      },
      url: "http://localhost:5000/diaries/",
      addForm: false,
      invalidName:false,
      invalidDescription:false,
      isModal:false
    };
  },
  props: {
    slug: {
      require: true,
      type: String,
    },
  },
  methods: {
    closeModal(){
      this.isModal = false;
    },
    updateJSON() {
      this.invalidName = this.newDiary.name === "" ? true : false;
      this.invalidDescription = this.newDiary.desc === "" ? true : false;
      if(this.invalidName || this.invalidDescription){
        return console.log('Error Invalid data');
      }else{
      let today = new Date();
      let updatedDiary = {
        name: this.newDiary.name,
        description: this.newDiary.desc,
        date: today.getFullYear() + "-" +(today.getMonth() + 1) +"-" + today.getDate(),
        time: today.getHours() +":" +today.getMinutes() + ":" +today.getSeconds()
      }
      axios.put(this.url + this.$route.params.slug,updatedDiary)
      .then((response)=>{
        return response.data
      }).then(()=>{
          this.diary = updatedDiary ;
          this.addForm = !this.addForm;
          this.isModal = true
      }).catch((error)=>{
        console.log(error);
      });
      }
    },
    fetchDestination() {
      axios
        .get(this.url + this.$route.params.slug)
        .then((response) => {
          this.diary = response.data;
          return response.data;
        }).then(()=>{
          this.newDiary.name = this.diary.name;
          this.newDiary.desc = this.diary.description;
        })
        .catch((err) => {
          console.error(err);
        });
    },
  },
};
</script>

<style scoped>
.detail {
  @apply mx-auto max-w-4xl;
}
.edit {
  @apply bg-green-200 hover:bg-green-400  max-w-3xl w-full h-8 shadow-lg rounded-lg;
}
</style>