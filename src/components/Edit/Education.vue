<template>
  <div class="inner contact">
    <div class="contact-form">
      <form @submit.prevent="editEducation">
        <div class="col-xs-6 wow animated slideInLeft" data-wow-delay=".5s">
          <input class="form" v-model="education.school" name="school" id="school" type="text" placeholder="School" required>
          <input class="form" v-model="education.faculty" name="faculty" id="faculty" placeholder="Faculty" type="text">
          <input class="form" v-model="education.fieldOfStudy" name="fieldOfStudy" id="fieldOfStudy" placeholder="Field of study" type="text">
          <input class="form" v-model="education.degree" name="degree" id="degree" placeholder="Degree" type="text">
          <label for="education_started_at">Started at</label>
          <input class="form" v-model="education.started_at" name="started_at" id="education_started_at" type="date" required>
          <label for="education_finished_at">Finished at</label>
          <input class="form" v-model="education.finished_at" name="finished_at" id="education_finished_at" type="date">
          <label for="status">Status</label>
          <select class="form" v-model="education.status" name="status" id="status" required>
            <option value="full">Learning</option>
            <option value="half">Finished</option>
          </select>
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
      education: {
        school: '',
        faculty: '',
        fieldOfStudy: '',
        degree: '',
        started_at: '',
        finished_at: '',
        status: '',
      },
      educations: [],
    }
  },
  methods: {
    getData() {
      if (!this.$route.params.id) {
        return
      }
      this.$http.get(this.$url + `getEducation/${this.$route.params.id}`).then((response) => {
        this.education = response.data
      })
    },
    editEducation() {
      this.educations.push(this.education)
      this.$http.post(this.$url + 'updateEducation/' + this.$route.params.id, {
        educations: this.educations
      }).then(() => {
        this.$router.go(-1)
        this.toast.success('Education information updated')
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