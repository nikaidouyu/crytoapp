<template>
  <div class="detail">
  <Header2 />
  <router-view/>
  <div class="back-color">
    <div class="name">
      <p>BTC</p>
      <p>ビットコイン</p>
    </div>
    <p class="time">YYYY/MM/DD HH:MM:SS</p>
    <p class="price">¥0,000,00.00</p>
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
  background-color: #E5E5E5;
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
  padding-bottom:150px;
}


.price {
  text-align: center;
  padding-bottom:125px;
}

@media screen and (max-width : 768px){
	
}

</style>
