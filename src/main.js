import {createApp} from 'vue'
import App from './App.vue'
import router from './router'
import Toast from "vue-toastification";
import axios from 'axios'
// Import the CSS or use your own!
import "vue-toastification/dist/index.css";

const options = {
    timeout: 1500
};
const app = createApp(App)
app.config.globalProperties.$http = axios
app.use(router).use(Toast, options).mount('#app')