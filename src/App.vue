<template>

    <div class="header">
      <div class="logo"></div>
      <ul class="ul1">
        <li class="headerLi"><router-link to="/about">О нас</router-link></li>
        <li class="headerLi"><router-link to="/about">Контакты</router-link></li>
        <li class="headerLi"><router-link to="/about">Регистрация</router-link></li>
        <li class="headerLi"><router-link to="/about">Авторизация</router-link></li>
      </ul>

    </div>
</template>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
.ul1{
display: flex;
  justify-content: flex-end;
}
.headerLi{
  display: inline;

  margin: 5px;
}

</style>
