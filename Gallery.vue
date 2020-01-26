<template>
  <div>
    <Header></Header>
    <GalleryBody></GalleryBody>
    <Footer></Footer>
  </div>
</template>

<script>
import Header from "./Header.vue";
import GalleryBody from "./GalleryBody.vue";
import Footer from "./Footer.vue";

export default {
  name: "Gallery",
  props: {},
  components: {
    Header,
    GalleryBody,
    Footer
  }
};
</script>
