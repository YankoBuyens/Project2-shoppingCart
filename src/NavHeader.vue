<template>
  <nav class="navbar navbar-expand-sm navbar-light" style="background-color: #fb8500;" role="navigation">
    <div class="container">
      <router-link to="/" class="navbar-brand mr-auto">Campeones Travel</router-link>
      <ul class="navbar-nav mr-auto">
        <router-link to="/" tag="li" class="nav-item" active-class="active">
          <a @click="onHomeClicked" class="nav-link">Home</a>
        </router-link>
        <router-link to="/" tag="li" v-if="!isAuthenticated" class="nav-item">
          <a @click="onPacketsClicked" class="nav-link">Travel packets</a>
        </router-link>
        <router-link to="/" tag="li" v-if="!isAuthenticated" class="nav-item">
          <a @click="onCreateClicked" class="nav-link">Create packet</a>
        </router-link>
      </ul>
      <ul class="nav navbar-nav">
        <router-link to="/" tag="li" v-if="!isAuthenticated" class="nav-item" active-class="active">
          <a @click="onLoginClicked" class="nav-link">Login</a>
        </router-link>
        <li v-if="isAuthenticated" class="li-pointer nav-item">
          <div class="dropdown">
            <button class="btn btn-secondary dropdown-toggle" type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
              {{ getUserName() }}
            </button>
            <div class="dropdown-menu" aria-labelledby="dropdownMenuButton">
              <a class="dropdown-item" href="#">Account Settings</a>
              <a v-if="isPartner" @click="onRegisterClicked" class="dropdown-item" href="#">Register Product</a>
              <a @click="onLogoutClicked" class="dropdown-item">Logout {{ userEmail }}</a>
            </div>
          </div>
        </li>
      </ul>
    </div>
  </nav>
</template>

<script>
export default {
  components: { },
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
      window.location = this.$store.state.endpoints.packets;
    },
    onCreateClicked(){
      window.location = this.$store.state.endpoints.create;
    }
  }
}
</script>
