<template>
  <div id="gallerytemplate">
    <div class="jumbotron container m-0-1-0-1 p-2">
      <div class="p-1 container text-center">
        <h2>{{ gallery.title }}</h2>

        <p>{{ gallery.description }}</p>
      </div>
      <img
        class="col-3 p-1 gallery"
        v-for="(image, i) in gallery.images"
        :src="image"
        v-bind:key="image.id"
        @click="onClick(i)"
      />
      <vue-gallery-slideshow :images="gallery.images" :index="index" @close="index = null"></vue-gallery-slideshow>
    </div>
  </div>
</template>

<script>
import VueGallerySlideshow from "vue-gallery-slideshow";
export default {
  name: "GalleryTemplate",
  components: {
    VueGallerySlideshow
  },
  methods: {
    onClick(i) {
      this.index = i;
    }
  },
  data() {
    return {
      index: null
    };
  },
  props: ["gallery"]
};
</script>
<style>
img.gallery {
  cursor: pointer;
  height: 30vh;
  object-fit: cover;
}
/*komment*/
</style>
