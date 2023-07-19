import { createApp } from "vue";
import router from "./router";
import App from "./App.vue";
import store from "./store";
import { initializeApp } from "firebase/app";

const firebaseConfig = {
  apiKey: "AIzaSyDQYqiFDbQg2RhfbgohNWcelpouaDz98LM",
  authDomain: "eventmaster-b7b65.firebaseapp.com",
  projectId: "eventmaster-b7b65",
  storageBucket: "eventmaster-b7b65.appspot.com",
  messagingSenderId: "492402771656",
  appId: "1:492402771656:web:5bd5b620567cb5a33a87fd",
};

initializeApp(firebaseConfig);
createApp(App).use(store).use(router).mount("#app");
