import { createStore } from "vuex";

export default createStore({
  state: {
    track: {},
    trackDetail: {},
  },
  getters: {},
  mutations: {
    setTrackStore(state, track) {
      state.track = track;
    },
    setTrackDetail(state, track) {
      state.trackDetail = track;
    },
  },
  actions: {},
  modules: {},
});
