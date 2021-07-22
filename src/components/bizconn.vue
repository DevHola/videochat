<template>
  <div class="container">
    <div class="row">
      <div class="col-md-12 my-3">
        <h2 class="text-left" style="font-size:20px;">bFuision.com</h2>
        <div class="attr-nav">
<button class="donation"  @click="onJoin" >Connect</button>
<button class="sponsor-button" @click="onLeave">Leave</button>

</div>           

        <hr>
      </div>
    </div>
    <div class="row">
      <div class="col-md-12">
    <div class="container">
      <vue-webrtc ref="webrtc" width="100%" :roomId="roomId" cameraHeight=380 class="bg-dark" v-on:joined-room="logEvent"
              v-on:left-room="logEvent" v-on:opened-room="logEvent" @error="onError" />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  import Vue from 'vue'
  import { WebRTC } from 'vue-webrtc';
  Vue.component(WebRTC.name, WebRTC);
  export default {
    components: {
    },
    data() {
      return {
        img: null,
        roomId: this.$route.params.id
      };
    },
    computed: {
    },
    watch: {
    },
    methods: {
      onJoin() {
        this.$refs.webrtc.join();
      },
      onLeave() {
        this.$refs.webrtc.leave();
      },
      onError(error, stream) {
        console.log('On Error Event', error, stream);
      },
      logEvent(event) {
        console.log('Event : ', event);
      },
    }
  };
</script>
<style>
video{
 width:380px;
 height:300px;
}
   .video-item:first-child {
    border:2px solid red;
   }
</style>
