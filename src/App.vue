<template>
  <div id="app">
    <Banner></Banner>
    <Search></Search>
    <PhotoArea></PhotoArea>
  </div>
</template>

<script>
import Banner from './components/Banner.vue'
import Search from './components/Search.vue'
import PhotoArea from './components/PhotoArea.vue'


export default {
  name: 'app',
  components: {
    Banner,
    Search,
    PhotoArea
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
  margin-top: 60px;
}
</style>
