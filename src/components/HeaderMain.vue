<template>
  <div class="header">
  <div class="headerL">
    <a href="main" class="headerA">Логотип</a>
  </div>
  <div class="headerR">
    <a href="about" class="headerA">О нас</a>
    <a href="" class="headerA">Контакты</a>
    <a href="rega" class="headerA">Регистрация</a>
    <a href="login" class="headerA">Авторизация</a>
    <a href="" class="headerA">Онлайн Хелп</a>

  </div>
  </div>
      <div class="headerLine"></div>
</template>



<script>
export default {
  name:'HeaderMain',
  props: {
    headermain:String
  }
}
</script>


<style>
*{
  padding:0;
  margin:0;
}
a{
  text-decoration:none;
  color: black;
}
.header{
  display: flex;
  justify-content: space-between;
  background-color: #64DE8B;
  height: 100px;
}
.headerL{
  display: flex;
  justify-content: flex-start;
  padding: 5px;
}
.headerR{
  display: flex;
  justify-content: flex-end;
  padding: 5px;

}
.headerA{
padding: 5px;
}
.headerLine{
  border: 1px solid black;
}
</style>