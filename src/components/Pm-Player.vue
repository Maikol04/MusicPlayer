<template>
  <div class="content" v-if="track && track.album">
    <p>
      <img :src="track.album.images[0].url" alt="imagen" />
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
import { mapState } from "vuex";
// import emitter from "@/services/emitter";
export default {
  computed: {
    ...mapState(["track", "trackDetail"]),
  },
  created() {
    // emitter.on("set-track", (track) => {
    //   this.track = track;
    //   console.log(track);
    //   this.image = track.album.images[0].url;
    // }
  },
};
</script>

<style scoped>
img {
  width: 124px;
  border-radius: 50%;
}
</style>
