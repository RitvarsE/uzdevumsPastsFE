<template>
  <div class="inner contact">
    <div class="contact-form">
      <form @submit.prevent="updateJob">
        <div class="col-xs-6 wow animated slideInLeft" data-wow-delay=".5s">
          <input class="form" v-model="job.job" name="job" id="job" type="text" placeholder="Job" required>
          <input class="form" v-model="job.title" name="title" id="job_title" type="text" placeholder="Title" required>
          <label for="load">Load</label>
          <select class="form" v-model="job.load" name="load" id="load" required>
            <option value="full">Full</option>
            <option value="half">Half</option>
          </select>
          <label for="job_started_at">Started at</label>
          <input class="form" v-model="job.started_at" name="started_at" id="job_started_at" type="date" required>
          <label for="job_finished_at">Finished at</label>
          <input class="form" v-model="job.finished_at" name="finished_at" id="job_finished_at" type="date">
          <button>Update</button>
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
      job: {
        job: '',
        title: '',
        load: '',
        started_at: '',
        finished_at: ''
      },
      jobs: [],
    }
  },
  methods: {
    getData() {
      if (!this.$route.params.id) {
        return
      }
      this.$http.get(`http://localhost:8000/api/getJob/${this.$route.params.id}`).then((response) => {
        this.job = response.data
      })
    },
    updateJob() {
      this.jobs.push(this.job)
      this.$http.post('http://localhost:8000/api/updateJob/' + this.$route.params.id, {
        jobs: this.jobs
      }).then(() => {
        this.$router.go(-1)
        this.toast.success('Job information updated')
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