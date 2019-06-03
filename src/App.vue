<template>
  <div id="app">
    <Banner v-show="showTitle"></Banner>
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
  data () {
    return {
      searchWord: '',
      showTitle: true,
      photos: [],
      error: '',
    }
  },
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
