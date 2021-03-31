import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

var url;
const headers = { Accept: "application/json" };

export default new Vuex.Store({
  state: {
    products: [],
    inCart: [],
    user: {
      isAuthenticated: false,
      name: "",
      email: "",
      idToken: ""
    },
    endpoints: {
      login: "http://localhost:3000/login",
      products: "http://localhost:8000/products"
    },
  },
  getters: {
    products: state => state.products,
    inCart: state => state.inCart,
  },
  mutations: { //synchronous
    setProducts(state, payload) {
      state.products = payload;
    },
    addToCart(state, payload) {
      console.log(payload);
      state.inCart.push(payload);
    },
    removeFromCart(state, item) {
      state.inCart.splice(item, 1);
    },
    logout(state) {
      state.user.isAuthenticated = false;
      state.user.name = "";
      state.user.email ="";
      state.user.idToken ="";
    },
    login(state, payload) {
      state.user.isAuthenticated = true;
      state.user.name = payload.name;
      state.user.email =payload.email;
      state.user.idToken =payload.idToken;
    },
    setUrls(state) {
      state.endpoints.login = process.env.VUE_APP_AUTH_URL;
      state.endpoints.products = process.env.VUE_APP_PRODUCTS_URL;
      url = "http://campeones-bootstrap-ucllteam14.ocp-ucll-40cb0df2b03969eabb3fac6e80373775-0000.eu-de.containers.appdomain.cloud/products";
      console.log(process.env);
      console.log("URL2: " + url);
    }
  },
  actions: { //asynchronous
    async getProducts(state) {
      console.log("url: " + url);
      const products = await fetch(url, { headers });
      const prods = await products.json();
      state.commit("setProducts", prods);
      console.log(prods);
    }
  },
  modules: {
  }
})
