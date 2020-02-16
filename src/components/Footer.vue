<template>
    <div id="footer">
        <div class="contact text-center pt-5">
            <h2 class="cont2 pt-5">Elérhetőségek</h2>
            <div class="col-12 col-md-12">
                <v-icon v-b-tooltip.hover title="info@solarboatteam.hu">
                    <i title="info@solarboatteam.hu" class="fas fa-envelope fa-3x col-3 col-sm-2 col-md-1"></i>
                </v-icon>
                <v-icon v-b-tooltip.hover title="+36-30-73-16-221">
                    <i title="+36-30-73-16-221" class="fas fa-mobile fa-3x col-3 col-sm-2 col-md-1"></i>
                </v-icon>
                <a href="https://www.instagram.com/bme_solar_team/?hl=hu" target="blank">
                    <i title="instagram" class="fab fa-instagram fa-3x col-3 col-sm-2 col-md-1"></i>
                </a>
                <a href="https://www.facebook.com/BMEsolar/" target="blank">
                    <i title="facebook" class="fab fa-facebook-square fa-3x col-3 col-sm-2 col-md-1"></i>
                </a>
            </div>
        </div>
        <div class="column text-center d-flex mb-1 justify-content-center">
            <div class="col-12 col-md-12 links">
                <a href="https://www.bme.hu/" target="blank">
                    <img src="../images/bme-white.png" alt="BME" title="BME" class="col-4 col-sm-3 col-md-2" />
                </a>
                <a href="http://solarboatteam.hu/index.php" target="blank" class="boat">
                    <img src="../images/solarboat-white.png" alt="Solar Boat" title="Solar Boat" class="col-3 col-sm-2 col-md-1" />
                </a>
                <a href="https://www.facebook.com/bmemvk/" target="blank">
                    <img src="../images/mkv-white.png" alt="MKV" title="Műegyetemi Versenycsapat Közösség" class="col-4 col-sm-3 col-md-2" />
                </a>
            </div>
        </div>

        <div class="text-center pb-3 pt-5 schdesign">
            <a href="https://schdesign.hu/">
                <img src="../images/schdesign-white.png" title="designed by SchDesign" class="col-4 col-sm-4 col-md-2 schdesign-logo" />
            </a>
        </div>
    </div>
</template>

<script>

    export default {
        name: "Footer",
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

        .icon {
            font-size: 2rem;
        }

        .cont {
            display: flex;
            align-items: center;
            font-size: 1rem;
        }

        h2.cont2 {
            font-size: 3rem;
            text-shadow: 2px 2px 5px black;
            display: flex;
            align-items: center;
        }

        i.fas {
            padding: 2%;
        }

            a:hover img, i.fas:hover {
                opacity: 0.7;
                cursor: pointer;
            }

        a, a:hover {
            color: white;
        }

            a:hover {
                opacity: 0.7;
            }

        .links {
            padding-top: 2%;
        }

        @media only screen and (max-width: 768px) {
            i.fab, i.fas {
                padding: 5%;
            }
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
