<template>
  <div>
    <div class="jumbotron m-0-1-0-1 p-2 news" @click="modalShow = !modalShow">
      <div class="p-2 container">
        <div class="row title">
          <div class="col-9 news-title p-0">{{ item.title }}</div>
          <div>
            <BIconArrowRight class="arrow"></BIconArrowRight>

            <b-modal class="modal text-center" v-model="modalShow" ok-only>
              <h1>{{ item.title }}</h1>
              <p>
                <img
                  class="col-6 mr-2 mb-2 p-0"
                  align="left"
                  v-bind:src="`/news/`+ item.image"
                  alt="Image"
                />
                {{ item.description }}
              </p>
            </b-modal>
          </div>
        </div>
        <div class="row col-12 date mt-2 mb-2">
          <BIconCalendarFill class="mr-2"></BIconCalendarFill>
          <div>{{ item.date }}</div>
        </div>
        <div class="row description">
          <div class="col-9">{{ item.shortDescription }}</div>
          <img class="col-3 m-0-0-0-3 img-small img-responsive" v-bind:src="`/news/`+ item.image" alt="Image" />
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import { BIconCalendarFill, BIconArrowRight } from "bootstrap-vue";

export default {
  name: "News",
  props: ["item"],
  data() {
    return {
      modalShow: false
    };
  },
  components: {
    BIconCalendarFill,
    BIconArrowRight
  }
};
</script>
<style>
/*#image {
  max-height: 100%;
  position: absolute;
}*/
.jumbotron {
  background-color: rgb(27, 121, 150, 0.6);
}
.date {
  display: flex;
  align-items: center;
}
.img-fluid {
  max-width: 100%;
  height: auto;
}
.img-small {
width: 100%;
object-fit: cover;
max-height: 30%;
}
.title {
  font-size: 150%;
  line-height: 100%;
}
.description {
  text-align: justify;
  line-height: 120%;
}
.arrow {
  font-size: 200%;
}
.arrow:hover {
  color: lightgray;
}
.news:hover {
  background: #3e889e;
  cursor: pointer;
}
.news-title {
  font-size: 1.4rem;
}
</style>
