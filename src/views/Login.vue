<template>
  <v-app>
    <v-app-bar app color="yellow lighten-1">
      <v-toolbar-title @click="toHome">Title</v-toolbar-title>
      <v-spacer/>
      <v-btn @click="toRegister" text rounded>Register</v-btn>
      <v-btn text rounded>About</v-btn>
      <v-btn text rounded>Contact us</v-btn>
    </v-app-bar>
    <v-content>
      <v-card width="400" class="mx-auto mt-9">
        <v-card-title>Login</v-card-title>
        <v-card-text>
          <v-text-field label="Username" prepend-icon="mdi-account-circle"/>
          <v-text-field @click:append="showPassword = ! showPassword" label="Password" :type="showPassword ? 'text' : 'password'"
                        prepend-icon="mdi-lock"
                        :append-icon="showPassword ? 'mdi-eye' : 'mdi-eye-off'"/>
        </v-card-text>
        <v-divider/>
        <v-card-actions>
          <v-btn block color="yellow darken-1" class="mx-auto">Login</v-btn>
        </v-card-actions>
      </v-card>
    </v-content>
  </v-app>
<!--  <div>-->
<!--    <div v-if="error" class="error">-->
<!--      {{ error.message }}-->
<!--    </div>-->
<!--      <div class="email"><input type="email" v-model="email" placeholder="Email"></div>-->
<!--      <div class="password"><input type="password" v-model="password" placeholder="Password"></div>-->
<!--      <button type="submit" @click="login">Login</button>-->
<!--  </div>-->
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
    },
    toRegister: function () {
      this.$router.replace({ name: 'Register' })
    },
    toHome () {
      this.$router.replace({ name: 'Home' })
    }
  }
}
</script>

<!--<style lang="scss" scoped>-->
<!--.error {-->
<!--  color: red;-->
<!--  font-size: 18px;-->
<!--}-->

<!--input {-->
<!--  width: 400px;-->
<!--  padding: 30px;-->
<!--  margin: 20px;-->
<!--  font-size: 21px;-->
<!--}-->

<!--button {-->
<!--  width: 400px;-->
<!--  height: 75px;-->
<!--  font-size: 100%;-->
<!--}-->
<!--</style>-->
