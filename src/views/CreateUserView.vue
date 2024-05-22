<template>
  <HeaderMain/>
  <!-- <div :class="{ 'dark-theme': isDarkMode }"> -->
    <!-- <button class="button " @click="toggleTheme"></button> -->
    <div class="conteinerCreate ">
      <div class="regaLeft">
        <div class="refaUp"> 
          <div class="Rl"><p>Тут много текста!</p></div>
          <div class="Rl"><p>Понял</p></div>
        </div>
        <div class="refaDown"> 
          <div class="Rl"><p>Не веришь?</p></div>
          <div class="Rl"><p>фывфывфыв</p></div>
        </div>
      </div>
      <div class="formLogin">
        <div class="h2"><h2>Регистрация</h2></div>
        <div class="registr">
          <pre id="jsonPre">{{ jsonData }}</pre>
          <input id="username" v-model="username" type="text" placeholder="Login">
          <input id="email" v-model="email" type="text" placeholder="Email">
          <input id="password" v-model="password" type="password" placeholder="Password">
          <button @click="onSubmit" ref="button">Зарегистрироваться</button>
          <div id="status" :class="statusClass">{{ statusText }}</div>
          <!-- <p class="padding">Нажимая расположенную выше кнопку «Зарегистрироваться»,
          я принимаю условия и соглашаюсь с , <a href="" class="b">Политикой конфиденциальности</a>, <a href="" class="b">Публичной
          офертой.</a></p> -->
        </div>
      </div>
    
    </div>
  <!-- </div> -->
  <FooterMain/>
</template>

<script>
import HeaderMain from '@/components/HeaderMain.vue'
import FooterMain from '@/components/FooterMain.vue'

export default {
  name: 'CreateUserView',
  components: {
    HeaderMain,
    FooterMain
  },
  data() {
    return {
      email: '',
      username: '',
      password: '',
      statusText: '',
      statusClass: '',
      isDarkMode: false
    }
  },
  methods: {
    async onSubmit() {
      this.$refs.button.innerText = "Загрузка...";
      const res = await fetch("https://5fd54060406a6fc7.mokky.dev/register", {
        method: "POST",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json"
        },
        body: JSON.stringify({
          username: this.username,
          email: this.email,
          password: this.password
        })
      });
      this.updateStatus(res.ok);
      if (res.ok) {
        const json = await res.json();
        console.log(json);
        this.jsonData = JSON.stringify(json, null, 2);
      }
      this.$refs.button.innerText = "Зарегистрироваться";
      console.log(1);
    },
    updateStatus(ok) {
      if (ok) {
        this.statusText = "Успешно!";
        this.statusClass = "success";
      } else {
        this.statusText = "Ебать ты бот!";
        this.statusClass = "error";
      }
    },
    toggleTheme() {
      this.isDarkMode = !this.isDarkMode;
    }
  }

}
</script>
<style>
.Rl{
  padding: 5px;
}
.regaLeft{
  display: flex;
  justify-content:space-around ;
}
input,button{
  width: 200px;
  height: 30px;
  margin: 5px
}
.registr {
  display: flex;
  flex-direction: column;
}

.rega {
  margin: 20px;
}
.footer{
  margin-top: 300px
}
.conteinerCreate {
  display: flex;
  justify-content: space-around;
  margin-top: 200px;
}
h1{
  color:#fff ;
}

.h2{
  padding-top: 20px;
  color: #fff;
}

input {
  border-radius: 5px;
}


.b {
  color: black;
}

.padding {
  margin-top: 20px;
}

.button {
  margin-top: 10px;
  margin-left: 1850px;
  width: 30px;
  height: 30px;
  background: url("../assets/Tema1.png") no-repeat center center;;
}

body {
  background-color: #f0f0f0;
  color: #333;
}

.dark-theme {
  --bg-color: #333;
  --text-color: #f0f0f0;
}
.dark-theme .conteinerCreate{
  --bg-color: #333;
  --text-color: #f0f0f0;
}

.dark-theme p {
  color: var(--text-color);
  background-color: var(--bg-color);
}.dark-theme a {
   color: var(--text-color);
   background-color: var(--bg-color);
 }
li{
  list-style-type: none;
  color: #fff ;
}
p{
  color:#fff;
}
body{
  background:url("../assets/fon2.jpg")  no-repeat center center;
}
</style>