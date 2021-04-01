<template>
  <div class="about">
    <NavHeader />
    <div class="image-aboutus-banner">
      <div class="container">
        <div class="row">
          <div class="col-md-12">
            <h1 class="lg-text">About Us</h1>

          </div>
        </div>
      </div>
    </div>
    <div class="aboutus-secktion paddingTB60">
      <div class="container">
        <div class="row">
          <div class="col-md-6">
            <h1 class="strong">Who we are and<br>what we do</h1>
          </div>
          <div class="col-md-6">
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla convallis egestas rhoncus. Donec facilisis fermentum sem, ac viverra ante luctus vel. Donec vel mauris quam.</p>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla convallis egestas rhoncus. Donec facilisis fermentum sem, ac viverra ante luctus vel. Donec vel mauris quam. Lorem ipsum dolor sit amet. Nulla convallis egestas rhoncus.</p>
          </div>
        </div>
      </div>
    </div>

    <div class="container team-sektion paddingTB60">
      <div class="row">
        <div class="site-heading text-center">
          <h3>Our Team</h3>
          <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt <br> ut labore et dolore magna aliqua. Ut enim ad minim </p>
          <div class="border"></div>
        </div>
      </div>
      <div class="row">
        <div class="col-md-4 ">
          <div class="team-img thumbnail">
            <div class="team-content">
              <h3>Yanko Buyens</h3>
              <div class="border-team"></div>
              <p> Yanko is one of our back-end developpers, his team is in charge of maintaining our database.</p>
              <div class="social-icons">
                <a href="https://www.facebook.com/"><i id="social-fb" class="fa fa-facebook-square fa-3x social"></i></a>
                <a href="https://twitter.com/"><i id="social-tw" class="fa fa-twitter-square fa-3x social"></i></a>
                <a href="https://plus.google.com/"><i id="social-gp" class="fa fa-google-plus-square fa-3x social"></i></a>
                <a href="mailto:bootsnipp@gmail.com"><i id="social-em" class="fa fa-envelope-square fa-3x social"></i></a>
              </div>
            </div>
          </div>
        </div>
        <div class="col-md-4">
          <div class="team-img thumbnail">
            <div class="team-content">
              <h3>Jaison Wullaert</h3>
              <div class="border-team"></div>
              <p> Jaison is our technical officer and also one of our back-end developpers. He also helped with linking the back-end to the front end.</p>
              <div class="social-icons">
                <a href="https://www.facebook.com/"><i id="social-fb" class="fa fa-facebook-square fa-3x social"></i></a>
                <a href="https://twitter.com/"><i id="social-tw" class="fa fa-twitter-square fa-3x social"></i></a>
                <a href="https://plus.google.com/"><i id="social-gp" class="fa fa-google-plus-square fa-3x social"></i></a>
                <a href="mailto:bootsnipp@gmail.com"><i id="social-em" class="fa fa-envelope-square fa-3x social"></i></a>
              </div>
            </div>
          </div>
        </div>
        <div class="col-md-4 ">
          <div class="team-img thumbnail">
            <div class="team-content">
              <h3>Gerben Piot</h3>
              <div class="border-team"></div>
              <p>Gerben was our quality insurance. He was the one to spot all our little mistakes.</p>
              <div class="social-icons">
                <a href="https://www.facebook.com/"><i id="social-fb" class="fa fa-facebook-square fa-3x social"></i></a>
                <a href="https://twitter.com/"><i id="social-tw" class="fa fa-twitter-square fa-3x social"></i></a>
                <a href="https://plus.google.com/"><i id="social-gp" class="fa fa-google-plus-square fa-3x social"></i></a>
                <a href="mailto:bootsnipp@gmail.com"><i id="social-em" class="fa fa-envelope-square fa-3x social"></i></a>
              </div>
            </div>
          </div>
        </div>
        <div class="col-md-4 team-box">
          <div class="team-img thumbnail">
            <div class="team-content">
              <h3>Brick van Roekel</h3>
              <div class="border-team"></div>
              <p>Brick was one of the front-end developpers of our website. This team was in charge of the lay-out of our pages.</p>
              <div class="social-icons">
                <a href="https://www.facebook.com/"><i id="social-fb" class="fa fa-facebook-square fa-3x social"></i></a>
                <a href="https://twitter.com/"><i id="social-tw" class="fa fa-twitter-square fa-3x social"></i></a>
                <a href="https://plus.google.com/"><i id="social-gp" class="fa fa-google-plus-square fa-3x social"></i></a>
                <a href="mailto:bootsnipp@gmail.com"><i id="social-em" class="fa fa-envelope-square fa-3x social"></i></a>
              </div>
            </div>
          </div>
        </div>
        <div class="col-md-4 team-box">
          <div class="team-img thumbnail">
            <div class="team-content">
              <h3>Raghav Thapar</h3>
              <div class="border-team"></div>
              <p>Raghav was our project manager and he was on the front-end team. He pitched our project and created our landing page.</p>
              <div class="social-icons">
                <a href="https://www.facebook.com/"><i id="social-fb" class="fa fa-facebook-square fa-3x social"></i></a>
                <a href="https://twitter.com/"><i id="social-tw" class="fa fa-twitter-square fa-3x social"></i></a>
                <a href="https://plus.google.com/"><i id="social-gp" class="fa fa-google-plus-square fa-3x social"></i></a>
                <a href="mailto:bootsnipp@gmail.com"><i id="social-em" class="fa fa-envelope-square fa-3x social"></i></a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <Footer />
  </div>
</template>

<script>
import NavHeader from "@/NavHeader.vue"
import Footer from "@/Footer.vue";
export default {
  components: {
    NavHeader,
    Footer
  }
}
</script>

<style scoped>
/* CTA CSS */
.cta-padding35 {
  padding: 35px 0 35px;
  background-color: #b40028;
  color: #fff;
}

/* Buttons */
.site-btn {
  font-size: 14px;
  padding: 13px 30px;
  border-radius: 5px;
  border: 1px solid #b40028;
  min-width: 200px;
  display: inline-block;
  text-align: center;
  position: relative;
  z-index: 1;
  color: #b40028;
  background-color: transparent;
  transition: all .25s ease-in-out;
  margin: 10px 0px 10px 0px;

}

.copyright-text p {
  color: #707070;
  margin-top: 18px;
  margin-bottom: 0;
  font-size: 12px;
}

.team-box {
  margin: auto;
  margin-top: 2%
}

.team-content {
  padding: 0px 15px 15px 15px;
}

.border-team {
  border-bottom: 1px solid #e2e2e2;
  margin-bottom: 10px;
}

.team-img:hover {
  background: #f5f5f5;

}

/* Social Icons */
.social-icons {

  margin: 0;
  padding: 0;
  font-size: 10px;
}

.social {
  margin: 7px 7px 7px 0px;
  color: #232323;
}


#social-fb:hover {
  color: #3B5998;
  transition: all .25s;
}

#social-tw:hover {
  color: #4099FF;
  transition: all .25s;
}

#social-gp:hover {
  color: #d34836;
  transition: all .25s;
}

#social-em:hover {
  color: #f39c12;
  transition: all .25s;
}


/* Site Heading */
.site-heading h3 {
  font-size: 40px;
  margin-bottom: 15px;
  font-weight: 600;
}

.text-center {
  margin: auto;
}

.border {
  background: #e1e1e1;
  height: 1px;
  width: 25%;
  margin-left: auto;
  margin-right: auto;
  margin-bottom: 45px;
}

.paddingTB60 {
  padding-bottom: 60px;
}

.image-aboutus-banner {
  background: linear-gradient(rgba(0, 0, 0, .7), rgba(0, 0, 0, .7)), url("../assets/banner.jpg");
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center center;
  color: #fff;
  padding-top: 150px;
  padding-bottom: 150px;
  margin-bottom: 60px;
}


.lg-text {
  font-size: 52px;
  font-weight: 600;
  text-transform: none;
  color: #fff;
}

.image-aboutus-para {
  color: #fff;
}


/* font CSS */
body {
  font-family: 'Roboto';
  line-height: 24px;
  letter-spacing: 0.5px;
  font-weight: 400;
  font-style: normal;
  color: #494949;
  font-size: 16px;
}

a:hover {
  color: #465cff;
}

h1 {
  font-size: 35px;
  line-height: 40px;
  letter-spacing: 0px;
  font-weight: 600;
  color: #000;
}

h2 {
  font-size: 30px;
  line-height: 40px;
  letter-spacing: 0px;
  font-weight: 600;
  color: #000;
}

h3 {
  line-height: 26px;
  font-size: 20px;
  letter-spacing: 0px;
  font-weight: 600;
  font-style: normal;
  color: #000;
}

h4 {
  font-size: 19px;
  letter-spacing: 0px;
  font-weight: 600;
  font-style: normal;
  color: #000;
}

p {
  font-weight: 400;
  font-style: normal;
  color: #494949;
}


a {
  color: #494949;
}

.capital {
  text-transform: uppercase;
}


i {
  font-style: normal;
  font-size: 42px;
  text-align: center;
  line-height: 64px;
}

</style>
