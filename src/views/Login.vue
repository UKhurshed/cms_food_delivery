<template>
  <div>
    <div v-if="error" class="error">
      {{ error.message }}
    </div>
      <div class="email"><input type="email" v-model="email" placeholder="Email"></div>
      <div class="password"><input type="password" v-model="password" placeholder="Password"></div>
      <button type="submit" @click="login">Login</button>
  </div>
</template>

<script>
import firebase from 'firebase/app'

// import firebase from "firebase"
export default {
  name: 'Login',
  data () {
    return {
      email: '',
      password: '',
      error: ''
    }
  },
  methods: {
    login: function () {
      firebase.auth().signInWithEmailAndPassword(this.email, this.password).then(
        user => {
          this.$router.replace({ name: 'Home' })
          console.log(user.data)
        },
        err => {
          alert(err)
          console.log(err)
        }
      )
    }
  }
}
</script>

<style lang="scss" scoped>
.error {
  color: red;
  font-size: 18px;
}

input {
  width: 400px;
  padding: 30px;
  margin: 20px;
  font-size: 21px;
}

button {
  width: 400px;
  height: 75px;
  font-size: 100%;
}
</style>
