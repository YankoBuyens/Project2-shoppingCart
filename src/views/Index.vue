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
