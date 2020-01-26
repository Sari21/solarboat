<template>
  <div id="body" class="page">
    <h1 class="p-4 md-pt-5">Galéria</h1>
    <div class="d-flex flex-column justify-content-center col-12 col-md-8">
      <gallery-template
        v-for="gallery in allGallery"
        v-bind:key="gallery.id"
        v-bind:gallery="gallery"
      ></gallery-template>
    </div>
  </div>
</template>

<script>
import GalleryTemplate from "./GalleryTemplate.vue";
import json from "../data/gallery.json";
export default {
  name: "GalleryBody",
  components: {
    GalleryTemplate
  },
  methods: {
    onClick(i) {
      this.index = i;
    }
  },
  data() {
    return {
      allGallery: json
    };
  }
};
</script>
<style>
</style>
