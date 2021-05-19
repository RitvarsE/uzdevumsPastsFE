<template>
  <div class="inner contact">
    <div class="contact-form">
      <form @submit.prevent="addSkill">
        <div class="col-xs-6 wow animated slideInLeft" data-wow-delay=".5s">
    <input class="form" v-model="skill.description" name="description" id="skill_description" type="text" placeholder="Skill" required>
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
      skill: {
        description: '',
      },
      skills: [],
    }
  },
  created() {
    this.cvIndex = this.$route.params.cvIndex;
  },
  methods:{
    addSkill() {
      this.skills.push(this.skill)
      this.$http.post('http://localhost:8000/api/addSkill/'+this.cvIndex, {
        skills: this.skills
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