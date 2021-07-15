<template>
<div class="container">
    <div class="container ml-5">
<div class="row">
<div class="attr-nav">
<button class="donation" @click="joinrtc()" v-show="this.connector.isOnline != true" >Join</button>
<button class="sponsor-button" @click="leave()" v-show="this.connector.isOnline ===true">Leave</button>
<button class="btn btn-success" v-show="this.connector.isOnline === true">Online</button>
<button class="btn btn-danger" v-show="this.connector.isOnline != true">Offline</button>
</div>           
</div>
</div>
 
  </div>
</template>
<script>
import Vue from 'vue'
import navbar from '@/components/navbar'
import * as rtcmulticonnection from 'rtcmulticonnection';
import * as io from 'socket.io-client'
window.io = io
export default{
   data(){
       return{
          connector:'',
          roomID:this.$route.params.id
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
          connection.maxParticipantsAllowed = 7;
          connection.autoCloseEntireSession = true;
           connection.sdpConstraints.mandatory = {
            OfferToReceiveAudio: true,
            OfferToReceiveVideo: true
            };
            this.connector = connection;
            
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
        
          connection.openOrJoin(this.roomID);
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
<style>
video{
    width:500px;
	height:500px;
    padding: 2rem;
	display:block;
}

</style>