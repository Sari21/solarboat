<template>
  <div id="body" class="page">
    <div class="content col-sm-12 col-lg-6 col-md-9 p-3">
      <div class="title p-4 md-pt-5">
        <h1>Csapatunk</h1>
      </div>
      <div class="description md-p-3">
        <p>A BME Solar Boat Team 3 fő szakmai egységre tagolható: Gépészet, Gazdaság, Elektronika (GGE). A csapat élén a csapatkapitány áll, akinek elsődleges feladata a csapat vezetése és koordinálása, valamint a három fő szakmai egység munkájának a harmonizálása a csapaton belül. Minden szakmai egység élén egy csoportvezető áll, aki összekapcsolja a csoporton belül futó projekteket.</p>
      </div>
      <div class="container jumbotron m-0-1-0-1 pt-1 pr-3 pl-3 pb-2">
        <TeamTemplate v-bind:team="allTeams[2]"></TeamTemplate>
      </div>
      <div class="container jumbotron m-0-1-0-1 pt-1 pr-3 pl-3 pb-2">
        <TeamTemplate v-bind:team="allTeams[1]"></TeamTemplate>
      </div>
      <!-- gépészet -->
      <div class="container jumbotron m-0-1-0-1 pt-1 pr-3 pl-3 pb-2">
        <div class="title text-center m-3">Gépészeti csoport</div>
        <div
          class="description p-3 mb-3"
        >A gépészeti csoportban két részegység található: Anyagtechnológia és Konstrukciós tervezés & Szimuláció.</div>

        <div class="title2 text-center m-3">{{allTeams[0].title}}</div>

        <div class="justify-content-center d-flex row align-items-center members mb-3">
          <div class="d-flex flex-column col-5 col-sm-4 col-md-3 p-1 align-items-center">
            <img
              class="rounded-circle p-0 img-fluid flex-grow-0 flex-shrink-0 d-flex"
              v-bind:src="'/members/'+allTeams[0].leader.image+'.png'"
            />
            <div class="text-center font-weight-bold leader">
              {{allTeams[0].leader.lastname}}
              <br />
              {{allTeams[0].leader.firstname}}
            </div>
          </div>
          <div
            v-for="member in allTeams[0].members"
            v-bind:key="member.id"
            class="d-flex flex-column col-4 col-sm-2 col-md-2 p-1 align-items-center member"
          >
            <img class="rounded-circle p-0 img-fluid" v-bind:src="'/members/'+member.image+'.png'" />
            <div class="text-center">
              {{member.lastname}}
              <br />
              {{member.firstname}}
            </div>
          </div>
        </div>
        <div class="description p-3 mb-3">
          <div>{{allTeams[0].description}}</div>
        </div>
        <div class="title2 text-center m-3">{{allTeams[3].title}}</div>

        <div class="justify-content-center d-flex row align-items-center members mb-3">
          <div class="d-flex flex-column col-5 col-sm-4 col-md-3 p-1 align-items-center">
            <img
              class="rounded-circle p-0 img-fluid flex-grow-0 flex-shrink-0 d-flex"
              v-bind:src="'/members/'+allTeams[3].leader.image+'.png'"
            />
            <div class="text-center font-weight-bold leader">
              {{allTeams[3].leader.lastname}}
              <br />
              {{allTeams[3].leader.firstname}}
            </div>
          </div>
          <div
            v-for="member in allTeams[3].members"
            v-bind:key="member.id"
            class="d-flex flex-column col-4 col-sm-2 col-md-2 p-1 align-items-center member"
          >
            <img class="rounded-circle p-0 img-fluid" v-bind:src="'/members/'+member.image+'.png'" />
            <div class="text-center">
              {{member.lastname}}
              <br />
              {{member.firstname}}
            </div>
          </div>
        </div>
        <div class="description p-3 mb-3">
          <div>{{allTeams[0].description}}</div>
        </div>
        <div class="photos">
          <img
            v-for="photo in allTeams[0].images"
            v-bind:src="'/workgroups/'+photo.name"
            v-bind:key="photo.id"
            class="col-8 p-1"
          />
        </div>
      </div>
      <!-- gépészet vége -->
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
      allTeams: json
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
.title2 {
  font-size: 1.5rem;
}
</style>
