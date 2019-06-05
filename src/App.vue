<template>
  <div id="app">
    <Banner @clear="clearPhotos"></Banner>
    <Search @searchPhotos="getPhotos"></Search>
    <h4 v-if="this.searchWord">You searched: "<em>{{ this.searchWord }}</em>"</h4>
    <h4 v-else>Type in a search term to begin!</h4>
    <h4 v-if="this.noResults">No results! Try another search term.</h4>
    <h4 v-if="this.error">{{ error }}</h4>
    <PhotoArea v-if="photos.length" :photos="photos"></PhotoArea>
    <div v-if="photos.length" class="bottom-control">
      <button @click="this.addMorePhotos">Show more pics!</button>
      <button @click="this.clearPhotos">Start over</button>
    </div>
  </div>
</template>

<script>
import Banner from "./components/Banner.vue"
import Search from "./components/Search.vue"
import PhotoArea from "./components/PhotoArea.vue"
import { fetchPhotosByKeyword } from "./API"
import { cleanPhotoData } from "./Utils"

export default {
  name: "App",
  data () {
    return {
      searchWord: "",
      photos: [],
      error: "",
      noResults: false,
      pageCount: 1,
    }
  },
  methods: {
    async getPhotos(searchWord) {
      this.pageCount = 1
      try {
        this.searchWord = searchWord
        const baseUrl = "https://api.unsplash.com/search/photos"
        let url = baseUrl +`?query=${searchWord}&page=${this.pageCount}&orientation=squarish&per_page=12&client_id=${process.env.VUE_APP_KEY}`
        let photoData = await fetchPhotosByKeyword(url)
        this.checkResults(photoData)
        let photos = cleanPhotoData(photoData)
        this.photos = photos
      } catch(error) {
        this.error = error.message
      }
    },
    async addMorePhotos() {
      this.pageCount++
      try {
        const baseUrl = "https://api.unsplash.com/search/photos"
        let url = baseUrl +`?query=${this.searchWord}&page=${this.pageCount}&orientation=squarish&per_page=12&client_id=${process.env.VUE_APP_KEY}`
        let newPhotoData = await fetchPhotosByKeyword(url)
        let newPhotos = cleanPhotoData(newPhotoData)
        this.photos = this.photos.concat(newPhotos)
      } catch(error) {
        this.error = error.message
      }
    },
    clearPhotos() {
      this.searchWord = ""
      this.photos = []
      this.pageCount = 1
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

body {
  background: url("https://ae01.alicdn.com/kf/HTB1E2WvdER1BeNjy0Fmq6z0wVXab/light-color-plank-backdrop-for-newborn-baby-photo-shoot-children-simulate-wooden-floor-board-background-digital.jpg_640x640.jpg");
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
  font-size: 200%;
  margin: 0;
  margin-top: 20px;
}

a {
  text-decoration: none;
}

.bottom-control {
  display: flex;
  flex-direction: column;
  align-items: center;
}

.bottom-control button {
  background-color: #b2b2b9;
  border: 2px solid #364350;
  border-radius: 12px;
  box-shadow: 4px 4px 4px #5c5c77;
  color: #613d3d;
  font-size: 18px;
  height: 40px;
  margin-bottom: 30px;
  padding: 0;
  width: 30%;
}

.bottom-control button:hover {
  background-color: #9d9da9;
  box-shadow: 6px 6px 6px #5c5c77;
  color: #543434;
  cursor: pointer;
}

@media screen and (max-width: 750px) {
  .bottom-control button {
    width: 70%;
  }

  h4 {
    margin-bottom: 30px;
    margin-top: 30px;
  }
}
</style>