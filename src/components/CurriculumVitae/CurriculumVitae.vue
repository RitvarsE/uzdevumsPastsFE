<template>
  <div>
    <div class="inner contact">
      <div class="contact-form">
        <div class="col-xs-6 wow animated slideInLeft" data-wow-delay=".5s">
          <h1>Title</h1>
          <input class="form" v-model="title" name="title" id="title" placeholder="Title" type="text">
          <button @click="addCV">Start making CV</button>
        </div>
      </div>
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
      title: '',

    }
  },
  methods: {
    addCV() {
      this.$http.put(this.$url + 'addCV/', {
        title: this.title
      }).then((response) => {
        this.$router.push('/edit/' + response.data.id)
        this.toast.success(response.data.title + ' now you can start making you cv')
      })
    },
  }
}
</script>

<style scoped>
</style>