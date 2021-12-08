<template>
  <div id="app">
    <pageHeader/>
    <router-view/>
    <pageFooter/>
  </div>
</template>

<script>
import pageHeader from '@/components/Page/PageHeader'
import pageFooter from '@/components/Page/PageFooter'
export default {
  name: 'App',
  components: {
    pageHeader,
    pageFooter
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 30px;
}
</style>
