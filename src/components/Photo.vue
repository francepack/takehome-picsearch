<template>
  <section class="photo">
    <div class="photo-head">
      <img src="http://www.pngall.com/wp-content/uploads/2/ThumbTack-PNG-File-Download-Free.png" />
      <p>Photo by: {{ photo.user }}</p>
    </div>
    <div class="image-area">
      <img :src="photo.url" :alt="photo.alt_description" class="picture" />
    </div>
    <div class="photo-info">
      <h3>User Description</h3>
      <p v-if="!photo.description && !photo.alt_description">No description given by user</p>
      <p>{{ photo.description }}</p>
      <p>{{ photo.alt_description }}</p>
      <h3>Associated terms</h3>
      <ul class="tags">
        <li v-for="(tag, index) in photo.tags" :key="index" class="tag">
          {{ tag }}<span v-if="index !== photo.tags.length - 1">,</span>
        </li>
      </ul>
    </div>
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
.photo {
  background-color: #e0ab69;
  border: 4px solid #2c3e50;
  border-radius: 12px;
  margin: 30px;
  width: 28%;
}

.photo-head img {
  height: 40px;
  width: 40px;
}

.photo-head p {
  margin-top: 0;
  font-size: 150%;
}

.picture {
  border-top: 2px solid #2c3e50;
  border-bottom: 2px solid #2c3e50;
  height: 350px;
  width: 100%;
}

.photo-info {
  padding: 10px;
}

h3 {
  margin-top: 6px;
  text-decoration: underline;
}

.tags {
  margin-top: 0;
  padding: 0;
}

.tag {
  display: inline;
  list-style: none;
}
</style>