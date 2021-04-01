<template>
  <nav class="navbar navbar-expand-sm navbar-light" style="background-color: #023047;" role="navigation">
    <div class="container">
      <router-link to="/" class="navbar-brand mr-auto" style="color: whitesmoke">Campeones Travel</router-link>
      <ul class="navbar-nav mr-auto">
        <router-link to="/" tag="li" class="nav-item" active-class="active">
          <a @click="onHomeClicked" style="color: whitesmoke" class="nav-link">Home</a>
        </router-link>
        <router-link to="/products" tag="li" v-if="isAuthenticated" class="nav-item">
          <a @click="onPacketsClicked" style="color: whitesmoke" class="nav-link">Travel packets</a>
        </router-link>
        <router-link to="/about" tag="li" v-if="isAuthenticated" class="nav-item">
          <a @click="onAboutClicked" style="color: whitesmoke" class="nav-link">About us</a>
        </router-link>
      </ul>
      <ul class="nav navbar-nav">
        <router-link to="/" tag="li" v-if="!isAuthenticated" class="nav-item" active-class="active">
          <a @click="onLoginClicked" style="color: whitesmoke" class="nav-link">Login</a>
        </router-link>
        <li v-if="isAuthenticated" class="li-pointer nav-item">
          <div class="dropdown">
            <button class="btn btn-secondary dropdown-toggle" type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
              {{ getUserName() }}
            </button>
            <div class="dropdown-menu" aria-labelledby="dropdownMenuButton">
              <a class="dropdown-item" style="color: whitesmoke" href="#">Account Settings</a>
              <a v-if="isPartner" style="color: whitesmoke" @click="onRegisterClicked" class="dropdown-item" href="#">Register Product</a>
              <a @click="onLogoutClicked" style="color: whitesmoke" class="dropdown-item">Logout {{ userEmail }}</a>
            </div>
          </div>
        </li>
        <li>
          <ShoppingCart />
        </li>
      </ul>
    </div>
  </nav>
</template>

<script>
import ShoppingCart from './ShoppingCart.vue';

export default {
  components: { ShoppingCart },
  name: 'NavHeader',
  computed: {
    userEmail() {
      return this.isLoggedIn ? this.currentUser.email : ''
    },
    isAuthenticated() {
      return this.$store.state.user.isAuthenticated;
    },
    isPartner() {
      return this.$store.state.user.partner;
    },
  },
  methods: {
    onLoginClicked() {
      window.location = this.$store.state.endpoints.login;
    },
    onLogoutClicked() {
      this.$store.commit("logout");
    },
    onRegisterClicked() {
      let obj = { 'description': 'description', 'id': parseInt("1"), 'price': parseInt("1000"), 'quantity': parseInt("10"), 'thumbnail_url': "thumbnail_url", 'title': "title" }
      this.$store.dispatch("registerProduct", obj);
    },
    getUserName() {
      return this.$store.state.user.name;
    },
    onHomeClicked(){
      window.location = this.$store.state.endpoints.home;
    },
    onPacketsClicked(){
      console.log("NavHeader.vue: " + this.$store.state.endpoints.products);
      window.location = this.$store.state.endpoints.products;
    },
    onAboutClicked(){
      window.location = this.$store.state.endpoints.about;
    }
  }
}
</script>
