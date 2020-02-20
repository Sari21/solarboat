<template>
  <div>
    <div class="jumbotron container  mb-4">
      <div class="title text-center">{{item.title}}</div>
      <div class="description text-center p-3">{{item.description}}</div>
      <img v-bind:src="'/achievements/'+item.image" class="col-10 m-2 p-0" />
    </div>
  </div>
</template>

<script>
export default {
  name: "Achievement",

  props: ["item"]
};
</script>
