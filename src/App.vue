<template>
  <div id="app">
    <Banner @clear="clearPhotos"></Banner>
    <Search @searchPhotos="getPhotos"></Search>
    <h4 v-if="this.searchWord">You searched: "<em>{{ this.searchWord }}</em>"</h4>
    <h4 v-else>Type in a search term to begin!</h4>
    <h4 v-if="this.noResults">No results! Try another search term.</h4>
    <h4 v-if="this.error">{{ error }}</h4>
    <PhotoArea v-if="photos.length" :photos="photos"></PhotoArea>
  </div>
</template>

<script>
import Banner from "./components/Banner.vue"
import Search from "./components/Search.vue"
import PhotoArea from "./components/PhotoArea.vue"
import { fetchPhotosByKeyword } from "./API"
import { cleanPhotoData } from "./Utils"
import { unsplashKey } from "./api_key/apiKey"

export default {
  name: "app",
  data () {
    return {
      searchWord: "",
      photos: [],
      error: "",
      noResults: false
    }
  },
  methods: {
    async getPhotos(searchWord) {
      try {
        this.searchWord = searchWord
        const baseUrl = "https://api.unsplash.com/search/photos"
        let url = baseUrl +`?query=${searchWord}&orientation=squarish&per_page=12&client_id=${unsplashKey}`
        let photoData = await fetchPhotosByKeyword(url)
        this.checkResults(photoData)
        let photos = cleanPhotoData(photoData)
        this.photos = photos
      } catch(error) {
        this.error = error.message
      }
    },
    clearPhotos() {
      this.searchWord = ""
      this.photos = []
    },
    checkResults(photoData) {
      if (!photoData.results.length) {
        this.noResults = true
      } else {
        this.noResults = false
      }
    }
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
  background: url("https://ae01.alicdn.com/kf/HTB1E2WvdER1BeNjy0Fmq6z0wVXab/light-color-plank-backdrop-for-newborn-baby-photo-shoot-children-simulate-wooden-floor-board-background-digital.jpg_640x640.jpg")
}

#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 30px;
}

h4 {
  text-shadow: 1px 1px 1px #29292d;
  /* color: #2c3e50; */
  font-size: 200%;
  margin: 0;
  margin-top: 20px;
}

a {
  text-decoration: none;
}
</style>