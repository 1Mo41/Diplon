<template>
  <HeaderMain/>
  <div class="main">
    <h2 class="str">Главная Страничка </h2>
    <div class="polt">
      <div class="category">
        <div class="dropdown">
          <p>Ремонт</p>
          <button class="dropbtn">Компьютеры</button>
          <div class="dropdown-content">
            <a href="#">Acer</a>
            <a href="#">Asus</a>
            <a href="#">Dell</a>
          </div>
        </div>
        <div class="dropdown">
          <p>Ремонт</p>
          <button class="dropbtn">Телефоны</button>
          <div class="dropdown-content">
            <a href="#">Aphone</a>
            <a href="login">Xiaomi</a>
            <a href="#">Samsung</a>
          </div>
        </div>
        <div class="dropdown">
          <p>Ремонт</p>
          <button class="dropbtn">Ноутбуки</button>
          <div class="dropdown-content">
            <a href="#">Hp</a>
            <a href="#">Asus</a>
            <a href="#">Samsung</a>
          </div>
        </div>
        <div class="dropdown">
          <p>Ремонт</p>
          <button class="dropbtn">Планшеты</button>
          <div class="dropdown-content">
            <a href="#">Samsung</a>
            <a href="#">Ursus</a>
            <a href="#">Dexp</a>
          </div>
        </div>
      </div>
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

    <div class="slide"><Slider/></div>
<!--   <div class="Calcul">-->
<!--      <Calculator/></div>-->
    <div class="content">
      <h2>Качественные детали на популярные модели всегда в наличии</h2>

 </div>
  <div class="help">
    <div class="helpLeft">
      <p class="consul">

      </p>
    </div>
    <div class="helpRight"></div>
  </div>
  </div>
  <FooterMain/>
</template>

<script>
import HeaderMain from '@/components/HeaderMain.vue'
import FooterMain from '@/components/FooterMain.vue'
import Calculator from '@/components/Calculator.vue'
import BodyMain from '@/components/BodyMain.vue'
import Slider from '@/components/Slider.vue';
export default {
  name: 'MainView',
  components: {
    HeaderMain,
    FooterMain,
    Slider,
    Calculator,
    BodyMain
  },
  data() {
    return {
      expression: '',
      coast: 0
    };
  },
  methods: {
    appendToExpression(value) {
      this.expression += value;
    },
    clearExpression() {
      this.expression = '';
    },
    calculateResult() {
      try {
        this.expression = eval(this.expression).toString();
      } catch (error) {
        console.error('Calculation error:', error);
        this.expression = 'Error';
      }
    },
  }

}

</script>

<style>
.content{
  display: flex;
  justify-content: center;
  margin-top: 100px;
}
.slide{
  margin-top: 100px;
  display: flex;
  justify-content: center;
  height: 200px;
}
.slides > img{
  width: 100px;
  height: 100px;
  object-fit: cover;
}
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
  margin: 10px;
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

.page-title {
  text-align: center;
}

.slider-container {
  position: relative;
  width: 600px;
  height: 400px;
  margin: 0 auto;
  overflow: hidden;
}

.slider {
  display: flex;
  transition: transform 0.5s ease-in-out;
}

.slider img {
  width: 100%;
  height: 100%;
  object-fit: cover;
}

.prev-button,
.next-button {
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  width: 50px;
  height: 50px;
  background-color: transparent;
  border: none;
  font-size: 24px;
  color: white;
}

.prev-button {
  left: 10px;
}

.next-button {
  right: 10px;
}

</style>