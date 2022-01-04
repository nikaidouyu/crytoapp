<template>
  <div class="header">
    <p>CrytoApp</p>
    <div class="logout">
      <p @click="logout">ログアウト</p>
    </div>
  </div>
</template>

<script>
import firebase from 'firebase/app';
export default{
  methods:{
    logout(){
      firebase
      .auth()
      .signOut()
      .then(()=>{
        alert("ログアウトが完了しました。")
        this.$router.replace('/login')
      })
    }
  }
}
</script>

<style scoped>
.header{
  background-color:white;
  padding:15px 0 15px 50px;
  display: flex;
  align-items: center;
  justify-content: space-between;
}

.header p{
 font-size:50px;
}

.logout p {
  font-size: 20px;
  padding-right: 50px;
  color: black;
}

.logout p:hover {
  opacity: 0.5;
  text-decoration-line: underline;
  cursor:default;
}

a {
  text-decoration-line:none ;
}

@media screen and (max-width : 768px){
  .header p {
    font-size:30px;
  }

  .logout p {
    font-size:15px;
  }
}



</style>
