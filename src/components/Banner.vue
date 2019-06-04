<template>
  <header class="banner">
    <h1><span @click='clearPhotos' class='title'>Picsearch</span>
      <span @click="handleClick" class="info">i</span>
    </h1>
    <div class="instructions">
      <p v-if="this.showInfo">Type a word or phrase and submit to show pictures of that subject! Click title to clear results. Uses <a href="https://unsplash.com/developers">Unsplash</a> photo API. 
        <span @click="handleClick" class="info">X</span>
      </p>
    </div>
  </header>
</template>

<script>
export default {
  name: 'banner',
  data() {
    return {
      showInfo: false,
    }
  },
  methods: {
    handleClick() {
      this.showInfo = !this.showInfo
    },
    clearPhotos() {
      this.$emit('clear')
    }
  },
};
</script>

<style>

h1 {
  color: #29292d;
  font-size: 400%;
  margin-top: 0;
  margin-bottom: 20px;
  text-shadow: 3px 3px 3px #5c5c77;
  position: relative;
}

.instructions {
  height: 40px;
  font-weight: bold;
  margin-bottom: 10px;
  width: 100%;
}

.info {
  background-color: #c7c7c7;
  border: 1px solid #2c3e50;
  border-radius: 25px;
  font-size: 30%;
  width: 24px;
  height: 24px;
  line-height: 24px;
  position: absolute;
}

.info:hover {
  background-color: #bbabab;
  cursor: pointer;
}

.title:hover {
  cursor: pointer;
}
</style>