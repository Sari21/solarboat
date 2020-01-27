<template>
  <div id="body" class="page">
    <h1 class="p-4 md-pt-5">Galéria</h1>
    <div class="d-flex flex-column justify-content-center align-items-center col-12 col-md-8">
      <iframe
        src="https://drive.google.com/file/d/1YBJcGnnUcpAKKIIrJrjJRqNmThyU5IKn/preview"
        width="640"
        height="480"
      ></iframe>
      <gallery-template
        v-for="gallery in allGallery"
        v-bind:key="gallery.id"
        v-bind:gallery="gallery"
      ></gallery-template>
    </div>
  </div>
</template>
<!-- -->

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
