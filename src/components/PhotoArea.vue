<template>
  <section class="photo-area">
    <Photo v-for="photo in photos" :photo="photo" :key="photo.id"></Photo>
  </section>
</template>

<script>
import Photo from './Photo.vue'

export default {
  name: 'photoArea',
  props: {
    photos: {
      type: Array,
      required: true,
    },
  },
  components: {
    Photo,
  },
  
};
</script>

<style>
.photo-area {
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
  /* font-size: 200%; */
}
</style>