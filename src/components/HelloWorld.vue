<template>
    <div class="container">
    <nav class="navbar navbar-default navbar-sticky bootsnav">
    <div class="container">
    <div class="row"> 
    <div class="attr-nav">
      <span>Mconferencing</span>
    </div>           
    </div>
    </div>
    </nav>
    <div class="col-5 mt-5 ml-5 ">
    <div class="row form-group">
      <div class="col">
        <label style="font-size:20px;font-weight:bold;text-align:left" class="mt-3">Conference Room</label>
    <input type="text" class="form-control" v-model="roomID" placeholder="Conference Room">
    </div>
    <div class="col">
      <router-link class="sponsor-button" :to="'/videochat/'+this.roomID">Join/Open Conference Room</router-link>
    </div>
    </div>
    </div>
    <hr class="mt-5 pt-4">
    </div>
</template>

<script>
import {v4 as uuidv4 } from 'uuid'
export default {
  components: {  },
  name: 'HelloWorld',
  data () {
    return {
      roomID:uuidv4()
    }
  },
  method:{
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.body{
font-family:'Pacifico';
}
</style>
