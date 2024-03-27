<template>
  <HeaderMain/>
  <h2>Регистрация</h2>
  <form action="" class="registr">
    <label class="rega">Логин<input type="username" name="" id="22"></label>
    <label class="rega">Ф.И.О<input type="nameFIO" name="" id="22"></label>
    <label class="rega">Почта
    <input type="email" name="emain" id="22"></label>
    <label class="rega">Пароль
    <input type="password" name="" id="22"></label>
    <label class="rega"> Повторите Пароль<input type="password" name="" id="22"></label >
    <label class="rega"><input type="checkbox" name="" id="">Принять пользовательскиое соглашение</label>
    <label class="rega"><button type="submit">Зарегистрироваться</button></label>

  </form>

</template>

<script>
import HeaderMain from "@/components/HeaderMain.vue";

export default {
  name: 'CreateUserView',
  components: {
    HeaderMain
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