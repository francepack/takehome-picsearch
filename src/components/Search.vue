<template>
  <section class="search-area">
    <form @submit.prevent="handleSubmit">
      <input type="text"
             class="search-input"
             placeholder="Search for..."
             v-model="searchInput"
      />
      <button :disabled="!searchInput" class="submit">Submit</button>
    </form>
  </section>
</template>

<script>
export default {
  name: "Search",
  data() {
    return {
      searchInput: "",
    }
  },
  methods: {
    handleSubmit() {
      const searchWord = this.searchInput
      this.$emit("searchPhotos", searchWord)
      this.searchInput = ""
    },
  },
}
</script>

<style>
.search-input {
  background-color: #c5cbd4;
  border: 2px solid #364350;
  border-right: 0;
  border-radius: 12px 0 0 12px;
  box-shadow: 4px 4px 4px #5c5c77;
  font-size: 18px;
  height: 40px;
  padding: 0;
  text-indent: 20px;
  width: 30%;
}

.submit {
  background-color: #b2b2b9;
  border: 2px solid #364350;
  border-radius: 0 12px 12px 0;
  box-shadow: 4px 4px 4px #5c5c77;
  color: #613d3d;
  font-size: 18px;
  height: 40px;
  padding: 0;
  width: 10%;
}

button:disabled {
  opacity: .7;
}

button:hover {
  background-color: #9d9da9;
  box-shadow: 6px 6px 6px #5c5c77;
  color: #543434;
  cursor: pointer;
}

button:disabled:hover {
  background-color: #b2b2b9;
  box-shadow: 4px 4px 4px #5c5c77;
  color: #613d3d;
  cursor: default;
}

@media screen and (max-width: 750px) {
  .search-input {
    width: 55%;
  }
  
  .submit {
    width: 20%;
  }
}
</style>