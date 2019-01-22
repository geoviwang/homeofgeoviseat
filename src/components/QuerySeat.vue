<template>
   <div class="container">
      <br>
      <div class="row">
         <div class="bar" v-on:click="admin"></div>
         <div class="col">
            <div id="seat9" class="row"><div class="seat" :class="seatClass.seat9" @click="upNdown"></div></div>
            <div id="seat8" class="row"><div class="seat" :class="seatClass.seat8" @click="upNdown"></div></div>
            <div id="seat7" class="row"><div class="seat" :class="seatClass.seat7" @click="upNdown"></div></div>
         </div>
      </div>
      <div class="row">
         <div id="seat1" class="seat" :class="seatClass.seat1" @click="upNdown"></div>
         <div id="seat2" class="seat" :class="seatClass.seat2" @click="upNdown"></div>
         <div id="seat3" class="seat" :class="seatClass.seat3" @click="upNdown"></div>
         <div id="seat4" class="seat" :class="seatClass.seat4" @click="upNdown"></div>
         <div id="seat5" class="seat" :class="seatClass.seat5" @click="upNdown"></div>
         <div id="seat6" class="seat" :class="seatClass.seat6" @click="upNdown"></div>
      </div>
   </div>
</template>

<script>

import * as firebase from "firebase";
import $ from "jquery";
import moment from "moment";
moment.locale("zh-tw");

var config = {
    apiKey: "AIzaSyDOfQKzA2WKr50Rc1fbaVWpgAaW1ALXCSo",
    authDomain: "ttlseatdatabase.firebaseapp.com",
    databaseURL: "https://ttlseatdatabase.firebaseio.com",
    projectId: "ttlseatdatabase",
    storageBucket: "ttlseatdatabase.appspot.com",
    messagingSenderId: "775630335713"
  };
firebase.initializeApp(config);

firebase.auth().signInAnonymously().catch(function(error) {
  // Handle Errors here.
  var errorCode = error.code;
  var errorMessage = error.message;
  console.log(errorCode);
  console.log(errorMessage);
});

const db = firebase.database();

export default {
   name: 'QuerySeat',
   data() {
      return {
         adminCount: 0,
         seatClass:{
            'seat1': 'empty',
            'seat2': 'empty',
            'seat3': 'empty',
            'seat4': 'empty',
            'seat5': 'empty',
            'seat6': 'empty',
            'seat7': 'empty',
            'seat8': 'empty',
            'seat9': 'empty'
         }
      }
   },
   methods: {
      upNdown: function(el) {
         if(this.adminCount < 5) return;
         var id = el.target.id;
         var seatClass = this.seatClass;
         if(seatClass[id] == 'empty') {
            db.ref('/homeofgeoviseat/' + id).set({
               people: 'arrival',
               mt: moment().format()
            });
         } else {
            db.ref('/homeofgeoviseat/' + id).set({
               people: 'empty'
            });
         }
      },
      admin: function() {
         this.adminCount++;
         if(this.adminCount == 5) {
            alert('安安>.^');
         }
      }
   },
   mounted() {
      var sClass = this.seatClass;
      db.ref('/homeofgeoviseat/').on("value", function(snapshot) {
         var data = snapshot.val()
         for(var seat in data) {
            sClass[seat] = data[seat].people;
         }
       });
       setInterval(function(){
         console.log('interval');
          db.ref('/homeofgeoviseat/').once('value').then(function(snapshot) {
            var data = snapshot.val();
            for(var seat in data) {
               if(data[seat].people == 'arrival') {
                  if(moment().diff(moment(data[seat].mt)) > 1800000) {
                     db.ref('/homeofgeoviseat/' + seat).set({
                        people: 'awhile'
                     });
                  }
                }
             }
          });
       }, 1000);
   }
}
</script>

<style scoped>
.container{
    min-width: 1080px;
}
.bar{
   width: 240px;
   height: 120px;
   border-right:5px black solid;
   border-bottom:5px black solid;
}
.seat {
   border: 3px solid;
   border-radius: 99em;
   width: 40px;
   height: 40px;
}
.empty {
   background-color: none;
}
.arrival {
   background-color: red;
   animation-name: oxxo;
   animation-duration:2s;
   animation-iteration-count: infinite;
}
.awhile {
   background-color: red;
}

@keyframes oxxo{
   0%{
      background: red;
   }
   50%{
      background: none;
   }
   100%{
      background: red;
   }
}
</style>
