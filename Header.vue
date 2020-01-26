<template>
  <div id="header">
    <nav class="navbar navbar-expand-lg navbar-light bg-light">
      <img
        class="img-responsive"
        alt="SBT"
        src="../images/solar logo.png"
        style="width: 100px;"
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
            <a class="nav-link" @click="mainPage">
              Főoldal
              <span class="sr-only">(current)</span>
            </a>
          </li>
          <li class="nav-item">
            <a class="nav-link" @click="team">Csapatunk</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" @click="sponsors">Szponzorok</a>
          </li>
          <li class="nav-item">
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
</style>
