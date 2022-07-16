import { createStore } from "vuex";

export default createStore({
  state: {
    track: {},
    image: "",
  },
  getters: {},
  mutations: {
    setTrackStore(state, track) {
      state.track = track;
    },
    setImageStore(state, track) {
      state.image = track.album.images[0].url;
    },
  },
  actions: {},
  modules: {},
});
