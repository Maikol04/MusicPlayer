<template>
  <div class="card" v-if="track && track.album">
    <div class="card-image">
      <figure class="image is-1by1">
        <img :src="track.album.images[0].url" alt="Imagen Album" />
      </figure>
    </div>
    <div class="card-content">
      <div class="media">
        <div class="media-left">
          <figure class="image is-48x48">
            <img :src="track.album.images[0].url" alt="Imagen Album" />
          </figure>
        </div>
        <div class="media-content">
          <p class="title is-6">
            <strong>
              {{ track.name }}
            </strong>
          </p>
          <p class="subtitle is-6">
            {{ track.artists[0].name }}
          </p>
        </div>
      </div>
      <div class="content">
        <small>
          {{ track.duration_ms }}
        </small>
        <nav class="level">
          <a href="" class="level-item">
            <span class="icon is-small" @click.prevent="SelectTrack">
              <i class="fa-solid fa-circle-play"></i>
            </span>
          </a>
          <a href="" class="level-item">
            <span class="icon is-small" @click.prevent="goToTrack(track.id)">
              <i class="fa-solid fa-circle-info"></i>
            </span>
          </a>
        </nav>
      </div>
    </div>
  </div>
</template>

<script>
import emitter from "@/services/emitter";
export default {
  props: {
    track: {
      type: Object,
      required: true,
    },
  },
  methods: {
    SelectTrack() {
      this.$emit("select", this.track.id);
      emitter.emit("set-track", this.track);
      localStorage.setItem("TrackId", this.track.id);
      localStorage.setItem("Track", this.track);
    },

    goToTrack(id) {
      this.$router.push({ name: "Track", params: { id } });
    },
  },
};
</script>

<style></style>
