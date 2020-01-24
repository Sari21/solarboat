<template>
  <div id="container">
    <Header></Header>
    <SponsorsBody></SponsorsBody>
    <Footer></Footer>
  </div>
</template>

<script>
import Header from "./Header.vue";
import SponsorsBody from "./SponsorsBody.vue";
import Footer from "./Footer.vue";

export default {
  name: "Sponsors",
  props: {},
  components: {
    Header,
    SponsorsBody,
    Footer
  }
};
</script>