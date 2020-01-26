<template>
  <div id="body" class="page">
    <div class="content col-md-6">
      <div class="title text-center m-4">Fő támogatóink</div>
      <div class="photos">
        <a
          v-for="sponsor in allSponsors.main_sponsors"
          v-bind:key="sponsor.id"
          v-bind:href="sponsor.link"
          target="blank"
        >
          <img class="col-6 p-2" v-bind:src="'/sponsors/'+sponsor.name+'.png'" />
        </a>
      </div>
      <div class="title text-center m-3">Kiemelt támogatóink</div>
      <div class="photos">
        <a
          v-for="sponsor in allSponsors.exclusive_sponsors"
          v-bind:key="sponsor.id"
          v-bind:href="sponsor.link"
          target="blank"
        >
          <img v-bind:src="'/sponsors/'+sponsor.name+'.png'" class="col-6 p-2" />
        </a>
      </div>
      <div class="title text-center m-3">Támogatóink</div>
      <div class="photos">
        <a
          v-for="sponsor in allSponsors.sponsors"
          v-bind:key="sponsor.id"
          v-bind:href="sponsor.link"
          target="blank"
        >
          <img v-bind:src="'/sponsors/'+sponsor.name+'.png'" class="col-4 p-2" />
        </a>
      </div>
      <div class="title text-center m-3">Tudományos partnereink</div>
      <div class="text-center">
        <a href="#" target="blank">
          <img src="/sponsors/MTA.png" class="col-3 p-2" />
        </a>
      </div>
      <div class="title text-center m-3">Budapesti Műszaki és Gazdaságtudományi Egyetem</div>
      <div class="text-center">
        <a href="#" target="blank">
          <img src="/sponsors/bme.png" class="col-7 p-2" />
        </a>
      </div>
      <div class="text-center">
        <a href="#" target="blank">
          <img src="/sponsors/mvk.png" class="col-6 p-2" />
        </a>
      </div>

      <hr />
      <div class="text-center">
        <a href="#" target="blank">
          <img src="/sponsors/gpk.png" class="col-6 p-2" />
        </a>
      </div>

      <hr />
      <div class="photos text-center">
        <a
          v-for="sponsor in allSponsors.departments"
          v-bind:key="sponsor.id"
          v-bind:href="sponsor.link"
          target="blank"
        >
          <img v-bind:src="'/sponsors/'+sponsor.name+'.png'" class="col-3 p-2" />
        </a>
      </div>
    </div>
  </div>
</template>

<script>
import json from "../data/sponsors.json";
export default {
  name: "SponsorsBody",
  data() {
    return {
      allSponsors: json
    };
  }
};
</script>
<style >
.page {
  display: flex;
  flex-direction: column;
  align-items: center;
  color: white;
}
.title {
  font-size: 1.7rem;
}
hr {
  display: block;
  margin-top: 1rem;
  margin-bottom: 1rem;
  margin-left: auto;
  margin-right: auto;
  border-style: inset;
  border-width: 1px;
  color: white;
  width: 100%;
}
</style>