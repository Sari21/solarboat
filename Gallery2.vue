<template>
  <div id="body" class="page">
    <div class="text-center col-10">
      <div class="text-center p-3">
        <h2>Galéria</h2>
      </div>
      <div class="d-flex flex-row align-items-center">
        <!-- The four columns -->
        <div class="d-flex flex-column col-4 column scrollable">
          <img
            v-for="photo in images"
            :src="photo.image"
            :alt="photo.alt"
            v-bind:key="photo.id"
            v-on:click="myFunction"
            class="p-1"
          />
        </div>

        <div class="gcontainer d-flex justify-content-center">
          <img id="expandedImg" class="col-8 expimg" />
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import json from "../data/gallery.json";
export default {
  name: "Gallery2",
  methods: {
    myFunction: function(imgs) {
      var expandImg = document.getElementById("expandedImg");
      expandImg.src = imgs.target.src;
      expandImg.parentElement.style.display = "block";
    }
  },
  props: {},
  data() {
    return {
      images: json
    };
  }
};
</script>

<style>
/* The grid: Four equal columns that floats next to each other */

/* Style the images inside the grid */
.column img {
  opacity: 0.8;
  cursor: pointer;
  width: 100%;
}

.column img:hover {
  opacity: 1;
}

/* Clear floats after the columns */

/* The expanding image container */
.gcontainer {
  position: relative;
  display: none;
}

/* Expanding image text */

div.scrollable {
  height: 90vh;
  overflow: auto;
  overflow-x: hidden;
}
.expimg {
  max-height: 90vh;
  max-width: inherit;
}
.page {
  display: flex;
  flex-direction: column;
  align-items: center;
  color: white;
}
</style>