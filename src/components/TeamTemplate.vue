<template>
  <div>
    <div class="container jumbotron m-0-1-0-1 pt-1 pr-3 pl-3 pb-2">
      <div class="title text-center m-3">{{team.title}}</div>

      <div class="description mb-3">
        <div>{{team.description}}</div>
      </div>
      <div class="justify-content-center d-flex row align-items-center members mb-3">
        <div class="d-flex flex-column col-5 col-md-3 img-fluid p-1 align-items-center">
          <img
            class="rounded-circle p-0 img-fluid"
            v-bind:src="'/members/'+team.leader.image+'.png'"
          />
          <div class="text-center font-weight-bold leader">
            {{team.leader.lastname}}
            <br />
            {{team.leader.firstname}}
          </div>
        </div>
        <div
          v-for="member in team.members"
          v-bind:key="member.id"
          class="d-flex flex-column col-4 col-md-2 img-fluid p-1 align-items-center member"
        >
          <img class="rounded-circle p-0 img-fluid" v-bind:src="'/members/'+member.image+'.png'" />
          <div class="text-center">
            {{member.lastname}}
            <br />
            {{member.firstname}}
          </div>
        </div>
        <!--
        <div class="d-flex flex-column col-4 col-md-3 img-fluid p-1 align-items-center">
          <img
            class="rounded-circle p-0 img-fluid"
            v-bind:src="'/members/'+team.members.member0.image+'.png'"
          />
          <div class="text-center font-weight-bold leader">
            {{team.members.member0.lastname}}
            <br />
            {{team.members.member0.firstname}}
          </div>
        </div>

        <div class="d-flex flex-column col-4 col-md-2 img-fluid p-1 align-items-center member">
          <img
            class="rounded-circle p-0 img-fluid"
            v-bind:src="'/members/'+team.members.member1.image+'.png'"
          />
          <div class="text-center">
            {{team.members.member1.lastname}}
            <br />
            {{team.members.member1.firstname}}
          </div>
        </div>
        <div class="d-flex flex-column col-4 col-md-2 img-fluid p-1 align-items-center member">
          <img
            class="rounded-circle p-0 img-fluid"
            v-bind:src="'/members/'+team.members.member2.image+'.png'"
          />
          <div class="text-center">
            {{team.members.member2.lastname}}
            <br />
            {{team.members.member2.firstname}}
          </div>
        </div>
        <div class="d-flex flex-column col-4 col-md-2 img-fluid p-1 align-items-center">
          <img
            class="rounded-circle p-0 img-fluid"
            v-bind:src="'/members/'+team.members.member3.image+'.png'"
          />
          <div class="text-center">
            {{team.members.member3.lastname}}
            <br />
            {{team.members.member3.firstname}}
          </div>
        </div>
        <div class="d-flex flex-column col-4 col-md-2 img-fluid p-1 align-items-center">
          <img
            class="rounded-circle p-0 img-fluid"
            v-bind:src="'/members/'+team.members.member4.image+'.png'"
          />
          <div class="text-center">
            {{team.members.member4.lastname}}
            <br />
            {{team.members.member4.firstname}}
          </div>
        </div>-->
      </div>

      <div class="works text-center mb-3">Munkáink</div>
      <div class="photos">
        <img
          v-for="photo in team.images"
          v-bind:src="'/workgroups/'+photo.name"
          v-bind:key="photo.id"
          class="col-6 p-1"
        />
        <!-- <img class="col-6 p-1 bordered" src="../images/photo.jpg" />
        <img class="col-6 p-1" src="../images/photo.jpg" />
        <img class="col-6 p-1" src="../images/photo.jpg" />
        <img class="col-6 p-1" src="../images/photo.jpg" />-->
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: "TeamTemplate",
  data() {
    return {};
  },
  props: {
    team: Object
  },
  components: {}
};
</script>
<style>
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
  font-size: 2rem;
}
.description {
  text-align: justify;
  line-height: 120%;
}
.arrow {
  font-size: 200%;
}
#img {
  width: 100%;
  height: auto;
}
.members div {
  font-size: 1rem;
  line-height: 1.2rem;
}
div.leader {
  font-size: 1.5rem;
  line-height: 1.8rem;
}
.members img {
  border: solid white;
}
.works {
  font-size: 1.7rem;
}
</style>
