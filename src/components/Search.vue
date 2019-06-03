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
    }
  }
}
</script>

<style>

</style>