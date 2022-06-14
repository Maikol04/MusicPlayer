<template lang="html">

    <div class="container">
        <div class="columns is-centered">
            <div class="column is-one-third">
                <pm-track :track="track"></pm-track>
            </div>

        </div>

    </div>

</template>
<script>
import PmTrack from '@/components/Pm-Track.vue'

export default {
    components: {
        PmTrack
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
}
</script>
<style>
</style>