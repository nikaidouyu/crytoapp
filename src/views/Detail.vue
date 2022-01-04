<template>
  <div class="detail">
  <Header2 />
  <router-view/>
  <div class="back-color">
    <div class="name">
      <p>BTC</p>
      <p>ビットコイン</p>
    </div>
    <p class="time">{{ this.datetime }}</p>
    <!-- <div v-for="currency in btc" class="currency"> -->
    <p class="price">¥{{ btc }}</p>
    <!-- </div> -->
  </div>
  </div>
</template>

<script>
import Header2 from "../components/Header2";
import axios from "axios";
export default {
  components: {
    Header2
  },
  data() {
    return {
      btc:[2],
      timer: '',
      datetime: '',
      jsonData:''
    }
  },
  mounted: function() {
    // axios
    // var request = require('request');
    // var endPoint = 'https://api.coin.z.com/public';
    // var path     = '/v1/ticker?symbol=BTC';

    // request(endPoint + path, function (err, response, payload) {
    // console.log(JSON.stringify(JSON.parse(payload), null, 2));
    // });
    

    // axios.get("https://api.coin.z.com/public/v1/ticker?symbol=BTC")
    // .then(function(response){
    //   console.log(response.data)
    //   this.btc = response.data
    // }.bind(this))
    // console.log(this.btc)

    
    axios
    .get("https://api.coin.z.com/public/v1/ticker{}?symbol=BTC")
    .then(function(response){
      console.log(response.data);
      this.btc = response.data[2];
      // console.log(response.data.bid);
    }.bind(this))
    .catch(function(error){
      console.log(error)
    })
    

    
    this.timer = setInterval(() => {
        this.datetime = this.dayjs().format("YYYY/MM/DD HH:mm:ss")
        console.log(this.datetime)
      }, 1000)
  }
};
</script>

<style scoped>

.detail {
  background-color: #E5E5E5;
  background-size: cover;
}

.back-color {
  font-size: 45px;
}

.name {
  display: flex;
  padding:150px 0 150px 0;
  justify-content: center;
}

.name p{
  padding-right: 50px;
  padding-left: 50px;
}

.time {
  text-align: center;
  padding-bottom:100px;
}


.price {
  text-align: center;
  padding-bottom:150px;
}

@media screen and (max-width : 768px){
	
.detail {
  background-color: #E5E5E5;
  height: 100%;
  min-height: 100vh;
}

.back-color {
  font-size:30px;
}

}

</style>

