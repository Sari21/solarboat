<template>
  <div id="body" class="page">
    <div class="content col-sm-12 col-lg-6 col-md-9 mb-5">
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
          Felállott két lábra a kút gárgyája mellé, s benézett a kútba. Látja,
          hogy a vödörben ott van egy róka s mellette egy nagy sajt. Azt mondja:
          - Ejnye, te róka koma, de jól van neked dolgod ott! Nem adnál nekem is
          abból a sajtból egy kicsit? - Dehogynem, farkas koma, adok biza -
          válaszolt gyorsan a róka. - Na de hogy lehet oda bemenni? Azt mondja a
          róka: - Másszál csak fel a fedelire e kútnak, és ülj bele abba az üres
          vödörbe, s az téged szépen behoz ide. - Mert a róka tudta, hogy a
          farkas nehezebb, mint ő, s mikor az bemegy, ő kijön. Be is ült a
          farkas a vödörbe, és indult lefele, a róka meg kifele. Egymás mellett
          jöttek el, hát jó étvágyat kívánt a farkasnak a róka, s mikor
          kiérkezett, kiszökött a vödörből, s elfutott. A farkas látta, hogy be
          van csapódva, mert nem sajt, csak a holdvilág, de nem volt mit tenni.
          Ott kellett üljön reggelig, amíg megvirradt, s a gazda ment, hogy
          húzzon a marháknak vizet. Hát látja, hogy a vödörben egy farkas.
          Összekiabálta a szomszédokat, s azok jó kézbeliekkel odakerekedtek,
          kihúzták a vödröt, a farkast agyonverték, s a bőrét eladták jó
          pénzért. Így volt, vége volt, mese volt! szerk. Kovács Ágnes
          Icinke-picinke - Móra Ferenc Könyvkiadó Budapest - 1972
        </p>
      </div>
      <div class="title p-4">
        <h2>Hírek</h2>
        <h2>{{allNews[0].title}}</h2>
      </div>
      <div class="scrollable">
        <News class="news" v-for="item in allNews" v-bind:key="item.id" v-bind:item="item"></News>
      </div>
    </div>
  </div>
</template>

<script>
import News from "./News.vue";
//import json from "../data/news.json";

export default {
  name: "MainPageBody",
  data() {
    return {
      allNews: [
        {
          id: 0,
          title: "Szia Kecsó, jó a Solar Boat?",
          shortDescription: "Leírás",
          description:
            "Egyszer volt, hol nem volt, még hetedhét országon is túl volt, volt egyszer egy róka. Ez a róka egyszer egy szép holdvilágos éjjelen beszökött egy gazdasági udvarra valami élelmet keresni magának. Összevissza járta a tyúkketreceket, disznóólakat, mindenféle melléképületeket, de ennivalót magának nem talált. Ki akart volna már menni az udvarról, de meglátta az udvar közepén a kutat. Odament a kúthoz, felállott két lábra a kút mellé, s belenézett a kút vizébe. S akkor a tükrében meglátta a holdvilágot. Azt gondolta a róka, hogy az egy nagy sajt. Gondolkozott, hogyan mehetne ő oda be, hogy azt a sajtot megegye. Hamar ki is találta. Felmászott a kút tetejére, s ott a két vödör közül az egyikbe belelépett. A vödör nehezebb lett, mint a másik, s leszaladt a vízre. Mikor leérkezett a róka, észrevette magát, hogy az nem sajt, hanem csak a holdvilág. Akkor már bánta, hogy miért ment be, de onnan kijönni már nem lehetett. Gondolkozott, búsult, hogy mi lesz belőle! Hát egyszer egy farkas is bevergődött az udvarra, hogy az is keressen valami ennivalót. Az is összejárta a tyúkólakat, disznóólakat, jobbra-balra, erre-arra, de nem talált semmi ennivalót. Mikor már ki akart volna menni, ő is meglátta a kutat, s odament. Felállott két lábra a kút gárgyája mellé, s benézett a kútba. Látja, hogy a vödörben ott van egy róka s mellette egy nagy sajt. Azt mondja: - Ejnye, te róka koma, de jól van neked dolgod ott! Nem adnál nekem is abból a sajtból egy kicsit? - Dehogynem, farkas koma, adok biza - válaszolt gyorsan a róka. - Na de hogy lehet oda bemenni? Azt mondja a róka: - Másszál csak fel a fedelire e kútnak, és ülj bele abba az üres vödörbe, s az téged szépen behoz ide. - Mert a róka tudta, hogy a farkas nehezebb, mint ő, s mikor az bemegy, ő kijön. Be is ült a farkas a vödörbe, és indult lefele, a róka meg kifele. Egymás mellett jöttek el, hát jó étvágyat kívánt a farkasnak a róka, s mikor kiérkezett, kiszökött a vödörből, s elfutott. A farkas látta, hogy be van csapódva, mert nem sajt, csak a holdvilág, de nem volt mit tenni. Ott kellett üljön reggelig, amíg megvirradt, s a gazda ment, hogy húzzon a marháknak vizet. Hát látja, hogy a vödörben egy farkas. Összekiabálta a szomszédokat, s azok jó kézbeliekkel odakerekedtek, kihúzták a vödröt, a farkast agyonverték, s a bőrét eladták jó pénzért. Így volt, vége volt, mese volt! szerk. Kovács Ágnes Icinke-picinke - Móra Ferenc Könyvkiadó Budapest - 1972 ",
          date: "2020-01-14",
          image: "cat.jpg"
        },
        {
          id: 1,
          title: "Cím2",
          shortDescription: "Leírás dxdfgzjuhiopkőáikjzgf",
          description:
            "Egyszer volt, hol nem volt, még hetedhét országon is túl volt, volt egyszer egy róka. Ez a róka egyszer egy szép holdvilágos éjjelen beszökött egy gazdasági udvarra valami élelmet keresni magának. Összevissza járta a tyúkketreceket, disznóólakat, mindenféle melléképületeket, de ennivalót magának nem talált. Ki akart volna már menni az udvarról, de meglátta az udvar közepén a kutat. Odament a kúthoz, felállott két lábra a kút mellé, s belenézett a kút vizébe. S akkor a tükrében meglátta a holdvilágot. Azt gondolta a róka, hogy az egy nagy sajt. Gondolkozott, hogyan mehetne ő oda be, hogy azt a sajtot megegye. Hamar ki is találta. Felmászott a kút tetejére, s ott a két vödör közül az egyikbe belelépett. A vödör nehezebb lett, mint a másik, s leszaladt a vízre. Mikor leérkezett a róka, észrevette magát, hogy az nem sajt, hanem csak a holdvilág. Akkor már bánta, hogy miért ment be, de onnan kijönni már nem lehetett. Gondolkozott, búsult, hogy mi lesz belőle! Hát egyszer egy farkas is bevergődött az udvarra, hogy az is keressen valami ennivalót. Az is összejárta a tyúkólakat, disznóólakat, jobbra-balra, erre-arra, de nem talált semmi ennivalót. Mikor már ki akart volna menni, ő is meglátta a kutat, s odament. Felállott két lábra a kút gárgyája mellé, s benézett a kútba. Látja, hogy a vödörben ott van egy róka s mellette egy nagy sajt. Azt mondja: - Ejnye, te róka koma, de jól van neked dolgod ott! Nem adnál nekem is abból a sajtból egy kicsit? - Dehogynem, farkas koma, adok biza - válaszolt gyorsan a róka. - Na de hogy lehet oda bemenni? Azt mondja a róka: - Másszál csak fel a fedelire e kútnak, és ülj bele abba az üres vödörbe, s az téged szépen behoz ide. - Mert a róka tudta, hogy a farkas nehezebb, mint ő, s mikor az bemegy, ő kijön. Be is ült a farkas a vödörbe, és indult lefele, a róka meg kifele. Egymás mellett jöttek el, hát jó étvágyat kívánt a farkasnak a róka, s mikor kiérkezett, kiszökött a vödörből, s elfutott. A farkas látta, hogy be van csapódva, mert nem sajt, csak a holdvilág, de nem volt mit tenni. Ott kellett üljön reggelig, amíg megvirradt, s a gazda ment, hogy húzzon a marháknak vizet. Hát látja, hogy a vödörben egy farkas. Összekiabálta a szomszédokat, s azok jó kézbeliekkel odakerekedtek, kihúzták a vödröt, a farkast agyonverték, s a bőrét eladták jó pénzért. Így volt, vége volt, mese volt! szerk. Kovács Ágnes Icinke-picinke - Móra Ferenc Könyvkiadó Budapest - 1972 Egyszer volt, hol nem volt, még hetedhét országon is túl volt, volt egyszer egy róka. Ez a róka egyszer egy szép holdvilágos éjjelen beszökött egy gazdasági udvarra valami élelmet keresni magának. Összevissza járta a tyúkketreceket, disznóólakat, mindenféle melléképületeket, de ennivalót magának nem talált. Ki akart volna már menni az udvarról, de meglátta az udvar közepén a kutat. Odament a kúthoz, felállott két lábra a kút mellé, s belenézett a kút vizébe. S akkor a tükrében meglátta a holdvilágot. Azt gondolta a róka, hogy az egy nagy sajt. Gondolkozott, hogyan mehetne ő oda be, hogy azt a sajtot megegye. Hamar ki is találta. Felmászott a kút tetejére, s ott a két vödör közül az egyikbe belelépett. A vödör nehezebb lett, mint a másik, s leszaladt a vízre. Mikor leérkezett a róka, észrevette magát, hogy az nem sajt, hanem csak a holdvilág. Akkor már bánta, hogy miért ment be, de onnan kijönni már nem lehetett. Gondolkozott, búsult, hogy mi lesz belőle! Hát egyszer egy farkas is bevergődött az udvarra, hogy az is keressen valami ennivalót. Az is összejárta a tyúkólakat, disznóólakat, jobbra-balra, erre-arra, de nem talált semmi ennivalót. Mikor már ki akart volna menni, ő is meglátta a kutat, s odament. Felállott két lábra a kút gárgyája mellé, s benézett a kútba. Látja, hogy a vödörben ott van egy róka s mellette egy nagy sajt. Azt mondja: - Ejnye, te róka koma, de jól van neked dolgod ott! Nem adnál nekem is abból a sajtból egy kicsit? - Dehogynem, farkas koma, adok biza - válaszolt gyorsan a róka. - Na de hogy lehet oda bemenni? Azt mondja a róka: - Másszál csak fel a fedelire e kútnak, és ülj bele abba az üres vödörbe, s az téged szépen behoz ide. - Mert a róka tudta, hogy a farkas nehezebb, mint ő, s mikor az bemegy, ő kijön. Be is ült a farkas a vödörbe, és indult lefele, a róka meg kifele. Egymás mellett jöttek el, hát jó étvágyat kívánt a farkasnak a róka, s mikor kiérkezett, kiszökött a vödörből, s elfutott. A farkas látta, hogy be van csapódva, mert nem sajt, csak a holdvilág, de nem volt mit tenni. Ott kellett üljön reggelig, amíg megvirradt, s a gazda ment, hogy húzzon a marháknak vizet. Hát látja, hogy a vödörben egy farkas. Összekiabálta a szomszédokat, s azok jó kézbeliekkel odakerekedtek, kihúzták a vödröt, a farkast agyonverték, s a bőrét eladták jó pénzért. Így volt, vége volt, mese volt! szerk. Kovács Ágnes Icinke-picinke - Móra Ferenc Könyvkiadó Budapest - 1972 ",
          date: "2020-01-14",
          image: "cat.jpg"
        }
      ]
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
  height: 30rem;
  overflow: auto;
  overflow-x: hidden;
}
</style>
