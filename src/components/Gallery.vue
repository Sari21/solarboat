<template>
  <div>
    <Header></Header>
    <GaleryBody></GaleryBody>
    <Footer></Footer>
  </div>
</template>

<script>
import Header from "./Header.vue";
import MainPageBody from "./GaleryBody.vue";
import Footer from "./Footer.vue";

export default {
  name: "Galery",
  props: {},
  components: {
    Header,
    Galery,
    Footer
  }
};
</script>