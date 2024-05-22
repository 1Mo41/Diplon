<template>
  <HeaderMain/>
  <h2>Контакты</h2>
  <div class="contacts">
    <div class="contact-block">
    <h2>Томская обл, г Томск, ул Вавилова, д 10, кв 10</h2>
    <p>Телефон: +7 (961) 095-90-28</p>
    <p>ИП Козлов Е. М., ИНН 7017355029, ОГРНИП 1147017010271</p>
    <p>kompoff@kompoff.com</p>
    <h2>Выезд мастера и прием звонков: Круглосуточно</h2>
    <ul> <b>Режим работы офиса:</b>
      <li class="li2">Понедельник: 10:00-19:00</li>
      <li class="li2">Вторник: 10:00-19:00</li>
      <li class="li2">Среда: 10:00-19:00</li>
      <li class="li2">Четверг: 10:00-19:00</li>
      <li class="li2">Пятница: 10:00-19:00</li>
      <li class="li2">Суббота: 12:00-17:00</li>
      <li class="li2">Воскресение:Чилим</li>
    </ul>
    </div>
    <div id="mapa" style="height: 500px; width: 500px;" class="map">
    <Mapa/>
  </div>
  </div>
  <FooterMain/>
</template>


<script>
import HeaderMain from "@/components/HeaderMain.vue";
import FooterMain from "@/components/FooterMain.vue";
import Mapa from "@/components/Mapa.vue";
export default {
  name: 'CreateUserView',
  components: {
    HeaderMain,
    FooterMain,
    Mapa,
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
.map{
  margin-right: 60px;
}
#mapa {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
h1{
  color: #fff;
}
body{
  background:url("../assets/fonchik.jpg")  no-repeat center center;
}
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
p,h2,b{
  padding: 10px;
  color: #fff;
}
.contacts{
  display: flex;
  justify-content: space-between;
}
ul{
  padding: 20px;
}
.li2{
  padding: 10px;
  list-style-type: none;
  color: #fff;
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