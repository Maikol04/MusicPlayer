<template>
  <pm-header></pm-header>
  
  <router-view></router-view>

  <pm-footer/>
</template>

<script>
import PmFooter from '@/components/layout/Pm-Footer.vue';
import PmHeader from '@/components/layout/Pm-Header.vue';

export default {
  name: 'App',
  components : {
    PmFooter,
    PmHeader
  }
}
</script>

<style>
@import './scss/main.scss';

  #app {
    font-family: Avenir, Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
  }
</style>
