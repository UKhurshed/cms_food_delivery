<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png">
    <HelloWorld :msg="helloMessage"/>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'
import HelloWorld from '@/components/HelloWorld.vue' // @ is an alias to /src

@Component({
  components: {
    HelloWorld
  },
  computed: {
    helloMessage: {
      get (): string {
        return this.$store.state.helloMessage
      }
    }
  }
})
export default class Home extends Vue {}
</script>
