<template>
  <div class="detail">
  <Header2 />
  <router-view/>
  <div class="back-color">
    <div class="name">
      <p>BTC</p>
      <p>ビットコイン</p>
    </div>
    <p class="time">{{ datetime }}</p>
    <p class="price">¥{{ btc }}</p>
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
      timer: '',
      datetime: '',
      jsonData:''
    }
  },
  mounted() {
    // axios
    // .get("https://api.coin.z.com/public/v1/ticker?symbol=BTC")
    // .then(function(response){
    //   console.log(response.data);
    //   this.btc = response.data
    //   // console.log(response.data.bid);
    // }.bind(this))
    // .catch(function(error){
    //   console.log(error)
    // })

    
    const response = await axios.get("/v1/ticker?symbol=BTC");
    console.log(response);
    
    

    
    this.timer = setInterval(() => {
        this.datetime = this.dayjs().format("YYYY/MM/DD HH:mm:ss")
        console.log(this.datetime)
      }, 1000)
  }

  // methods() {
  //   const response = await axios.get("/v1/ticker?symbol=BTC");
  //   console.log(response);
  // }
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

