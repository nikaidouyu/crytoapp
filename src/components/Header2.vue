<template>
  <div class="header">
    <p>CrytoApp</p>
    <div class="logout">
      <router-link to="login"><p>ログアウト</p></router-link>
    </div>
  </div>
</template>

<script>

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
}

a {
  text-decoration-line:none ;
}


</style>
