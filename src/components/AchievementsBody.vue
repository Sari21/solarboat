<template>
  <div id="body" class="page">
    <div class="content col-12 col-xl-6 col-md-9 mb-5   ">
      <div class="allnews">
        <div class="title text-center">
          <h2>Eredményeink</h2>
        </div>
        <div class=" mt-5">
          <News
            v-for="item in allAchievements.slice().reverse()"
            v-bind:key="item.id"
            v-bind:item="item"
          ></News>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import News from "./Achievement.vue";
import json from "../data/achievements.json";

export default {
  name: "AchievementsBody",
  data() {
    return {
      allAchievements: json
    };
  },
  components: {
    News
  }
};
</script>
<style>
.news.jumbotron {
  background-color: rgb(27, 121, 150, 0.6);
}
.content {
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 0px;
}
.description {
  text-align: justify;
}

.news {
  width: 100%;
}
div.scrollable {
  height: 90vh;
  overflow: auto;
  overflow-x: hidden;
}
/*hali*/
</style>
