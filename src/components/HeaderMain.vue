<template>
  <div class="header">
  <div class="headerL">
    <a href="main" class="headerA">Логотип</a>
  </div>
    <div class="nameContora"><h1>КООМПОФФ</h1></div>
  <div class="headerR">
    <a href="about" class="headerA">О нас |</a>
    <a href="contact" class="headerA">Контакты |</a>
    <a href="rega" class="headerA">Регистрация |</a>
    <a href="login" class="headerA">Авторизация |</a>
    <a href="help" class="headerA">Онлайн Хелп |</a>

  </div>

  </div>
      <div class="headerLine"></div>
</template>



<script>
export default {
  name:'HeaderMain',
  props: {
    headermain: String
  },
  data() {
    return {
      isDarkMode: false
    };
  },
  methods: {
    toggleTheme() {
      this.isDarkMode = !this.isDarkMode;
    }
  }
}
</script>


<style>
*{
  padding:0;
  margin:0;
}
body {
  background-color: #f0f0f0;
  color: #333;
}
.dark-theme {
  --bg-color: #333;
  --text-color: #f0f0f0;
}

.dark-theme p {
  color: var(--text-color);
  background-color: var(--bg-color);
}
.dark-theme  {
  color: var(--text-color);
  background-color: var(--bg-color);
}
.nameContora{
  margin-left: 400px;
  margin-top: 10px ;
}
a{
  text-decoration:none;
  color: #b1daea;
}
h1{
  color: #b1daea;
}
.header{
  display: flex;
  justify-content: space-between;
  background-color: #01556a;
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