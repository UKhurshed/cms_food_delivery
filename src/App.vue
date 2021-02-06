<template>
  <v-app>
<!--    <v-navigation-drawer v-model="drawer" app>-->
<!--    </v-navigation-drawer>-->
<!--    <v-app-bar app height="60" class="indigo" dark>-->
<!--      <v-app-bar-nav-icon @click="drawer = !drawer"></v-app-bar-nav-icon>-->
<!--      <v-toolbar-title @click="$router.replace({name: 'Home'})">Application</v-toolbar-title>-->
<!--    </v-app-bar>-->
<!--    <v-main>-->
<!--      <v-card width="400" class="mx-auto mt-5">-->
<!--        <v-card-title>-->
<!--          <h1 class="display-1">Login</h1>-->
<!--        </v-card-title>-->
<!--        <v-card-text>-->
<!--          <v-form>-->
<!--            <v-text-field label="Username"-->
<!--                          prepend-icon="mdi-account-circle"/>-->
<!--            <v-text-field :type="showPassword ? 'text' : 'password'" label="Password"-->
<!--                          prepend-icon="mdi-lock"-->
<!--                          :append-icon="showPassword ? 'mdi-eye' : 'mdi-eye-off'"-->
<!--                          @click:append="showPassword = !showPassword"/>-->
<!--          </v-form>-->
<!--        </v-card-text>-->
<!--        <v-card-actions>-->
<!--          <v-btn color="success">Register</v-btn>-->
<!--          <v-btn color="info" @click="login">Login</v-btn>-->
<!--        </v-card-actions>-->
<!--      </v-card>-->
<!--    </v-main>-->

    <v-content>
     <router-view></router-view>
    </v-content>
  </v-app>
</template>

<script lang="ts">
import Vue from 'vue'

export default Vue.extend({
  name: 'App'
})
</script>
