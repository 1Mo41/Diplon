<template>
  <HeaderMain />
  <h2>Авторизация</h2>
  <div id="app">
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
    <hr />
    <h2 :class="{ 'error': !authorized, 'success': authorized }">{{ statusMessage }}</h2>
<!--    <pre>{{ jsonResponse }}</pre>-->
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
</style>