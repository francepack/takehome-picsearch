<template>
  <section class="photo">
    <p>{{ photo.name }}</p>
  </section>
</template>

<script>
// imports here

export default {
  name: 'photo',
  props: {
    photo: {
      type: Object,
      required: true,
    },
  },
  
};
</script>

<style>
.photo-area {
  font-size: 200%;
}
</style>