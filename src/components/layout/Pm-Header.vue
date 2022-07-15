<template lang="html">
  <section class="hero is-success">
    <div class="hero-head">
      <header class="navbar">
        <div class="container">
          <div class="navbar-start">
            <div class="navbar-item" @click="goToMain">
              <strong>🎶🎶 Maikol Music 🎶🎶</strong>
            </div>
          </div>
          <div class="navbar-end navbar-menu">
            <router-link class="navbar-item" :to="{ name: 'Search' }"
              >Buscar</router-link
            >
            <router-link class="navbar-item" to="About">About</router-link>
          </div>
        </div>
      </header>
    </div>
    <div class="hero-body">
      <div class="container has-text-centered">
        <h1 class="title">Canciones que están Vue-nísimas!.</h1>
        <pm-player></pm-player>
      </div>
    </div>
  </section>
</template>

<script>
import PmPlayer from "@/components/Pm-Player.vue";

export default {
  components: {
    PmPlayer,
  },
  methods: {
    goToMain() {
      this.$router.push({ name: "Search" });
    },
  },
};
</script>
