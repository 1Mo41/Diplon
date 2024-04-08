<template>
  <HeaderMain/>
  <div :class="{ 'dark-theme': isDarkMode }">
    <button class="button " @click="toggleTheme"></button>
    <div class="conteinerCreate ">
      <div class="h2"><h2>Регистрация</h2></div>
      <div class="formLogin">
        <div class="registr">
          <pre id="jsonPre">{{ jsonData }}</pre>
          <label class="rega">Логин<input id="username" v-model="username" type="text"></label>
          <label class="rega">Почта<input id="email" v-model="email" type="text"></label>
          <label class="rega">Пароль<input id="password" v-model="password" type="password"></label>
          <div id="status" :class="statusClass">{{ statusText }}</div>
          <button @click="onSubmit" ref="button">Зарегистрироваться</button>
        </div>
      </div>
      <p class="padding">Нажимая расположенную выше кнопку «Зарегистрироваться»,
        я принимаю условия и соглашаюсь с , <a href="" class="b">Политикой конфиденциальности</a>, <a href="" class="b">Публичной
          офертой.</a></p>
    </div>
  </div>
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
        this.statusText = "Не зарегистрирован!";
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
.registr {
  display: flex;
  flex-direction: column;
}

.rega {
  margin: 20px;
}

.conteinerCreate {
  margin-top: 100px;
  height: 550px;
  width: 500px;
  margin-left: 700px;
}

.formLogin {
  padding-top: 100px;
}

.h2 {
  padding-top: 20px;
}

input {
  border-radius: 5px;
}

button {
  width: 200px;
  margin-top: 100px;
  margin-left: 160px;
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
}
</style>