<template>
  <div id="body" class="page">
    <h1 class="p-4 md-pt-5">Galéria</h1>

    <div class="d-flex flex-column justify-content-center col-12 col-md-8">
      <div class="m-0-1-0-1 p-2">
        <!-- Ide jön a rendes videó
          <video class="col-8" controls>
          <source
            src="https://drive.google.com/open?id=1iYPANYfx-hgEZwfbv4Z_lKDT2jVMedmR"
            type="video/mp4"
          />Your browser does not support the video tag.
        </video>
        -->
        <iframe
          src="https://drive.google.com/file/d/1YBJcGnnUcpAKKIIrJrjJRqNmThyU5IKn/preview"
          width="640"
          height="480"
        ></iframe>
      </div>
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
