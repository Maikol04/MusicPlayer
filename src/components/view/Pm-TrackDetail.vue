<template lang="html">
  <div class="container" v-if="trackDetail.album">
    <div class="columns is-centered">
      <div class="column is-3 has-text-centered">
        <figure class="media-left">
          <p class="image">
            <img :src="trackDetail.album.images[0].url" />
          </p>
          <span class="button is-primary is-normal btn-spotify">
            <a
              :href="trackDetail.artists[0].external_urls.spotify"
              target="_blank"
              rel="noopener noreferrer"
              class="icon"
            >
              <img src="@/assets/spotify-brands.svg" alt="Logo"
            /></a>
          </span>
          <span class="button is-primary is-normal" @click.prevent="play">
            <i class="fa-solid fa-circle-play" @click="play"></i>
          </span>
        </figure>
      </div>
      <div class="column is-8">
        <div class="panel">
          <div class="panel-heading">
            <h1 class="title">
              {{ trackDetail.name }}
            </h1>
          </div>
          <div class="box">
            <div class="list">
              <strong>
                Artista
                <!-- {{ track.artists[0].external_urls.spotify }}
                    {{ track }} -->
              </strong>
              <p>{{ trackDetail.artists[0].name }}</p>
            </div>
            <div class="list">
              <strong>
                Álbum
                <!-- {{ track.artists[0].external_urls.spotify }}
                    {{ track }} -->
              </strong>
              <p>{{ trackDetail.album.name }}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import { mapState } from "vuex";
export default {
  // data() {
  //   return {
  //     track: { type: Object },
  //   };
  // },
  computed: {
    ...mapState(["trackDetail"]),
  },
  methods: {
    async searchById(id) {
      try {
        const API_URL = "https://platzi-music-api.herokuapp.com/tracks/" + id;
        const res = await fetch(API_URL);
        const data = await res.json();
        this.trackDetail = data;
      } catch (error) {
        alert(error);
      }
    },
    play() {
      this.$store.commit("setTrackStore", this.trackDetail);
    },
  },
  created() {
    const id = this.$route.params.id;
    if (this.trackDetail.id != id) {
      this.searchById(id);
    }
  },
};
</script>
<style scoped>
.list {
  width: 100%;
  margin-bottom: 2rem;
}
.box {
  flex-wrap: wrap;
}
span {
  margin-top: 1rem;
  margin-right: 1rem;
}
</style>
