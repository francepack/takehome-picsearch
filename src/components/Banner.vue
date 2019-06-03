<template>
  <header class="banner">
    <h1>Picsearch<span @click="handleClick">i</span></h1>
    <p v-if="this.showInfo">hello</p>
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
  font-size: 400%;
  margin-top: 0;
}

h1 span {
  border: 1px solid #2c3e50;
  border-radius: 25px;
  font-size: 30%;
  width: 24px;
  height: 24px;
  line-height: 24px;
  position: absolute;
}

span:hover {
  background-color: red;
  cursor: pointer;

}
</style>