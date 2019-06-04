<template>
  <section class='search-area'>
    <form @submit.prevent="handleSubmit">
      <input type="text"
             class="search-input"
             placeholder="Search for..."
             v-model="searchInput"
      />
      <button>Submit</button>
    </form>
  </section>
</template>

<script>
export default {
  name: 'search',
  data() {
    return {
      searchInput: '',
    }
  },
  methods: {
    handleSubmit() {
      const searchWord = this.searchInput
      this.$emit('searchPhotos', searchWord);
      this.searchInput = ''
    },
  },
}
</script>

<style>

.search-input {
  background-color: #c5cbd4;
  border: 2px solid #967f67;
  border-right: 0;
  border-radius: 12px 0 0 12px;
  font-size: 18px;
  height: 40px;
  text-indent: 20px;
  width: 30%;
}

button {
  background-color: #b2b2b9;
  border: 2px solid #967f67;
  border-radius: 0 12px 12px 0;
  color: #613d3d;
  font-size: 18px;
  height: 40px;
  width: 10%;
}

</style>