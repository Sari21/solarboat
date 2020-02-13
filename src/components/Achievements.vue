<template>
  <div>
    <Header></Header>
    <AchievementsBody></AchievementsBody>
    <Footer></Footer>
  </div>
</template>

<script>
import Header from "./Header.vue";
import AchievementsBody from "./AchievementsBody.vue";
import Footer from "./Footer.vue";

export default {
  name: "Achievements",
  props: {},
  components: {
    Header,
    AchievementsBody,
    Footer
  }
};
</script>
