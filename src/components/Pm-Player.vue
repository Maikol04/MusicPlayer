<template>
    <div class="content" v-if="track && track.album">
        <p>
            <img :src="image"   alt="">
        </p>
        <p>
            <strong>
                {{track.name}}
            </strong></p>
            <p>
            <small>
                {{track.duration_ms}}
            </small>
        </p>
        <p>
            <audio controls :src="track.preview_url">   
            </audio>
        </p>
    </div>
</template>

<script>
 import emitter from '@/services/emitter';
export default {
    data(){
        return{
            track: {},
            image : ''
        }
    },
    
    created(){
        emitter.on('set-track',(track)=>{
            this.track = track;
            this.image = track.album.images[0].url;
        })
    },



}

</script>


<style scoped>
img{
    width: 124px;
    border-radius: 50%;
}
</style>