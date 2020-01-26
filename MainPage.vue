<template>
  <div id="container">
    <Header></Header>
    <MainPageBody></MainPageBody>
    <Footer></Footer>
  </div>
</template>

<script>
import Header from "./Header.vue";
import MainPageBody from "./MainPageBody.vue";
import Footer from "./Footer.vue";

export default {
  name: "MainPage",
  props: {},
  components: {
    Header,
    MainPageBody,
    Footer
  }
};
</script>