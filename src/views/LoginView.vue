<template>
  <HeaderMain />
  <div class="conteinerLogin">
  
    <div class="formLogin">
    <div class="contLeft">
      <div class="What">
        <div class="up"> <img class="imUp" src="../assets/icon1.png" alt=""></div>
        <div class="up"> <img class="imUp" src="../assets/icon2.png" alt=""></div>
  
        
      </div>

      <div class="What">
        <div class="down"> <img class="imUp" src="../assets/icon3.png" alt=""></div>
        <div class="down"> <img class="imUp" src="../assets/icon4.png" alt=""></div>        
    
      </div>
    </div>
    <div class="contRigth">
      <div class="h2"><h2>Авторизация</h2></div>
      <form @submit.prevent="onSubmit">
      <div class="field">
        <input id="username" v-model="username" type="text" placeholder="Login" required >
      </div>
      <div class="field">
        <input v-model="password" type="password" id="password" placeholder="Password" required />
      </div>
      <button type="submit">{{ buttonLabel }}</button>
    </form>
  </div>
</div>
  </div>
  <FooterMain />
</template>

<script>
import HeaderMain from '@/components/HeaderMain.vue'
import FooterMain from '@/components/FooterMain.vue'
export default {
  name: 'CreateUserView',
  components: {
    HeaderMain,
    FooterMain,
  },
  data() {
    return {
      email: '',
      password: '',
      username: '',
      authorized: false,
      buttonLabel: 'Вход',
      statusMessage: 'Не авторизован',
      jsonResponse: ''
    };
  },
  methods: {
    async onSubmit() {
      this.buttonLabel = 'Загрузка...';
      const res = await fetch("https://5fd54060406a6fc7.mokky.dev/auth", {
        method: "POST",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json"
        },
        body: JSON.stringify({
          username: this.username,
          password: this.password
        })
      });

      this.authorized = res.ok;
      this.statusMessage = this.authorized ? 'Успешно!' : 'Не авторизован!';

      if (this.authorized) {
        const json = await res.json();
        this.jsonResponse = JSON.stringify(json, null, 2);
        console.log(json);
      }

      this.buttonLabel = 'Вход';
    }
  }
};
</script>
<style>
header{
  margin-top: 20px;
}
.formLogin{
  display:flex;
  justify-content: space-around;
  margin-bottom: 100px;
}
.field{
  margin: 20px;
}
.h2{
  padding-top: 20px;
  color: #fff;
}
h2,h1{
  color:#fff;
}
input{
  border-radius: 5px;
}
body{
  background:url("../assets/fon2.jpg")  no-repeat center center;
}
.imUp{
  width:150px ;
  height: 150px;
  padding: 20px;
}
.conteinerLogin{
  margin-top: 150px;
}
.What{
  display: flex;

}
label{
  color: #fff;
}
input{
  height: 30px;
  width: 200px;
}
button{
  height: 30px;
  width: 200px;
}
</style>