<template>
  <div id="header">
    <nav class="navbar navbar-expand-lg my-navbar navbar-dark">
      <router-link to="/">
        <img
          class="img-responsive ml-5 mr-4"
          alt="SBT"
          src="../images/solar logo.png"
          style="width: 150px;"
          @click="mainPage"
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
      </router-link>

      <div class="collapse navbar-collapse" id="navbarSupportedContent">
        <ul class="navbar-nav mr-auto">
          <li class="nav-item">
            <router-link to="/">
              <a class="nav-link pl-5">Rólunk</a>
            </router-link>
          </li>
          <li class="nav-item">
            <router-link to="/team">
              <a class="nav-link pl-5" @click="team">Csapatunk</a>
            </router-link>
          </li>
          <li class="nav-item">
            <router-link to="/sponsors">
              <a class="nav-link pl-5" @click="sponsors">Szponzoraink</a>
            </router-link>
          </li>
          <li class="nav-item">
            <router-link to="/gallery">
              <a class="nav-link pl-5" @click="gallery">Galéria</a>
            </router-link>
          </li>
          <li class="nav-item">
            <router-link to="/achievements">
              <a class="nav-link pl-5" @click="achievements">Eredményeink</a>
            </router-link>
          </li>
        </ul>
      </div>
    </nav>
  </div>
</template>

<script>
export default {
  name: "Header",
  data() {
    return {};
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
  background: #acdbe2;
}

.nav-item {
  color: rgb(6, 87, 194);
  font-size: 1.3rem;
  font-variant: small-caps;
  font-weight: bold;
  text-shadow: 2px 2px 5px grey;
}
.nav-item:hover {
  color: rgb(5, 70, 155);
}
.router-link-active a.nav-link {
  color: white;
}
a:hover {
  text-decoration: none;
}
nav > img {
  cursor: pointer;
}
</style>
