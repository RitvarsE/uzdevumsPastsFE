<template>
  <div class="inner contact">
    <div class="contact-form">
      <form @submit.prevent="editSkill">
        <div class="col-xs-6 wow animated slideInLeft" data-wow-delay=".5s">
          <input class="form" v-model="skill.description" name="description" id="skill_description" type="text" placeholder="Skill" required>
          <button>Edit</button>
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
  beforeMount() {
    this.getData()
  },
  data() {
    return {
      skill: {
        description: '',
      },
      skills: [],
    }
  },
  methods: {
    getData() {
      if (!this.$route.params.id) {
        return
      }
      this.$http.get(this.$url + `getSkill/${this.$route.params.id}`).then((response) => {
        this.skill = response.data
        console.log(response.data)
      })
    },
    editSkill() {
      this.skills.push(this.skill)
      this.$http.post(this.$url + 'updateSkill/' + this.$route.params.id, {
        skills: this.skills
      }).then(() => {
        this.$router.go(-1)
        this.toast.success('Skill information updated')
      }).catch((error) => {
        console.log(error)
        this.toast.error('Something went wrong')
      })
    },

  }
}
</script>

<style scoped>

</style>