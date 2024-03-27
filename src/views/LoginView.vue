<template>
  <HeaderMain/>
  <h2>Авторизация</h2>

  <form action="" class="login">
    <labe class="loginLabel">Логин<input type="username" name="" id=""></labe>
    <labe class="loginLabel">Пароль<input type="password" name="" id=""></labe>
    <labe class="loginLabel"><button type="submit">Авториация</button></labe>

  </form>
</template>



<script>
import HeaderMain from "@/components/HeaderMain.vue";

export default {
  name: 'LoginView',
  components: {
    HeaderMain
  }
}
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