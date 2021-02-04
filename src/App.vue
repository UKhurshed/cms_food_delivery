<template>
  <div id="app">
    <div class="post">
      <p> {{helloMessage}}</p>
    </div>
  </div>
</template>

<!-- <HelloWorld :msg="helloMessage"></HelloWorld> -->

<script lang="ts">
import Vue from 'vue'

export default Vue.extend({
  name: 'App',
  computed: {
    helloMessage: {
      get () {
        console.log('Store data: ' + 'this.$store.helloMessage')
        return this.$store.state.helloMessage
      }
    }
  }
})
</script>

<style>
#app{
  text-align: center;
  color: #2c3e50;
  margin: 60px auto;
  width: 400px;
}

.post{
  border: 1px solid #ccc;
  border-radius: 5px;
  margin-bottom: 1rem;
}
</style>
