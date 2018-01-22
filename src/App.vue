<template>
  <div>
    <p>Total: ${{ count }}</p>
    <nav>
      <router-link to="/">Home</router-link>
      <router-link to="/helloworld">HelloWorld</router-link>
      <router-link to="/Video">Video</router-link>
    </nav>
    <router-view></router-view>
  </div> 
</template>

<script>
export default {
  name: 'App',
  computed: {
    count () {
      return this.$store.state.count
    }
  }
}
</script>

<style lang="scss" scoped>
nav {
  a {
    padding: 10px;
    background-color: aqua;
  }
}
</style>
