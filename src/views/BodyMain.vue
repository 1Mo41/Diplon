<template>
  <HeaderMain/>
  <div :class="{ 'dark-theme': isDarkMode }">
    <button class="button" @click="toggleTheme"></button>

  <h2>Контакты</h2>
  <div class="contacts">
  <div class="contact-block">
    <h2>Адрес: г. Томск,Герасименко, 1/13</h2>
    <p>Телефон: +7 (961) 095-90-28</p>
    <p>ИП Козлов Е. М., ИНН 7017355029, ОГРНИП 1147017010271</p>
    <p>kompoff@kompoff.com</p>
    <h2>Выезд мастера и прием звонков: Круглосуточно</h2>
 <ul> <b>Режим работы офиса:</b>
    <li>Понедельник: 10:00-19:00</li>
    <li>Вторник: 10:00-19:00</li>
    <li>Среда: 10:00-19:00</li>
    <li>Четверг: 10:00-19:00</li>
    <li>Пятница: 10:00-19:00</li>
    <li>Суббота: 12:00-17:00</li>
    <li>Воскресение:Чилим</li>
 </ul>
  </div>
    <div class="map">
    <h2 class="with">Карта</h2></div>
  </div>

  </div>
  <FooterMain/>
</template>


<script>
import HeaderMain from "@/components/HeaderMain.vue";
import FooterMain from "@/components/FooterMain.vue";

export default {
  name: 'CreateUserView',
  components: {
    HeaderMain,
    FooterMain
  },  data() {
    return {
      isDarkMode: false
    };
  },
  methods: {
    toggleTheme() {
      this.isDarkMode = !this.isDarkMode;
    }
  }

};
</script>

<style>

.button{
  margin-top: 10px;
  margin-left: 1850px;
  width:30px;
  height:30px;
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
.with{
  color: #f0f0f0;
}
  .dark-theme p {
    color: var(--text-color);
    background-color: var(--bg-color);
  }

.aaa{
  text-align: center;
 line-height: 50px;
}
p{
  padding: 10px;
}
.contacts{
  display: flex;
  justify-content: space-between;
}
ul{
  padding: 20px;
}
li{
  padding: 10px;
  list-style-type: none;
}
h2{
  margin: 10px;
}
.contact-block{
  margin-left: 50px;
  margin-top: 50px;
}
.map{
  background-color:grey ;
  width: 50%;
}
</style>