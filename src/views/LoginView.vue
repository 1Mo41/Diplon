<template>
  <HeaderMain />
  <div class="conteinerLogin">
   <div class="h2"> <h2>Авторизация</h2></div>
<div class="formLogin">

    <form @submit.prevent="onSubmit">
      <div class="field">
        <div><label for="username">Логин:</label></div>
        <input id="username" v-model="username" type="text">
      </div>

      <div class="field">
        <div><label for="password">Пароль:</label></div>
        <input v-model="password" type="password" id="password" required />
      </div>
      <button type="submit">{{ buttonLabel }}</button>
    </form>
</div>
  </div>
    <hr />
    <h2 :class="{ 'error': !authorized, 'success': authorized }">{{ statusMessage }}</h2>
<!--    <pre>{{ jsonResponse }}</pre>-->

  <FooterMain />
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
.login{
  display: flex;
  flex-direction: column;
}
.loginLabel{
  margin: 20px;
}
.conteinerLogin{
  margin-top:100px;
  background-color: #b1daea;
  height: 500px;
  width: 500px;
  margin-left: 700px;
}
.formLogin{
  padding-top: 100px;
}
.field{
  margin: 20px;
}
.h2{
  padding-top: 20px;
}
input{
  border-radius: 5px;
}
</style>