<template>
  <div>
    <div class="title text-center m-3">{{team.title}}</div>

    <div class="justify-content-center d-flex row align-items-center members mb-3">
      <div class="d-flex flex-column col-5 col-sm-4 col-md-3 p-1 align-items-center">
        <img
          class="rounded-circle p-0 img-fluid flex-grow-0 flex-shrink-0 d-flex"
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
      <div>{{team.description}}</div>
    </div>
    <div class="photos">
      <img
        v-for="photo in team.images"
        v-bind:src="'/workgroups/'+photo.name"
        v-bind:key="photo.id"
        class="col-8 p-1"
      />
    </div>
  </div>
</template>
<script>
export default {
  name: "TeamTemplate",
  data() {
    return {};
  },
  props: ["team"],
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
  height: auto;
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
