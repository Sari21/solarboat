<template>
  <div id="body" class="page">
    <div class="content col-md-6 p-3">
      <div class="title p-4 md-pt-5">
        <h1>Csapatunk</h1>
      </div>
      <div class="description md-p-3">
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
          Mikor már ki akart volna menni.
        </p>
      </div>
      <TeamTemplate v-for="team in allTeam" v-bind:key="team.id" v-bind:team="team"></TeamTemplate>
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
      allTeam: json
    };
  },
  components: {
    TeamTemplate
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
</style>
