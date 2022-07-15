<template>
  <div class="content" v-if="track && track.album">
    <p>
      <img :src="image" alt="imagen" />
    </p>
    <p>
      <strong>
        {{ track.name }}
      </strong>
    </p>
    <p>
      <audio controls :src="track.preview_url"></audio>
    </p>
  </div>
</template>

<script>
import emitter from "@/services/emitter";
export default {
  data() {
    return {
      track: {},
      image: "",
    };
  },
  watch: {
    track() {
      const Track = localStorage.getItem("Track");
      this.track = Track;
    },
  },

  created() {
    emitter.on("set-track", (track) => {
      this.track = track;
      this.image = track.album.images[0].url;
    });
    // const track = localStorage.getItem("Track");
    // this.track = track;
    // this.image = track.album.images[0].url;
  },
};
</script>

<style scoped>
img {
  width: 124px;
  border-radius: 50%;
}
</style>
