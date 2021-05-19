<template>
  <h3>{{ CV.title }}</h3>
  <b style="font-size: 20px">Basics</b>
  <div style="margin-bottom: 20px">
    <div v-if="basicsLength > 0">
      <div v-for="basic in CV.basics" :key="basic">
        <b>Name: </b> {{ basic.name }} <b>Surname: </b> {{ basic.surname }}
        <b>Email: </b> {{ basic.email }}
        <b>Number: </b> {{ basic.number }}
        <router-link :to="`/editBasic/${basic.id}/`">
          <button id="editBasic">Edit</button>
        </router-link>
      </div>
    </div>
    <div v-else>
      <router-link :to="{name: `AddBasic`, params:{cvIndex: CV.id}}">
        <button id="addBasic">Add Basic info</button>
      </router-link>
    </div>
    <b style="font-size: 20px">Jobs</b>
    <div v-for="job in CV.jobs" :key="job">
      <b>Job: </b>{{ job.job }} <b>Title: </b> {{ job.title }}
      <b>Load:</b> {{ job.load }}
      <text v-if="job.finished_at"><b>Finished at: </b>{{ job.finished_at }}</text>
      <router-link :to="{path: `/editJob/${job.id}/`}">
        <button id="editJob">Edit</button>
      </router-link>
      <button :disabled="removing" @click="removeJob(job.id)">Remove</button>
      <br>
    </div>
    <router-link :to="{name: `AddJob`, params:{cvIndex: CV.id}}">
      <button id="AddJob">Add Job</button>
    </router-link>
    <br><br>
    <b style="font-size: 20px">Educations</b>
    <div v-for="education in CV.educations" :key="education">
      <b>School: </b>{{ education.school }}<br>
      <text v-if="education.faculty"><b>Faculty: </b>{{ education.faculty }} <br></text>
      <text v-if="education.fieldOfStudy"><b>Field of Study: </b>{{ education.fieldOfStudy }} <br></text>
      <text v-if="education.degree"><b>Degree: </b>{{ education.degree }} <br></text>
      <b>Status: </b> {{ education.status }}<br>
      <b>Started at: </b>{{ education.started_at }}
      <text v-if="education.finished_at"><b>Finished at: </b>{{ education.finished_at }} </text>
      <router-link :to="{path: `/editEducation/${education.id}/`}"><br>
        <button id="editEducation">Edit</button>
      </router-link>
      <button :disabled="removing" @click="removeEducation(education.id)">Remove</button>
      <br>
    </div>
    <router-link :to="{name: `AddEducation`, params:{cvIndex: CV.id}}">
      <button id="AddEducation">Add Education</button>
    </router-link>
    <br><br>
    <b style="font-size: 20px">Skills</b>
    <div v-for="skill in CV.skills" :key="skill">
      {{ skill.description }}
      <router-link :to="{path: `/editSkill/${skill.id}/`}">
        <button id="editSkill">Edit</button>
      </router-link>
      <button :disabled="removing" @click="removeSkill(skill.id)">Remove</button>
      <br>
    </div><br>
    <router-link :to="{name: `AddSkill`, params:{cvIndex: CV.id}}">
      <button id="AddSkill">Add Skill</button>
    </router-link><br><br>
    <b style="font-size:20px">Other skills</b>
    <div v-for="other in CV.others" :key="other">
      <b>{{ other.title }}: </b> {{ other.description }}
      <router-link :to="{path: `/editOther/${other.id}/`}">
        <button id="editOther">Edit</button>
      </router-link>
      <button :disabled="removing" @click="removeOther(other.id)">Remove</button>
    </div>
    <br>
    <router-link :to="{name: `AddOther`, params:{cvIndex: CV.id}}">
      <button id="AddOther">Add Other Skill</button>
    </router-link>
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
      CV: [],
      basicsLength: '',
      removing: false,
    }
  },
  methods: {
    getData() {
      if (!this.$route.params.id) {
        return
      }
      this.$http.get(`http://localhost:8000/api/get/${this.$route.params.id}`).then((response) => {
        this.CV = response.data
        this.basicsLength = response.data.basics.length
      })
    },
    removeJob(jobId) {
      this.removing = true
      this.$http.delete('http://localhost:8000/api/deleteJob/' + jobId)
          .then(() => {
            this.getData()
            this.removing = false
            this.toast.success('Removed')
          })
          .catch((error) => {
            console.log(error);
            this.toast.error('Something went wrong, Contact administrator. Erorr: ' + error.message)
          })
    },
    removeSkill(skillId) {
      this.removing = true
      this.$http.delete('http://localhost:8000/api/deleteSkill/' + skillId)
          .then(() => {
            this.getData()
            this.removing = false
            this.toast.success('Removed')
          })
          .catch((error) => {
            console.log(error);
            this.toast.error('Something went wrong, Contact administrator. Erorr: ' + error.message)
          })
    },
    removeOther(otherId) {
      this.removing = true
      this.$http.delete('http://localhost:8000/api/deleteOther/' + otherId)
          .then(() => {
            this.getData()
            this.removing = false
            this.toast.success('Removed')
          })
          .catch((error) => {
            console.log(error);
            this.toast.error('Something went wrong, Contact administrator. Erorr: ' + error.message)
          })
    },
    removeEducation(educationId) {
      this.removing = true
      this.$http.delete('http://localhost:8000/api/deleteEducation/' + educationId)
          .then(() => {
            this.getData()
            this.removing = false
            this.toast.success('Removed')
          })
          .catch((error) => {
            console.log(error);
            this.toast.error('Something went wrong, Contact administrator. Erorr: ' + error.message)
          })
    },
  }
}
</script>

<style scoped>

</style>