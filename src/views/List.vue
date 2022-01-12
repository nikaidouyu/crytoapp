<template>
  <div class="list">
  <Header2 />
  <router-view/>
  <div class="back-color">
    <div class="list-1">
      <div id="title">
        <p class="title1">銘柄</p>
        <p>説明</p>
      </div>
      <router-link to="detail"><a><div class="name">
        <img src="../assets/bitcoin.png">
        <p>BTC</p>
        <p>ビットコイン</p>
      </div></a></router-link> 
      <router-link to="detail2"><a><div class="name">
        <img src="../assets/ethereum.png">
        <p>ETH</p>
        <p>イーサリアム</p>
      </div></a></router-link>
      <router-link to="detail3"><a><div class="name">
        <img src="../assets/bitcoin-cash.png">
        <p>BCH</p>
        <p>ビットコインキャッシュ</p>
      </div></a></router-link>
      <router-link to="detail4"><a><div class="name">
        <img src="../assets/litecoin.png">
        <p>LTC</p>
        <p>ライトコイン</p>
      </div></a></router-link>
      <router-link to="detail5"><a><div class="name">
        <img src="../assets/xrp.png">
        <p>XRP</p>
        <p>リップル</p>
      </div></a></router-link>
      <router-link to="detail6"><a><div class="name">
        <img src="../assets/nem.png">
        <p>XEM</p>
        <p>ネム</p>
      </div></a></router-link>
      <router-link to="detail7"><a><div class="name">
        <img src="../assets/stellar.png">
        <p>XLM</p>
        <p>ステラルーメン</p>
      </div></a></router-link>
    </div>
  </div>
  </div>
</template>

<script>
import Header2 from "../components/Header2";
export default {
  components: {
    Header2
  },
};
</script>

<style scoped>

.back-color {
  padding-bottom:100px;
  background-color: #E5E5E5;
}

img{
  width:50px;
  height:50px;
  padding-left: 12%;
}

#title {
  display: flex;
  border-bottom:1px solid black;
  padding-bottom:30px;
  padding-top:20px;
  margin: 0 100px 0 100px;
  align-items:center;
  font-size: 20px;
  padding-left: 28.5%;
}

.title1{
  padding-right: 49%;
}

.name {
  display: flex;
  border-bottom:1px solid black;
  padding-bottom:20px;
  padding-top: 20px;
  justify-content: flex-start;
  margin-left:30px;
  margin: 0 100px 0 100px;
  align-items: center;
  font-size: 20px;
  color: black;
}

.name p {
  padding-left: 17%;
  padding-right: 13%;
}

.name:hover {
  opacity: 0.5;
}

a {
    text-decoration-line: none;
}

@media screen and (max-width : 768px){

.name p {
  padding-left: 15%;
  padding-right: 1%;
  font-size: 15px;
}

img{
  width:40px;
  height:40px;
  padding-left: 10%;
}

#title {
  padding-left:23%;
  font-size:15px;
}

.title1{
  padding-right: 30%;
}
}

</style>
