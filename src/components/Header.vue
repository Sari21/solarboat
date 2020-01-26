<template>
  <div id="header">
    <nav class="navbar navbar-expand-lg navbar-light my-navbar">
      <img
        class="img-responsive ml-5 mr-5"
        alt="SBT"
        src="../images/solar logo.png"
        style="width: 150px;"
      />
      <button
        class="navbar-toggler"
        type="button"
        data-toggle="collapse"
        data-target="#navbarSupportedContent"
        aria-controls="navbarSupportedContent"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span class="navbar-toggler-icon"></span>
      </button>

      <div class="collapse navbar-collapse" id="navbarSupportedContent">
        <ul class="navbar-nav mr-auto">
          <li class="nav-item active">
            <a class="nav-link ml-4 mr-4" @click="mainPage">Főoldal</a>
          </li>
          <li class="nav-item ml-4 mr-4">
            <a class="nav-link" @click="team">Csapatunk</a>
          </li>
          <li class="nav-item ml-4 mr-4">
            <a class="nav-link" @click="sponsors">Szponzoraink</a>
          </li>
          <li class="nav-item ml-4 mr-4">
            <a class="nav-link" @click="gallery">Galéria</a>
          </li>
        </ul>
      </div>
    </nav>
  </div>
</template>

<script>
export default {
  name: "Header",
  methods: {
    mainPage() {
      this.$router.push("/");
    },
    sponsors() {
      this.$router.push("/sponsors");
    },
    team() {
      this.$router.push("/team");
    },
    gallery() {
      this.$router.push("/gallery");
    }
  },
  async mounted() {
    try {
      this.currentRoute = this.$route.name;
    } catch (e) {
      alert("hiba");
    }
  }
};
</script>
<style scoped>
a {
  cursor: pointer;
}
.my-navbar {
  background: rgb(134, 191, 226);
}
.nav-item {
  font-size: 1.5rem;
}
</style>
