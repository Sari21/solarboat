<template>
  <div id="container">
    <Header></Header>
    <TeamBody></TeamBody>
    <Footer></Footer>
  </div>
</template>

<script>
import Header from "./Header.vue";
import TeamBody from "./TeamBody.vue";
import Footer from "./Footer.vue";

export default {
  name: "Team",
  props: {},
  components: {
    Header,
    TeamBody,
    Footer
  }
};
</script>