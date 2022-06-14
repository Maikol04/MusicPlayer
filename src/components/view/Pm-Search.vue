<template>
  <main>
    <pm-notification v-if=showNotification :NotificationType="this.status">
      <template v-slot:body>
        <p v-if="this.status === 'danger'">No se encontraron resultados</p>
        <p v-if="this.status === 'success'">
          Se encontraron {{ this.tracks.length }} resultados
        </p>
      </template>
    </pm-notification>
    <pm-loader v-if="isLoading"></pm-loader>
    <section class="section" v-if="!isLoading">
      <nav class="nav navbar field.has-addons control is-expanded">
        <div class="container">
          <input type="text" class="input is-large" placeholder="Buscar Canciones" v-model="searchQuery" @keyup.enter="search">
          <button class="button is-large is-info" @click="search">Buscar</button>
          <button class="button is-danger is-large">&times;</button>
        </div>
      </nav>
      <div class="container">
        <p>
          <small>{{ searchMsg }}</small>
        </p>
      </div>
      <div class="container results">
        <div class="columns is-multiline">
          <div class="column is-one-quarter" v-for="(track, t) in tracks" :key="t">
            <pm-track :track="track" @select="setSelectedTrack" :class="{ 'is-active': track.id === selectedTrack }">
            </pm-track>
          </div>
        </div>
      </div>
    </section>
  </main>
</template>

<script>

import PmTrack from '@/components/Pm-Track.vue';

import PmLoader from '@/components/shared/Pm-Loader.vue';
import PmNotification from '@/components/shared/Pm-Notification.vue';

export default {
  name: 'App',
  components: {
    PmTrack,
    PmLoader,
    PmNotification
  },
  provide() {
    return {
      trackPlayer: this.tracks,
    }
  },
  data() {
    return {
      searchQuery: '',
      tracks: [],
      isLoading: false,
      selectedTrack: '',
      showNotification: false,
      status: '',
    }
  },
  computed: {
    searchMsg() {
      return `Elementos encontrados :  ${this.tracks.length} `
    }
  }
  ,
  watch: {
    showNotification() {
      if (this.showNotification) {
        setTimeout(() => {
          this.showNotification = false;
        }, 3000);
      }
    }
  },
  methods: {
    async search() {
      if (this.searchQuery) {

        try {
          this.isLoading = true;

          const API_URL = 'https://platzi-music-api.herokuapp.com/search?q=' + this.searchQuery + '&type=track';
          const res = await fetch(API_URL);
          const data = await res.json();
          this.showNotification = true;
          this.status = data.tracks.total > 0 ? 'success' : 'danger';
          console.log(this.status);
          this.tracks = data.tracks.items;
          this.isLoading = false;
        } catch (error) {
          alert(error);
        }

      }



    },
    setSelectedTrack(id) {
      this.selectedTrack = id;
      console.log(this.selectedTrack);
    }
  }
}
</script>

<style scoped>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

.results {
  margin-top: 2rem;
}

.input {
  margin-bottom: 1rem;
}

.is-active {
  border: 3px #48c78e solid;
}
</style>
