<template>
  <div class="inner contact">
    <div class="contact-form">
      <form @submit.prevent="addJob">
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
  data() {
    return {
      cvIndex: '',
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
  created() {
    this.cvIndex = this.$route.params.cvIndex;
  },
  methods: {
    addJob() {
      this.jobs.push(this.job)
      this.$http.post(this.$url + 'addJob/' + this.cvIndex, {
        jobs: this.jobs
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