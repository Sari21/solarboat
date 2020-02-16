<template>
  <div id="body" class="page">
    <div class="content col-12 col-xl-6 col-md-9">
      <div class="title pt-6 pb-6 text-center">
        <h2>Csapatunk</h2>
      </div>

      <div class="container jumbotron m-0-1-0-1 pt-1 pr-3 pl-3 pb-2">
        <div class="title text-center m-3">{{allTeams[4].title}}</div>

        <div class="d-flex flex-row members mb-3 justify-content-center flex-wrap">
          <div class="d-flex flex-column flex-wrap col-5 col-sm-4 col-md-3 p-1">
            <img
              class="rounded-circle p-0 img-fluid flex-grow-0 flex-shrink-0 d-flex"
              v-bind:src="'/members/'+allTeams[4].leader.image+'.jpg'"
            />
            <div class="text-center font-weight-bold leader">
              {{allTeams[4].leader.lastname}}
              <br />
              {{allTeams[4].leader.firstname}}
              <div class="post">{{allTeams[4].leader.post}}</div>
            </div>
          </div>

          <div
            v-for="member in allTeams[4].members"
            v-bind:key="member.id"
            class="d-flex flex-column col-4 col-sm-2 col-md-2 p-1 member pt-5"
          >
            <img class="rounded-circle p-0 img-fluid" v-bind:src="'/members/'+member.image+'.jpg'" />
            <div class="text-center">
              {{member.lastname}}
              <br />
              {{member.firstname}}
            </div>

            <div class="text-center leader post">{{member.post}}</div>
          </div>
        </div>
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
          <div class="description  pl-5 pr-5  p-3 mb-3">A gépészeti csoportban két részegység található: Anyagtechnológia és Konstrukciós tervezés & Szimuláció.</div>

          <div class="title2 title text-center m-3">{{allTeams[0].title}}</div>

          <div class="justify-content-center d-flex row align-items-center members mb-3">
              <div class="d-flex flex-column col-5 col-sm-4 col-md-3 p-1 align-items-center">
                  <img class="rounded-circle p-0 img-fluid flex-grow-0 flex-shrink-0 d-flex"
                       v-bind:src="'/members/'+allTeams[0].leader.image+'.jpg'" />
                  <div class="text-center font-weight-bold leader">
                      {{allTeams[0].leader.lastname}}
                      <br />
                      {{allTeams[0].leader.firstname}}
                  </div>
              </div>
              <div v-for="member in allTeams[0].members"
                   v-bind:key="member.id"
                   class="d-flex flex-column col-4 col-sm-2 col-md-2 p-1 align-items-center member">
                  <img class="rounded-circle p-0 img-fluid" v-bind:src="'/members/'+member.image+'.jpg'" />
                  <div class="text-center">
                      {{member.lastname}}
                      <br />
                      {{member.firstname}}
                  </div>
              </div>
          </div>
          <div class="description p-3 pr-5 pl-5 mb-3">
              <div>{{allTeams[0].description}}</div>
          </div>
          <div class="photos">
              <img v-for="photo in allTeams[0].images"
                   v-bind:src="'/workgroups/'+photo.name"
                   v-bind:key="photo.id"
                   class="col-8 p-1" />
          </div>
          <hr>
          <div class="title2 title text-center m-3">{{allTeams[3].title}}</div>

          <div class="justify-content-center d-flex row align-items-center members mb-3">
              <div class="d-flex flex-column col-5 col-sm-4 col-md-3 p-1 align-items-center">
                  <img class="rounded-circle p-0 img-fluid flex-grow-0 flex-shrink-0 d-flex"
                       v-bind:src="'/members/'+allTeams[3].leader.image+'.jpg'" />
                  <div class="text-center font-weight-bold leader">
                      {{allTeams[3].leader.lastname}}
                      <br />
                      {{allTeams[3].leader.firstname}}
                  </div>
              </div>
              <div v-for="member in allTeams[3].members"
                   v-bind:key="member.id"
                   class="d-flex flex-column col-4 col-sm-2 col-md-2 p-1 align-items-center member">
                  <img class="rounded-circle p-0 img-fluid" v-bind:src="'/members/'+member.image+'.jpg'" />
                  <div class="text-center">
                      {{member.lastname}}
                      <br />
                      {{member.firstname}}
                  </div>
              </div>
          </div>
          <div class="description  pr-5 pl-5 p-3 mb-3">
              <div>{{allTeams[3].description}}</div>
          </div>
          <div class="photos">
              <img v-for="photo in allTeams[3].images"
                   v-bind:src="'/workgroups/'+photo.name"
                   v-bind:key="photo.id"
                   class="col-8 p-1" />
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

.news {
  width: 100%;
}
.title2 {
  font-size: 1.5rem;
  font-style: italic;
}
.post.leader {
  font-size: 0.8rem;
  line-height: 1.2rem;
  font-style: italic;
}
hr {
  margin-top: 1rem;
  margin-bottom: 1rem;
  border: 0;
  border-top: 2px solid rgba(0,0,0, 0.1);
}

</style>
