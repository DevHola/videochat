<template>
  <div class="container">
    <div class="row">
      <div class="col-md-12 my-3">
        <h2 class="text-left" style="font-size:20px;">bFuision.com</h2>
        <div class="attr-nav">
          <button class="donation">Tech Support</button>
          <button class="sponsor-button" >Donate</button>
          </div>           
        <hr>
      </div>
    </div>
    <div class="row">
      <div class="col-md-12">
        <div class="container">
         <div class="col">
          <label style="font-size:20px;font-weight:bold" class="mt-3 text-left">  Open Conference Generator</label>
           <input type="text" class="form-control" v-model="roomID" placeholder="Conference Room">
    </div>
    <div class="col">
           <router-link class="sponsor-button" :to="'/businessconnection/'+this.roomID">Conference Room</router-link>
    </div>
        </div>
      </div>
    </div>
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
