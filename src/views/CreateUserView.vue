<template>
  <HeaderMain/>
  <h2>Регистрация</h2>
  <div class="registr">
  <pre id="jsonPre">{{jsonData}}</pre>
    <label class="rega">Логин<input id="username" v-model="username" type="text"></label>
    <label class="rega">Почта<input id="email" v-model="email" type="text"></label>
    <label class="rega">Пароль<input id="password" v-model="password" type="password"></label>
  <div id="status" :class="statusClass">{{statusText}}</div>
    <button @click="onSubmit" ref="button">Зарегистрироваться</button>
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
      statusClass: ''
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
    }
  }

}
</script>
<style>
.registr{
  display: flex;
  flex-direction: column;
}
.rega{
  margin: 20px;
}
</style>