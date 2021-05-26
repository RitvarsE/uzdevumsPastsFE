<template>
    <div class="inner contact">
      <div class="contact-form">
        <form @submit.prevent="editOther">
          <div class="col-xs-6 wow animated slideInLeft" data-wow-delay=".5s">
    <input class="form" v-model="other.title" name="title" id="other_title" type="text" placeholder="Title" required>
    <input class="form" v-model="other.description" name="description" id="other_description" type="text" placeholder="description" required>
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
      other: {
        title: '',
        description: '',
      },
      others: [],
    }
  },
  methods: {
    getData() {
      if (!this.$route.params.id) {
        return
      }
      this.$http.get(this.$url + `getOther/${this.$route.params.id}`).then((response) => {
        this.other = response.data
        console.log(response.data)
      })
    },
    editOther() {
      this.others.push(this.other)
      this.$http.post(this.$url + 'updateOther/' + this.$route.params.id, {
        others: this.others
      }).then(() => {
        this.$router.go(-1)
        this.toast.success('Other information updated')
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