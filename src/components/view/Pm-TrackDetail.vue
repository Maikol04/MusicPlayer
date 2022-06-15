<template lang="html">

    <div class="container" v-if="track.album">
        <div class="columns is-centered">
            <div class="column is-3 has-text-centered">
                <figure class="media-left">
                    <p class="image">
                        <img :src="track.album.images[0].url" />
                    </p>
                    <span class="button is-primary is-normal" @click="SelectTrack">
                        <i class="fa-solid fa-play"></i>
                    </span>
                </figure>
            </div>
            <div class="column is-8">
                <div class="panel">
                    <div class="panel-heading">
                        <h1 class="title">
                            {{ track.name }}
                        </h1>
                    </div>
                    <div class="panel-block">
                        <article class="media">
                            <div class="media-content">
                                <div class="content">
                                    <ul v-for="(t, k) in track" :key="k">
                                        <li>
                                            <strong>{{ k }}:&nbsp;</strong>
                                        </li>
                                        <span>
                                            {{ t }}
                                        </span>
                                    </ul>
                                </div>
                            </div>
                        </article>
                    </div>
                </div>
            </div>
            <!-- <div class="column is-one-third">
                <pm-track :track="track"></pm-track>
            </div> -->

        </div>

    </div>

</template>
<script>
//import PmTrack from '@/components/Pm-Track.vue'
import emitter from '@/services/emitter';
export default {
    components: {
        //  PmTrack
    },
    data() {
        return {
            track: {}
        }
    },
    methods: {
        async searchById(id) {
            try {
                const API_URL = 'https://platzi-music-api.herokuapp.com/tracks/' + id;
                const res = await fetch(API_URL);
                const data = await res.json();
                this.track = data;
                console.log(data);
            } catch (error) {
                alert(error);
            }

        }
    },
    created() {
        const id = this.$route.params.id;
        this.searchById(id);
    },
    SelectTrack() {
        emitter.emit('set-track', this.track);
    }
}
</script>
<style>
</style>