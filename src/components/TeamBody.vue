<template>
  <div id="body" class="page">
    <div class="content col-sm-12 col-lg-6 col-md-9 p-3">
      <div class="title p-4 md-pt-5">
        <h1>Csapatunk</h1>
      </div>
      <div class="description md-p-3">
        <p>A BME Solar Boat Team 3 fő szakmai egységre tagolható: Gépészet, Gazdaság, Elektronika (GGE). A csapat élén a csapatkapitány áll, akinek elsődleges feladata a csapat vezetése és koordinálása, valamint a három fő szakmai egység munkájának a harmonizálása a csapaton belül. Minden szakmai egység élén egy csoportvezető áll, aki összekapcsolja a csoporton belül futó projekteket.</p>
      </div>
      <TeamTemplate v-for="team in allTeam" v-bind:key="team.id" v-bind:team="team"></TeamTemplate>
    </div>
  </div>
</template>

<script>
import TeamTemplate from "./TeamTemplate.vue";
import json from "../data/team.json";
export default {
  name: "TeamBody",
  data() {
    return {
      allTeam: json
    };
  },
  components: {
    TeamTemplate
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
</style>
