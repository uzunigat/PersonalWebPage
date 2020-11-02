import {createApp} from "vue";
import App from "./App.vue";
import "@/assets/css/tailwind.css";
import router from '@/router';
import {dollarFilter, percentFilter} from "@/filter";

const app = createApp(App);

//Filers
app.config.globalProperties.$filters = {

    dollarFilter,
    percentFilter

}

app.use(router);
app.mount("#app");
