<template>
  <main class="container">
    <div>
      <div id="landing-header">
        <h1 class="mb-3">Campeone Travels</h1>
        <div class="button">
          <router-link to="/products" tag="li" class="nav-item" active-class="active">
            <a @click="onPacketsClicked" style="color: whitesmoke" class="nav-link">Get started</a>
          </router-link>
          <router-link to="/about" tag="li" class="nav-item" active-class="active">
            <a @click="onAboutClicked" style="color: whitesmoke" class="nav-link">About us</a>
          </router-link>
        </div>
      </div>

      <ul class="slideshow">
        <li></li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
      </ul>
    </div>

  </main>
</template>

<script>
export default {
  components: { },
  name: 'Index',
  methods: {
    onPacketsClicked(){
      console.log("Index.vue: " + this.$store.state.endpoints.products);
      window.location = this.$store.state.endpoints.products;

    },
    onAboutClicked(){
      window.location = this.$store.state.endpoints.about;
    }
  }
}
</script>
<style>
body {
  background-color: black;
  font-family: 'Crimson Text', serif;
}

h1 {
  font-size: 6em;
  text-transform: uppercase;
}

#landing-header {
  z-index: 1;
  position: relative;
  text-align: center;
  padding-top: 40vh;
}

#landing-header h1 {
  color: white;
}


.slideshow {
  position: fixed;
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
  z-index: 0;
  list-style: none;
  margin: 0;
  padding: 0;
}

.slideshow li {
  width: 100%;
  height: 100%;
  position: absolute;
  top: 0;
  left: 0;
  background-size: cover;
  background-position: 50% 50%;
  background-repeat: no-repeat;
  opacity: 0;
  z-index: 0;
  animation: imageAnimation 50s linear infinite;
}

.slideshow li:nth-child(1) {
  background-image: url("https://images.unsplash.com/photo-1579980254906-394c8d7fcffa?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80")
}

.slideshow li:nth-child(2) {
  background-image: url("https://images.unsplash.com/photo-1460627390041-532a28402358?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80");
  animation-delay: 10s;
}

.slideshow li:nth-child(3) {
  background-image: url("https://images.unsplash.com/photo-1521170846124-1cc55eeba816?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1949&q=80");
  animation-delay: 20s;
}

.slideshow li:nth-child(4) {
  background-image: url("https://images.unsplash.com/photo-1501868984184-76121ed6a6e2?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80");
  animation-delay: 30s;
}

.slideshow li:nth-child(5) {
  background-image: url("https://images.pexels.com/photos/3972269/pexels-photo-3972269.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940");
  animation-delay: 40s;
}

@keyframes imageAnimation {
  0% {
    opacity: 0;
    animation-timing-function: ease-in;
  }

  10% {
    opacity: 1;
    animation-timing-function: ease-out;
  }

  20% {
    opacity: 1
  }

  30% {
    opacity: 0
  }
}
</style>