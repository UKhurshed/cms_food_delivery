import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store/index'
import axios from 'axios'
import firebase from 'firebase/app'
import vuetify from './plugins/vuetify'

Vue.prototype.$axios = axios
Vue.config.productionTip = false

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: 'AIzaSyCAZLfYscCh9TzP4JcKJ6q3r2AwdPmjs6U',
  authDomain: 'vue-auth-d56ab.firebaseapp.com',
  projectId: 'vue-auth-d56ab',
  storageBucket: 'vue-auth-d56ab.appspot.com',
  messagingSenderId: '1014096825434',
  appId: '1:1014096825434:web:bc1bdaab0887e854d3dc63'
}
// Initialize Firebase

firebase.initializeApp(firebaseConfig)

new Vue({
  router,
  store,
  vuetify,
  render: h => h(App)
}).$mount('#app')
