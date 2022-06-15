import { Vue } from 'vue'
import { Vuex } from 'vuex'

Vue.use(Vuex)
// Create a new store instance.
const store = new Vuex.store ({
  state :{
    track : {}
  },
  mutations: {
    setTrackStore(state, track){
      state.track = track
    }
    }
})

export default store


// const app = createApp({ /* your root component */ })

// // Install the store instance as a plugin
// app.use(store)