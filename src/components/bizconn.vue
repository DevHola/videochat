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
      <vue-webrtc ref="webrtc" width="100%" :roomId="roomId" class="bg-dark" v-on:joined-room="logEvent"
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
  margin:1px;
  width:380px;
  height: 300px;
  background-color: white;
}
 .video-list {
    background: rgb(39, 35, 35);
    height: auto;
    display: flex;
    flex-direction: row;
    justify-content: left;
    flex-wrap: wrap;
  }
   .video-list div {
      padding: 0px;
    }
   .video-item:first-child {
    display: inline-block;
    border:2px solid red;
    width:380px;
    height:300px;
    margin-buttom:0px;
  }
  .video-item {
    display: inline-block;
  }
</style>
