<template>
<div class="container">
    <div class="container">
    
      <div class="col-6">
     <vue-webrtc ref="BaseWRTC"
                      width="50%"
                      cameraHeight=100
                      roomId="Base"
                      socketURL="https://rtcmulticonnection.herokuapp.com:443/" />
      </div>
   <!--   <div id="vue-app">
     <feed v-for="feed in videosList" :todo="feed" :key="feed.id">
      </feed>
    </div>-->
<div class="row"> 
<div class="attr-nav">
<button class="sponsor-button" @click="leave()">Leave</button>
<button class="donation" @click="joinrtc()">Join</button>

</div>           
</div>
</div>
 
  </div>
</template>
<script>
import Vue from 'vue'
import navbar from '@/components/navbar'
import WebRTC from 'vue-webrtc'
import * as rtcmulticonnection from 'rtcmulticonnection';
import * as io from 'socket.io-client'
window.io = io
Vue.use(WebRTC);
export default{
   data(){
       return{
          connector:''
       }
   },
   components:{
        navbar
   },
   methods:{
        joinrtc() {
          var connection = new rtcmulticonnection();
          connection.socketURL = 'https://rtcmulticonnection.herokuapp.com:443/';
          connection.session = {
              audio: true,
              video: true
          };
          connection.autoCloseEntireSession = true;
           connection.sdpConstraints.mandatory = {
            OfferToReceiveAudio: true,
            OfferToReceiveVideo: true
            };
            this.connector = connection;
            console.log(this.connector)
            
            var bitrates = 512;
        var resolutions = 'Ultra-HD';
        var videoConstraints = {};

        if (resolutions == 'HD') {
            videoConstraints = {
                width: {
                    ideal: 400
                },
                height: {
                    ideal: 400
                },
                frameRate: 30
            };
        }

        if (resolutions == 'Ultra-HD') {
            videoConstraints = {
                width: {
                    ideal: 400
                },
                height: {
                    ideal: 400
                },
                frameRate: 30
            };
        }

        connection.mediaConstraints = {
            video: videoConstraints,
            audio: true
        };
        
        var CodecsHandler = connection.CodecsHandler;

        connection.processSdp = function(sdp) {
            var codecs = 'vp8';
            
            if (codecs.length) {
                sdp = CodecsHandler.preferCodec(sdp, codecs.toLowerCase());
            }

            if (resolutions == 'HD') {
                sdp = CodecsHandler.setApplicationSpecificBandwidth(sdp, {
                    audio: 128,
                    video: bitrates,
                    screen: bitrates
                });

                sdp = CodecsHandler.setVideoBitrates(sdp, {
                    min: bitrates * 8 * 1024,
                    max: bitrates * 8 * 1024,
                });
            }

            if (resolutions == 'Ultra-HD') {
                sdp = CodecsHandler.setApplicationSpecificBandwidth(sdp, {
                    audio: 128,
                    video: bitrates,
                    screen: bitrates
                });

                sdp = CodecsHandler.setVideoBitrates(sdp, {
                    min: bitrates * 8 * 1024,
                    max: bitrates * 8 * 1024,
                });
            }

            return sdp;
        };
          connection.openOrJoin('myroom19');
    },
    leave(){
        
        this.connector.attachStreams.forEach(function(localStream) {
        localStream.stop();
    });
        this.connector.closeSocket();
       },
   }

}
</script>