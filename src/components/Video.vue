<template>
<div class="container">
    <div class="container ml-5">
         <div class="videos-container">
      <feed
          v-for="(index,item) in videosList"
          :item="item"
          :key="index">
      </feed>
    </div>
<div class="row">
<div class="attr-nav">
<button class="donation" @click="joinrtc()" v-show="this.connection.isOnline != true" >Join</button>
<button class="sponsor-button" @click="leave()" v-show="this.connection.isOnline ===true">Leave</button>
<button class="btn btn-success" v-show="this.connection.isOnline === true">Online</button>
<button class="btn btn-danger" v-show="this.connection.isOnline != true">Offline</button>
</div>           
</div>
</div>
 
  </div>
</template>
<script>
import * as rtcmulticonnection from 'rtcmulticonnection';
import * as io from 'socket.io-client'
window.io = io
export default{
   data(){
       return{
          connection:'',
          roomID:this.$route.params.id,
          videosList:[],
          newList:[]
       }
   },
   components:{
   },
   methods:{
        joinrtc() {
          this.connection = new rtcmulticonnection();
          this.connection.socketURL = 'https://rtcmulticonnection.herokuapp.com:443/';
          this.connection.session = {
              audio: true,
              video: true
          };
          this.connection.maxParticipantsAllowed = 7;
          this.connection.autoCloseEntireSession = true;
           this.connection.sdpConstraints.mandatory = {
            OfferToReceiveAudio: true,
            OfferToReceiveVideo: true
            };  
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

        this.connection.mediaConstraints = {
            video: videoConstraints,
            audio: true
        };
        
        var CodecsHandler = this.connection.CodecsHandler;

        this.connection.processSdp = function(sdp) {
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
        
        this.connection.autoCreateMediaElement = false;
        this.connection.onstream = function(event) {
            this.videosList.push({
                id: event.streamid,
                srcObject: event.stream,
                muted: event.type === 'local'
            });
        };
        this.connection.onstreamended = function(event) {
            this.videosList.forEach(function(item) {
                if(item.id !== event.streamid) {
                    this.newList.push(item);
                }
            });
            this.videosList = this.newList;
        };
        
          this.connection.openOrJoin(this.roomID);
          
    },
    leave(){
        this.connection.getAllParticipants().forEach(function(pid) {
        this.connection.disconnectWith(pid);
    });

        this.connection.attachStreams.forEach(function(localStream) {
        localStream.stop();
    });
        this.connection.closeSocket();
       },
       
   }

}
</script>
<style>
video{
    max-height: 280px;
    margin: auto;
    padding: auto;
    max-width: 600px;
}
video:first-child {
    border:2px solid greenyellow;
    box-sizing: border-box;
    width:200px;
    height:200px;
    padding: 15px;
    margin-bottom: 35px;
    margin-right: 5px;
}
body{
    margin:10px;
}
</style>
