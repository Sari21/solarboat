<template>
  <div id="body" class="page">
    <div class="content col-12 col-xl-6 col-md-9 mb-5">
      <div class="title pt-5 text-center">
        <h1>BME Solar Boat Team</h1>
      </div>
      <div class="description p-3">
        <p>
          Egyszer volt, hol nem volt, még hetedhét országon is túl volt, volt
          egyszer egy róka. Ez a róka egyszer egy szép holdvilágos éjjelen
          beszökött egy gazdasági udvarra valami élelmet keresni magának.
          Összevissza járta a tyúkketreceket, disznóólakat, mindenféle
          melléképületeket, de ennivalót magának nem talált. Ki akart volna már
          menni az udvarról, de meglátta az udvar közepén a kutat. Odament a
          kúthoz, felállott két lábra a kút mellé, s belenézett a kút vizébe. S
          akkor a tükrében meglátta a holdvilágot. Azt gondolta a róka, hogy az
          egy nagy sajt. Gondolkozott, hogyan mehetne ő oda be, hogy azt a
          sajtot megegye. Hamar ki is találta. Felmászott a kút tetejére, s ott
          a két vödör közül az egyikbe belelépett. A vödör nehezebb lett, mint a
          másik, s leszaladt a vízre. Mikor leérkezett a róka, észrevette magát,
          hogy az nem sajt, hanem csak a holdvilág. Akkor már bánta, hogy miért
          ment be, de onnan kijönni már nem lehetett. Gondolkozott, búsult, hogy
          mi lesz belőle! Hát egyszer egy farkas is bevergődött az udvarra, hogy
          az is keressen valami ennivalót. Az is összejárta a tyúkólakat,
          disznóólakat, jobbra-balra, erre-arra, de nem talált semmi ennivalót.
          Mikor már ki akart volna menni, ő is meglátta a kutat, s odament.
          Felállott két lábra a kút gárgyája mellé, s benézett a kútba.
        </p>
      </div>
      <div class="title p-4">
        <h2>Hírek</h2>
      </div>
      <div class="scrollable">
        <News
          class="news"
          v-for="item in allNews.slice().reverse()"
          v-bind:key="item.id"
          v-bind:item="item"
        ></News>
      </div>
    </div>
  </div>
</template>

<script>
import News from "./News.vue";
import json from "../data/news.json";

export default {
  name: "MainPageBody",
  data() {
    return {
      allNews: json
    };
  },
  components: {
    News
  }
};
</script>
<style>
.page {
  display: flex;
  flex-direction: column;
  align-items: center;
  color: white;
}
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
div.scrollable {
  height: 35rem;
  overflow: auto;
  overflow-x: hidden;
}
/*hali*/
</style>
