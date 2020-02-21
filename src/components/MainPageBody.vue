<template>
  <div id="body" class="page">
    <div class="content col-12 col-xl-10 col-md-10 mb-5">
      <div class="title text-center">
        <h1>BME Solar Boat Team</h1>
      </div>
      <div class="d-flex row justify-content-center">
        <div class="col-12 col-md-7">
          <div class="jumbotron col-12 container p-3 m-0">
            <div class="subtitle text-center">Rólunk</div>
            <p
              class="description p-3 "
            >2014-ben a Gépészmérnöki Kar három gépészmérnök hallgatója alapította BME Solar Boat Team csapatot, mely azzal a céllal jött létre, hogy egy kizárólag napenergiával működő, ember által vezetett, teljesen elektromos hajtású versenyhajót tervezzen és építsen, és ezzel a járművel 2016-ban a Hollandiában és Monte-Carlóban megrendezésre kerülő Dutch Solar Challenge Világbajnokság és Solar 1 Races megmérettetésein sikerrel szálljon versenybe.</p>
            <img src="/aboutus/aboutus1.jpg" class="col-10 m-4 p-0" />
            <p
              class="description pr-3 pl-3 pb-2"
            >A projekthez csatlakoztak továbbá a Gépészmérnöki Karról mechatronikai mérnök és gépészmérnök hallgatók, akik az elektronikai rendszerek szoftveres támogatásán, a hajótest gyártástechnológiáján, a CFD szimulációkon, valamint a kormányzási és hajtásrendszeren dolgoztak.</p>
            <p
              class="description pr-3 pl-3 pb-2 "
            >A Közlekedésmérnöki és Járműmérnöki Karról további négy hallgató érkezett, akik a tervezésben és megvalósításban segédkeztek; a közlekedésmérnökök feladata a hajótest és a hydrofoil tervezése volt, valamint megfelelő szállítókocsi tervezése a jármű közúti mozgatásához.</p>
            <p
              class="description pr-3 pl-3 pb-2 "
            >A Villamosmérnöki és Informatikai Karról is érkeztek hallgatók, akik a hajó elektronikai rendszerének összeállításán: az akkumulátor és napelem rendszer, a teljesítményelektronikai berendezések, valamint a villamos hajtás tervezésében játszottak kulcsszerepet.</p>
            <p
              class="description pr-3 pl-3 pb-2 "
            >A későbbiekben, ahogy a csapat egyre jobban kinőtte magát, a Gazdaság- és Társadalomtudományi Karról is érkeztek hallgatók, akik a marketing és gazdasági ügyek lebonyolításával foglalkoztak.</p>
            <p
              class="description pr-3 pl-3 pb-2 "
            >A jelen tervezési és építési feladatai mellett a jövőre is figyelmet fordítunk - versenycsapatunkat hosszú távú céllal hoztuk létre; reményeink szerint kezdeményezésünkkel egy olyan tudásbázis és infrastruktúra jön létre, melyre építve éveken keresztül működik majd a csapat, a mérnökhallgatók újabb és újabb generációját bevonva az elektromos járműépítés világába.</p>
            <img src="/aboutus/aboutus2.jpg" class="col-10 m-4 p-0" />
          </div>
        </div>

        <div class="allnews col-11 col-md-4">
          <div class="scrollable news-bg p-2">
            <div class="subtitle text-center">Hírek</div>
            <News
              class="news"
              v-for="item in allNews.slice().reverse()"
              v-bind:key="item.id"
              v-bind:item="item"
            ></News>
          </div>
        </div>
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
.news.jumbotron {
  background-color: rgb(27, 121, 150, 0.6);
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
  height: auto !important; 
  max-height: 180vh; 
  overflow: auto; 
  overflow-x: hidden; 
} 
.news-bg { 
  background-color: rgb(255, 255, 255, 0.2); 
  border-radius: 0.3rem; 
} 
p{
    margin-right: 5%;
     margin-left: 5%;
}
 
@media only screen and (max-width: 768px) { 
    div.scrollable { 
      margin-top: 10%; 
      background-color: rgb(0,0,0, 0); 
      height: 90vh !important; 
      border: 2px solid rgb(27, 121, 150, 0.6); 
    } 
} 


/*hali*/
</style>
