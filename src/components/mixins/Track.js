/* eslint-disable */
const trackMixin = {
    methods:{
        SelectTrackStore(){
            this.$store.commit('setTrackStore',this.track)
        }
    }
}

export default trackMixin