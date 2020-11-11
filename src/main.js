import {createApp} from "vue";
import App from "./App.vue";
import "@/assets/css/tailwind.css";
import router from '@/router';
import {dollarFilter, percentFilter} from "@/filter";
const app = createApp(App);


//Filters
app.config.globalProperties.$filters = {

    dollarFilter,
    percentFilter

}

//plugins
app.use(router);

// Mount App
app.mount("#app");


