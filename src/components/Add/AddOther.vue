<template>
  <div class="inner contact">
    <div class="contact-form">
      <form @submit.prevent="addOther">
        <div class="col-xs-6 wow animated slideInLeft" data-wow-delay=".5s">
          <input class="form" v-model="other.title" name="title" id="other_title" type="text" placeholder="Title" required>
          <input class="form" v-model="other.description" name="description" id="other_description" type="text" placeholder="description" required>
          <button>Add</button>
        </div>
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
      other: {
        title: '',
        description: '',
      },
      others: [],
    }
  },
  created() {
    this.cvIndex = this.$route.params.cvIndex;
  },
  methods:{
    addOther() {
      this.others.push(this.other)
      this.$http.post('http://localhost:8000/api/addOther/'+this.cvIndex, {
        others: this.others
      })
          .then(() => {
            this.toast.success('Basic info added successfully')
            this.$router.go(-1)
          })
          .catch((error) => {
            console.log(error)
            this.toast.error('Something went wrong')
          })
    }
  }
}
</script>

<style scoped>

</style>