<template>
  <div class="inner contact">
    <div class="contact-form">
  <form @submit.prevent="addBasic">
    <h2>Basic info</h2>
    <div class="col-xs-6 wow animated slideInLeft" data-wow-delay=".5s">
    <input class="form" v-on:keypress="isLetter($event)" v-model="basic.name" name="name" id="name" type="text" placeholder="Name" required>
    <input class="form" v-on:keypress="isLetter($event)" v-model="basic.surname" name="surname" id="surname" type="text" placeholder="Surname" required>
    <input class="form" v-model="basic.email" name="email" id="email" type="email" placeholder="Email" required>
    <input class="form" v-model="basic.number" name="number" id="number" type="text" placeholder="Number" required>
    </div>
    <button class="form-btn semibold">Add</button>
  </form>
  </div>
  </div>
</template>

<script>
import {useToast} from "vue-toastification";

export default {
  setup() {
    const toast = useToast();
    return {toast}
  },
  data(){
    return{
      cvIndex: '',
      basic: {
        name: '',
        surname: '',
        email: '',
        number: ''
      },
      basics: [],
    }
  },
  created() {
    this.cvIndex = this.$route.params.cvIndex;
  },
  methods:{
    addBasic() {
      this.basics.push(this.basic)
      this.$http.post('http://localhost:8000/api/addBasic/'+this.cvIndex, {
        basics: this.basics
      })
          .then(() => {
            this.toast.success('Basic info added successfully')
            this.$router.go(-1)
          })
          .catch((error) => {
            console.log(error)
            this.toast.error('Something went wrong')
          })
    },
    isLetter(e) {
      let char = String.fromCharCode(e.keyCode); // Get the character
      if(/^[A-Za-z-āčēīģņķūžšļ]+$/.test(char)) return true; // Match with regex
      else e.preventDefault(); // If not match, don't add to input text
    }
  }
}
</script>

<style scoped>

</style>