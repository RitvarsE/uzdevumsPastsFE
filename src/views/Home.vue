<template>
  <div v-for="cv in allCV" :key="cv">
    {{ cv.title }}
    <button :disabled="removing" @click="remove(cv.id)">Remove</button>
    <router-link :to="`/edit/${cv.id}/`">
      <button id="edit">Edit</button>
    </router-link>
    <router-link :to="`/print/${cv.id}/`">
      <button id="print">Print</button>
    </router-link>
  </div>
  <div>
    <router-link :to="{path: '/add'}">
      <button id="addNew">Add new CV</button>
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
  data() {
    return {
      allCV: [],
      removing: false,
    }
  },
  beforeMount() {
    this.getAllCV()
  },
  methods: {
    getAllCV() {
      this.$http.get('http://localhost:8000/api/getAll/')
          .then((response) => {
          this.allCV = response.data
          })
    },
    remove(cvId) {
      this.removing = true
      this.$http.delete('http://localhost:8000/api/delete/' + cvId)
          .then(() => {
            this.getAllCV()
            this.removing = false
            this.toast.success('Removed')
          })
          .catch((error) => {
            console.log(error);
            this.toast.error('Something went wrong, Contact administrator. Erorr: ' + error.message)
          })
    }
  },
  '$route.params.id'() {
    this.getAllCV()
  }
}
</script>
