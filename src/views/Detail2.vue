<template>
  <div class="detail">
  <Header2 />
  <router-view/>
  <div class="back-color">
    <div class="name">
      <p>ETH</p>
      <p>イーサリアム</p>
    </div>
    <p class="time">{{ timestamp }}</p>
    <p class="price">¥{{ btc  | includedTax | formatNumber}}円</p>
    <button class="update" @click="currentDateTime">更新</button>
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
      btc:'',
      timestamp: ''
    }
  },
  filters: {
   includedTax: function (price) {
    return price * 1
    },
    formatNumber: function (price) {
    return price.toLocaleString()
    }
  },

  methods: {
    currentDateTime:function() {
      const current = new Date();
      const date =
        current.getFullYear() +"/" +(current.getMonth() + 1) +
        "/" +current.getDate();
      const time =
        current.getHours() +":" +current.getMinutes() +":" +current.getSeconds();
      const dateTime = date + " " + time;
      this.timestamp = dateTime;


      axios
    .get("https://api.coin.z.com/public/v1/ticker?symbol=ETH")
    .then(function(response){
      console.log(response.data);
      this.btc = response.data.data[0].bid;
      console.log(response.data.data[0].bid);
    }.bind(this))
    .catch(function(error){
      console.log(error)
    })
    }
  },
  mounted: function(){
        axios.get("https://api.coin.z.com/public/v1/ticker?symbol=ETH")
        .then(function(response){
          this.btc = response.data.data[0].bid;
        }.bind(this))

        const current = new Date();
      const date =
        current.getFullYear() +"/" +(current.getMonth() + 1) +
        "/" +current.getDate();
      const time =
        current.getHours() +":" +current.getMinutes() +":" +current.getSeconds();
      const dateTime = date + " " + time;
      this.timestamp = dateTime;


    }
}
</script>

<style scoped>

.detail {
  background-color: #E5E5E5;
  background-size: cover;
}

.back-color {
  font-size: 45px;
  text-align: center;
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
  padding-bottom:50px;
}

.update {
  font-size:20px;
  text-align:center;
  padding:10px 50px 10px 50px;
  margin-bottom:50px;
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

