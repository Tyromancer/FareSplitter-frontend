<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png">
    <!-- <HelloWorld msg="Welcome to Your Vue.js App"/> -->
    <Hello />
  </div>
</template>

<script>
// @ is an alias to /src
// import HelloWorld from '@/components/HelloWorld.vue'
import Hello from '@/components/Hello.vue'

export default {
  name: 'Home',
  components: {
    // HelloWorld
    Hello
  }
}
</script>
