<template>
  <HeaderMain/>
  <div class="main">
    <h2 class="str">Главная Страничка </h2>
    <div class="polt">
<!--      <p >Наша кантора самая лучшая в мире по ремонту ПК, кто не согласен, тот артавод с бутылкой в жопе</p>-->
    </div>

    <div class="fon">
      <div class="description">
        <p class="descP">Ремонт компьютеров,ноутбуков и телефонов в Томске </p>
        <ul class="desc">
          <li class="desc"><p class="descP">Ремонт при вас за 20 минут от 290р</p></li>
          <li class="desc"><p class="descP">Бесплатная диагностика</p></li>
          <li class="desc"><p class="descP">Профессиональные мастера</p></li>
          <li class="desc"><p class="descP">Комплектующие класса "Original"</p></li>
        </ul>
      </div>
      <div class="Kartinka">
        <div class="image"></div>
      </div>
    </div>
    <h2><p class="h2">КОМПОФФ — лучшая и самая качественная сервисная сеть
      по ремонту смартфонов и ноутбуков в Томской области</p></h2>
    <div class="category">
      <div class="dropdown">
        <button class="dropbtn">Ремонт</button>
        <div class="dropdown-content">
          <a href="#">Link 1</a>
          <a href="#">Link 2</a>
          <a href="#">Link 3</a>
        </div>
      </div>
    </div>
  </div>
  <FooterMain/>
</template>

<script>
import HeaderMain from '@/components/HeaderMain.vue'
import FooterMain from '@/components/FooterMain.vue'

export default {
  name: 'MainView',
  components: {
    HeaderMain,
    FooterMain
  },
}
</script>

<style>
.fon{
  display: flex;
  justify-content: space-between;
}
.description{
  background-color: #42b983;
  height: 500px;
  width: 50%;
}
.image{
  background:url("../assets/Kartinka.jpg") no-repeat center center;;
  background-size: cover;
  min-height:100%;
  -webkit-box-shadow: 0px 12px 5px -1px rgba(34, 60, 80, 0.2);
  -moz-box-shadow: 0px 12px 5px -1px rgba(34, 60, 80, 0.2);
  box-shadow: 0px 12px 5px -1px rgba(34, 60, 80, 0.2);
}
.Kartinka{
  height: 500px;
  width: 50%;
}
.descP{
  margin-top: 30px;
  font-size: 30px;
}
p,h1,h2,h3,a {
  font-family: "Comic Sans MS", "Arial", sans-serif;
}
li{
  padding: 10px;
  text-align: start;
  margin-left: 100px;
}
p{
  color: black;

}
.h2, .str{
  font-size: 50px;
}
.polt{
  margin-top:30px;
  margin-bottom: 50px;
}
h2{
  margin-top: 20px;
}
body{
  background-color: #dae5ea;
}
.dropbtn {
  background-color: #4CAF50;
  color: white;
  padding: 16px;
  font-size: 16px;
  border: none;
}

/* The container <div> - needed to position the dropdown content */
.dropdown {
  position: relative;
  display: inline-block;
}

/* Dropdown Content (Hidden by Default) */
.dropdown-content {
  display: none;
  position: absolute;
  background-color: #f1f1f1;
  min-width: 160px;
  box-shadow: 0px 8px 16px 0px rgba(0,0,0,0.2);
  z-index: 1;
}

/* Links inside the dropdown */
.dropdown-content a {
  color: black;
  padding: 12px 16px;
  text-decoration: none;
  display: block;
}

/* Change color of dropdown links on hover */
.dropdown-content a:hover {background-color: #ddd;}

/* Show the dropdown menu on hover */
.dropdown:hover .dropdown-content {display: block;}

/* Change the background color of the dropdown button when the dropdown content is shown */
.dropdown:hover .dropbtn {background-color: #3e8e41;}

</style>