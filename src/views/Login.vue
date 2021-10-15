<template>
  <div class="loguin">
  <Header />
  <router-view/>
    <div class="back-color">
      <div class="back">
        <div class="email">
          <p>email:</p>
          <input type="email">
        </div>
        <div class="pass">
          <p>password:</p>
          <input type="password">
        </div>
        <div class="login">
          <router-link to="list"><button>ログイン</button></router-link>
          <router-link to="/"><p>会員登録がまだの方</p></router-link>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Header from "../components/Header";
export default {
  components: {
    Header
  },
};
</script>

<style scoped>

.back-color {
  background-image: url("../assets/photo-1554386690-cc2d52c7f3d6.jpeg");
  background-size: 100%;
  background-position: -200px;
  width: 100%;
  min-height: 90vh;
  position: relative;
}

.back {
  background:white;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  -webkit-transform: translate(-50%, -50%);
  -ms-transform: translate(-50%, -50%);
  height: 45%;
  width: 37%;
  border-radius: 15px;
} 

.email{
  display:flex;
  justify-content: flex-start;
  padding-left:40px;
  padding-top:60px;
  padding-bottom:20px;
}

.pass{
  display: flex;
  justify-content: flex-start;
  padding-left:40px;
  padding-top:20px;
  padding-bottom:30px;
}

.login{
  text-align: center;
  line-height: 45px;
  display: flex;
  flex-direction: column;
}

.email p{
  padding-right:90px;
  font-weight: bold;
  font-size: 20px;
}

.email input {
  width: 45%;
  font-size: 20px;
}

.pass p{
  padding-right:40px;
  font-weight: bold;
  font-size: 20px;
}

.pass input {
  width: 45%;
  font-size: 20px;
}

.login button{
  font-size:20px;
  width: 25%;
  height: 35px;
  border-radius: 10px;
  background-color: black;
  color:white;
}

.login p{
  font-size: 23px;
  padding-top:10px;
  color: black;
  display: inline;
}


.login p:hover {
  opacity: 0.5;
  text-decoration-line: underline;
}

button:hover {
  opacity: 0.5;
}

a {
  text-decoration-line:none ;
}



</style>
