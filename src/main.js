import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import axios from 'axios'
import VueAxios from 'vue-axios'
import dayjs from "dayjs"
// import VueJsonp from 'vue-jsonp'

// Vue.use(VueJsonp)

Vue.prototype.dayjs = dayjs;

Vue.use(VueAxios,axios)

import firebase from 'firebase/app'
import "firebase/auth"
 
const config = {
  apiKey: "AIzaSyAza_vpvaW1J1Z8TC9VjpdMrLqZQLBMe-g",
  authDomain: "crytoapp-d655f.firebaseapp.com",
  projectId: "crytoapp-d655f",
  storageBucket: "crytoapp-d655f.appspot.com",
  messagingSenderId: "190986014199",
  appId: "1:190986014199:web:c1102dfbc657d44868b2f2",
  measurementId: "G-520FZC9HJT"
};
 
firebase.initializeApp(config);

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')



