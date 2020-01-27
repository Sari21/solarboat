<template>
  <div id="footer">
    <div class="contact text-center pt-5">
      <p class="cont2 title">Elérhetőségek</p>
      <div class="cont">
        <BIconEnvelope class="mr-3"></BIconEnvelope>info@solarboatteam.hu
      </div>
      <div class="cont">
        <BIconPhone class="mr-3"></BIconPhone>+36-30-73-16-221
      </div>
    </div>
    <div class="column text-center d-flex mb-1 justify-content-center">
      <div class="col-10 col-md-12">
        <a href="https://www.bme.hu/" target="blank">
          <img src="../images/bme.png" alt="BME" class="col-6 col-sm-4 col-md-2" />
        </a>
        <a href="https://www.facebook.com/bmemvk/" target="blank">
          <img src="../images/mkv.png" alt="MKV" class="col-6 col-sm-4 col-md-2" />
        </a>
        <a href="http://solarboatteam.hu/index.php" target="blank">
          <img src="../images/solarboat.png" alt="Solar Boat" class="col-6 col-sm-4 col-md-2" />
        </a>
        <a href="https://www.facebook.com/BMEsolar/" target="blank">
          <img src="../images/facebook.png" alt="Facebook" class="col-6 col-sm-4 col-md-2" />
        </a>
        <a href="https://www.instagram.com/bme_solar_team/?hl=hu" target="blank">
          <img src="../images/insta.png" alt="BME" class="col-6 col-sm-4 col-md-2" />
        </a>
      </div>
    </div>

    <div class="text-center">
      <a href="https://schdesign.hu/">
        <img src="../images/schdesign.png" class="col-6 col-sm-4 col-md-2" />
      </a>
    </div>
  </div>
</template>

<script>
import { BIconEnvelope, BIconPhone } from "bootstrap-vue";
export default {
  name: "Footer",
  components: {
    BIconEnvelope,
    BIconPhone
  }
};
</script>
<style>
#footer {
  width: 100%;
  color: white;
}
.contact {
  justify-content: center;
  align-items: center;
  display: flex;
  flex-direction: column;
}

.cont {
  display: flex;
  align-items: center;
}
.cont2 {
  font-size: 2rem;
  display: flex;
  align-items: center;
}
.image {
  flex-shrink: 4;
}
/*.designer img {
  display: flex;
  width: 300px;
}
.designer {
  justify-content: center;
  display: flex;
}
*/
</style>
