<template>
  <div id="app">
    <Banner v-show="showTitle"></Banner>
    <Search @searchPhotos="getPhotos"></Search>
    <PhotoArea v-if="photos.length" :photos="photos"></PhotoArea>
  </div>
</template>

<script>
import Banner from './components/Banner.vue'
import Search from './components/Search.vue'
import PhotoArea from './components/PhotoArea.vue'
import { fetchPhotosByKeyword } from './API'
import { cleanPhotoData } from './Utils'
import { unsplashKey } from './api_key/apiKey'

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
        let url = baseUrl +`?query=${searchWord}&orientation=squarish&per_page=12&client_id=${unsplashKey}`
        let photoData = await fetchPhotosByKeyword(url)
        let photos = cleanPhotoData(photoData)
        this.photos = photos
      } catch(error) {
        this.error = error.message
      }
    },
  },
  components: {
    Banner,
    Search,
    PhotoArea
  },
}
</script>

<style>
* {
  box-sizing: border-box;
}

html {
  background: url('https://ae01.alicdn.com/kf/HTB1E2WvdER1BeNjy0Fmq6z0wVXab/light-color-plank-backdrop-for-newborn-baby-photo-shoot-children-simulate-wooden-floor-board-background-digital.jpg_640x640.jpg')
}

#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 30px;
}
</style>
