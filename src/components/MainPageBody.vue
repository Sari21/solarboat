<template>
  <div id="body" class="page">
    <div class="content col-12 col-xl-6 col-md-9 mb-5">
      <div class="title pt-5 text-center">
        <h1>BME Solar Boat Team</h1>
      </div>

      <div class="allnews">
        <div class="title text-center p-4">
          <h2>Hírek</h2>
        </div>
        <div class="scrollable">
          <News
            class="news"
            v-for="item in allNews.slice().reverse()"
            v-bind:key="item.id"
            v-bind:item="item"
          ></News>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import News from "./News.vue";
import json from "../data/news.json";

export default {
  name: "MainPageBody",
  data() {
    return {
      allNews: json
    };
  },
  components: {
    News
  }
};
</script>
<style>
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
