<template>
  <div>
    <div class="jumbotron m-0-1-0-1 p-2">
      <div class="p-1 container">
        <div class="row title">
          <div class="col-9">{{ item.title }}</div>
          <div>
            <BIconArrowRight class="arrow" @click="modalShow = !modalShow"></BIconArrowRight>

            <b-modal v-model="modalShow" ok-only>
              <h1>{{ item.title }}</h1>
              <img
                class="col-1 img-fluid m-0-0-0-3 img"
                v-bind:src="`../images/`+ item.image"
                alt="Image"
              />
              <p>{{ item.description }}</p>
            </b-modal>
          </div>
        </div>
        <div class="row col-12 date">
          <BIconCalendarFill class="mr-2"></BIconCalendarFill>
          <div>{{ item.date }}</div>
        </div>
        <div class="row description">
          <div class="col-9">{{ item.shortDescription }}</div>
          <img class="col-3 img-fluid m-0-0-0-3" src="../images/cat.jpg" alt="Image" />
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import { BIconCalendarFill, BIconArrowRight } from "bootstrap-vue";

export default {
  name: "News",
  data() {
    return {
      item: [],
      modalShow: false
    };
  },
  props: {},
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
  background: #1b7996;
}
.date {
  display: flex;
  align-items: center;
}
.img-fluid {
  max-width: 100%;
  height: 100%;
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
.img {
  width: 90%;
  height: auto;
}
</style>
