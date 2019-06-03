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
import { fetchPhotosByKeyword } from './API'



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
  methods: {
    async getPhotos(searchWord) {
      try {
        this.searchWord = searchWord
        const baseUrl = 'https://api.unsplash.com/search/photos'
        let url = baseUrl +`?query=${searchWord}&orientation=squarish&client_id=${unsplashKey}`
        let photoData = await fetchPhotosByKeyword(url)
        console.log(photoData)
      } catch(error) {
        this.error = error.message
      }
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
