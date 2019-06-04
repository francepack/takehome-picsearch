<template>
  <header class="banner">
    <h1>Picsearch
      <span @click="handleClick">i</span>
    </h1>
    <div class="instructions">
      <p v-if="this.showInfo">Type a word or phrase and submit to show pictures of that subject! Uses <a href="https://unsplash.com/developers">Unsplash</a> photo API. 
        <span @click="handleClick">X</span>
      </p>
    </div>
  </header>
</template>

<script>
// imports here
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
    }
  }
  
};
</script>

<style>

h1 {
  color: #364350;
  font-size: 400%;
  margin-top: 0;
  margin-bottom: 20px;
  position: relative;
}

.instructions {
  height: 40px;
  font-weight: bold;
  margin-bottom: 10px;
  width: 100%;
}

.banner span {
  background-color: #c7c7c7;
  border: 1px solid #2c3e50;
  border-radius: 25px;
  font-size: 30%;
  width: 24px;
  height: 24px;
  line-height: 24px;
  position: absolute;
}

.banner span:hover {
  background-color: #bbabab;
  cursor: pointer;
}
</style>