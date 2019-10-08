<template>
  <v-app>
    <v-content>
      <TopBar/>
      <router-view>
      <Home/>
      </router-view>
    </v-content>
  </v-app>
</template>

<script>
import HelloWorld from './components/HelloWorld';
import Home from './views/Home';
import TopBar from './components/HomeTopBar';

export default {
  name: 'App',
  components: {
    HelloWorld,
    Home,
    TopBar,
  },
  data: () => ({
    //
  }),
  methods: {
    handleScroll (event) {
        var container = document.getElementById("header");
        var sticky = container.offsetTop;
        if (window.pageYOffset > sticky) {
            container.classList.add("sticky");
        } else {
            container.classList.remove("sticky");
        }
    }
  },
  created () {
      window.addEventListener('scroll', this.handleScroll);
  },
  destroyed () {
      window.removeEventListener('scroll', this.handleScroll);
  }
};
</script>
