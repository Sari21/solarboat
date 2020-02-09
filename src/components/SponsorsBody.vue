<template>
    <div id="body" class="page">
        <div class="title content col-md-6">
            <h3 class="title text-center m-4">Fő szponzoraink</h3>
            <div class="photos">
                <a v-for="sponsor in allSponsors.main_sponsors"
                   v-bind:key="sponsor.id"
                   v-bind:href="sponsor.link"
                   target="blank">
                    <img class="col-5 p-2 m-2" v-bind:src="'/sponsors/'+sponsor.name+'.png'" />
                </a>
            </div>
            <h3 class="title text-center m-3">Kiemelt szponzoraink</h3>
            <div class="photos">
                <a v-for="sponsor in allSponsors.exclusive_sponsors"
                   v-bind:key="sponsor.id"
                   v-bind:href="sponsor.link"
                   target="blank">
                    <img v-bind:src="'/sponsors/'+sponsor.name+'.png'" class="col-5 p-2" />
                </a>
            </div>
            <h3 class="title text-center m-3">Szponzoraink</h3>
            <div class="photos">
                <a v-for="sponsor in allSponsors.sponsors"
                   v-bind:key="sponsor.id"
                   v-bind:href="sponsor.link"
                   target="blank">
                    <img v-bind:src="'/sponsors/'+sponsor.name+'.png'" class="col-3 p-2 m-2" />
                </a>
            </div>
            <h3 class="title text-center m-3">Tudományos partnereink</h3>
            <div class="text-center photos">
                <a href=" https://www.energia.mta.hu/" target="blank">
                    <img src="/sponsors/ek.png" class="col-7 p-2" />
                </a>
            </div>
            <h3 class="title text-center m-3">Budapesti Műszaki és Gazdaságtudományi Egyetem</h3>
            <div class="text-center photos">
                <a href="https://www.bme.hu/" target="blank">
                    <img src="/sponsors/bme.png" class="col-7 p-2" />
                </a>
            </div>
            <div class="text-center photos">
                <a href="https://www.facebook.com/bmemvk/" target="blank">
                    <img src="/sponsors/mvk.png" class="col-4 p-2" />
                </a>
                <a href="http://ehk.bme.hu/" target="blank">
                    <img src="/sponsors/ehk.png" class="col-4 p-2" />
                </a>
            </div>

            <hr />
            <div class="text-center photos">
                <a href="https://gpk.bme.hu/hu/" target="blank">
                    <img src="/sponsors/gpk.png" class="col-3 p-2" />
                </a>
            </div>

            <hr />
            <div class="photos text-center">
                <a v-for="sponsor in allSponsors.departments"
                   v-bind:key="sponsor.id"
                   v-bind:href="sponsor.link"
                   target="blank">
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
.photos img {
  padding: 10px;
  background: white;
  border-radius: 10px;
  margin: 10px;
}
</style>