<template>
  <div class="loguin">
  <Header />
  <router-view/>
    <div class="back-color">
      <div class="back">
        <div class="email">
          <p>email:</p>
          <input v-model="email" type="email" required>
        </div>
        <div class="pass">
          <p>password:</p>
          <input v-model="password" type="password" required>
        </div>
        <div class="login">
         <button @click="login">ログイン</button>
         <router-link to="/"><p>会員登録がまだの方</p></router-link>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Header from "../components/Header";
import firebase from 'firebase/app';

export default {
  components: {
    Header
  },
  data() {
    return {
      email: null,
      password: null,
    }
  },
  methods: {
    login() {
      if (!this.email || !this.password) {
        alert('メールアドレスまたはパスワードが入力されていません。')
        return
      }
      firebase
        .auth()
        .signInWithEmailAndPassword(this.email, this.password)
        .then(() => {
            alert("ログインが完了しました。")
            this.$router.push('/list')
          })
        .catch((error) => {
          switch (error.code) {
            case 'auth/invalid-email':
              alert('メールアドレスの形式が違います。')
              break
            case 'auth/user-disabled':
              alert('ユーザーが無効になっています。')
              break
            case 'auth/user-not-found':
              alert('ユーザーが存在しません。')
              break
            case 'auth/wrong-password':
              alert('パスワードが間違っております。')
              break
            default:
              alert('エラーが起きました。しばらくしてから再度お試しください。')
              break
          }
        })
    },
  },
}
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
  height: 310px;
  width: 530px;
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
  margin:10px auto;
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
  cursor: default;
}

button:hover {
  opacity: 0.5;
}

a {
  text-decoration-line:none ;
}

@media screen and (max-width : 768px){

.back-color {
  /* background-image: url("../assets/photo-1554386690-cc2d52c7f3d6.jpeg"); */
  background-size: cover;
  height: 50px;
}





}

</style>