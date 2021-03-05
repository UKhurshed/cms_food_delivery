<template>
  <v-app>
    <v-app-bar app color="yellow lighten-1">
      <v-toolbar-title @click="toHome">Paprika</v-toolbar-title>
    </v-app-bar>
    <v-content>
      <v-card width="400" class="mx-auto mt-10">
        <v-card-title>Register</v-card-title>
        <v-card-text>
          <v-text-field label="First Name" prepend-icon="mdi-account-circle"/>
          <v-text-field label="Last Name" prepend-icon="mdi-account-circle"/>
          <v-text-field label="Email" prepend-icon="mdi-email"/>
          <v-text-field @click:append="showRegisterPass = ! showRegisterPass" label="Password"
                        :type="showRegisterPass ? 'text' : 'password'"
                        prepend-icon="mdi-lock"
                        :append-icon="showRegisterPass ? 'mdi-eye' : 'mdi-eye-off'"/>
        </v-card-text>
        <v-divider/>
        <v-spacer/>
        <v-card-actions>
            <v-btn color="yellow darken-1" class="mx-auto">Register</v-btn>
            <v-btn class="mx-auto" depressed color="black" @click="toLoginPage" text rounded>Login</v-btn>
        </v-card-actions>
      </v-card>
    </v-content>
  </v-app>
  <!--  <div>-->
  <!--    <div v-if="error" class="error">-->
  <!--      {{ error.message }}-->
  <!--    </div>-->
  <!--    <form @submit.prevent="pressed">Register-->
  <!--      <div class="email"><input type="email" v-model="email" placeholder="Email"></div>-->
  <!--      <div class="password"><input type="password" v-model="password" placeholder="Password"></div>-->
  <!--      <button type="submit">Register</button>-->
  <!--    </form>-->
  <!--  </div>-->
</template>

<script>
import firebase from 'firebase/app'
import 'firebase/auth'

export default {
  methods: {
    pressed () {
      try {
        firebase.auth().createUserWithEmailAndPassword(this.email, this.password)
        this.$router.replace({ name: 'Login' })
      } catch (err) {
        console.log(err)
      }
    },
    toLoginPage () {
      this.$router.replace({ name: 'Login' })
    },
    toHome () {
      this.$router.replace({ name: 'Home' })
    }
  },
  data () {
    return {
      email: '',
      password: '',
      error: '',
      showRegisterPass: false
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
