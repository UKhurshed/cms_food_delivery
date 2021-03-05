<template>
  <v-app>
    <v-toolbar color="yellow lighten-1">
      <v-toolbar-title>Paprika</v-toolbar-title>
      <v-spacer/>
      <v-btn @click="toLoginPage" text rounded>Login</v-btn>
      <v-btn @click="toRegisterPage" text rounded>Register</v-btn>
      <v-btn text rounded>About</v-btn>
      <v-btn text rounded>Contact us</v-btn>
    </v-toolbar>
    <v-navigation-drawer persistent width="260" dark>
      <v-list-item>
        <v-list-item-content>
          <v-list-item-title class="title">
            Application
          </v-list-item-title>
          <v-list-item-subtitle>
            subtext
          </v-list-item-subtitle>
          <v-divider></v-divider>
          <v-list
            dense
            nav
          >
            <v-list-item
              v-for="item in items"
              :key="item.title"
              link
            >
              <v-list-item-icon>
                <v-icon>{{ item.icon }}</v-icon>
              </v-list-item-icon>

              <v-list-item-content>
                <v-list-item-title>{{ item.title }}</v-list-item-title>
              </v-list-item-content>
            </v-list-item>
          </v-list>
        </v-list-item-content>
      </v-list-item>
    </v-navigation-drawer>
    <!--    <v-content>-->
    <!--      <v-card width="400" class="mx-auto mt-9">-->
    <!--        <v-card-title>Login</v-card-title>-->
    <!--        <v-card-text>-->
    <!--            <v-text-field label="Username" prepend-icon="mdi-account-circle"/>-->
    <!--            <v-text-field @click:append="showPassword = ! showPassword" label="Password" :type="showPassword ? 'text' : 'password'"-->
    <!--                          prepend-icon="mdi-lock"-->
    <!--                          :append-icon="showPassword ? 'mdi-eye' : 'mdi-eye-off'"/>-->
    <!--        </v-card-text>-->
    <!--        <v-divider/>-->
    <!--        <v-card-actions>-->
    <!--          <v-btn block color="yellow darken-1" class="mx-auto">Login</v-btn>-->
    <!--        </v-card-actions>-->
    <!--      </v-card>-->
    <!--    </v-content>-->
    <!--  <div class="Home"><h1>HomePage</h1>-->
    <!--    <p class="purple darken-1 white&#45;&#45;text text-center">lorem</p></div>-->
  </v-app>
</template>

<script>
export default {
  data () {
    return {
      showPassword: false,
      items: [
        {
          title: 'Dashboard',
          icon: 'mdi-view-dashboard'
        },
        {
          title: 'Photos',
          icon: 'mdi-image'
        },
        {
          title: 'About',
          icon: 'mdi-help-box'
        }
      ]
    }
  },
  methods: {
    toRegisterPage () {
      this.$router.replace({ name: 'Register' })
    },
    toLoginPage () {
      this.$router.replace({ name: 'Login' })
    }
  }
}
</script>
