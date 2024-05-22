<template>
  <div class="fonchi">
    <HeaderMain/>
      <h2 class="str">Главная Страница </h2>
      <div class="polt">
        <div class="category">
          <div class="dropdown">
            <p>Ремонт</p>
            <button class="dropbtn">Компьютеры</button>
            <div class="dropdown-content">
              <a href="acer">Acer</a>
              <a href="asusDesc">Asus</a>
              <a href="dell">Dell</a>
            </div>
          </div>
          <div class="dropdown">
            <p>Ремонт</p>
            <button class="dropbtn">Телефоны</button>
            <div class="dropdown-content">
              <a href="apple">Apple</a>
              <a href="xiaomi">Xiaomi</a>
              <a href="samsung">Samsung</a>
            </div>
          </div>
          <div class="dropdown">
            <p>Ремонт</p>
            <button class="dropbtn">Ноутбуки</button>
            <div class="dropdown-content">
              <a href="hp">Hp</a>
              <a href="asus">Asus</a>
              <a href="samsungLap">Samsung</a>
            </div>
          </div>
          <div class="dropdown">
            <p>Ремонт</p>
            <button class="dropbtn">Планшеты</button>
            <div class="dropdown-content">
              <a href="samsungTable">Samsung</a>
              <a href="ursus">Ursus</a>
              <a href="dexp">Dexp</a>
            </div>
          </div>
        </div>
      </div>
      <div class="fon">
        <div class="escription">
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
      <h2 class="h2"><p class="h3">КОМПОФФ — лучшая и самая качественная сервисная сеть
        по ремонту смартфонов и ноутбуков в Томской области</p></h2>
  </div>
    <div class="fonchi2">
      <div class="slide">
        <Slider/>
      </div>
      <!--   <div class="Calcul">-->
      <!--      <Calculator/></div>-->
      <div class="conteiner1">
        <div class="conteiner2">
          <h2>Почему выбирают нас?</h2>
        </div>
        <div class="content">
          <div class="cont">
            <img src="../assets/icon1.png" alt="" height="100px" width="100px">
            <h2 class="Rigth">Бесплатная диагностика</h2>
            <p class="Rigth">Диагностика неисправности бесплатна при продолжении работ. Вы оплачиваете только стоимость работ и только
              за результат.</p>
          </div>
          <div class="cont">
            <img src="../assets/icon2.png" alt="" height="100px" width="100px">
            <h2 class="Rigth">Выезд в течение 45 минут</h2>
            <p class="Rigth">Мастер выезжает по указанному Вами адресу через 5-7 минут после подтверждения заявки. Выезд мастера не
              оплачивается. Работаем круглосуточно и без выходных.</p>
          </div>
          <div class="cont">
            <img src="../assets/icon4.png" alt="" height="100px" width="100px">
            <h2 class="Rigth">Гарантия на работы</h2>
            <p class="Rigth">Заключим договор и предоставим гарантийный талон на сервисное обслуживание до 12 месяцев для вашей
              уверенности.</p>
          </div>
          <div class="cont">
            <img src="../assets/icon3.png" alt="" height="100px" width="100px">
            <h2 class="Rigth">Опытные мастера</h2>
            <p class="Rigth">Сертифицированные специалисты со стажем работы более 10 лет. Собственный склад запчастей. Ремонтируем
              только на качественном оборудовании.</p>
          </div>
        </div>
      </div>
      <div class="Reiting">
        <h2>Рейтинг нашего сайта!</h2>
        <div class="reit">
          <h3>4,25</h3>
        </div>
      </div>
    </div>
   
  <FooterMain/>
</template>

<script>
import HeaderMain from '@/components/HeaderMain.vue'
import FooterMain from '@/components/FooterMain.vue'
import Calculator from '@/components/Calculator.vue'
import Slider from '@/components/Slider.vue'
import Filter from '@/components/Filter.vue'

export default {
  name: 'MainView',
  components: {
    HeaderMain,
    FooterMain,
    Slider,
    Calculator,
    Filter
  },
  data() {
    return {
      expression: '',
      coast: 0,
      isDarkMode: false
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
    toggleTheme() {
      this.isDarkMode = !this.isDarkMode;
    }
  }

}

</script>

<style>
.reit{
  margin-top: 15px;
  
}
.Reiting{
  margin-top: 130px;
}
 .fon{
  padding-top:200px;
 }
.footer{
  padding-top: 200px
}
.descP{
  margin-left:20px;
}
li,a,p,h1,h2,h3{
  color: #fff;
}
.h2{
 margin-top: 100px;
}
.fonchi{
  background:url("../assets/fon2.jpg")  no-repeat;
}
footer{
  background-color: #1C1C1C;
}
#app{
  background-color: #1C1C1C;
}
.slide{
  margin-top:150px;
}
#createApp{
  background-color: #fefefe;
  margin: auto;
  width: 50%;
  margin-top: 40px;
  margin-bottom: 40px;
  border-radius: 100px;
}
.createRequest{
  font-size: 20px;
  color: black;
}
.button{
  margin-top: 10px;
  margin-left: 1850px;
  width:30px;
  height:30px;
  background: url("../assets/Tema1.png") no-repeat center center;;
}
.Rigth{
  text-align: left;
  padding-top: 10px;
}

.conteiner1 {
  margin-top: 500px;
}
.cont {
  text-align: right;
  margin-left: 50px;
  margin-right: 50px;
}

.content {
  display: flex;
  margin-top: 100px;

  width: auto;
  height: 220px;
}

.slide {
  margin-top: 100px;
  display: flex;
  justify-content: center;
  height: 200px;
}

.slides > img {
  width: 100px;
  height: 100px;
  object-fit: cover;
}

.fon {
  display: flex;
  justify-content: space-between;
}

.description {
  background-color: #42b983;
  height: 500px;
  width: 50%;
}

.cont {
  width: 30%;
  text-align: center;
}

p {
  line-height: 30px;
}

.image {
  background: url("../assets/Kartinka.jpg") no-repeat center center;;
  background-size: cover;
  min-height: 100%;
  -webkit-box-shadow: 0px 12px 5px -1px rgba(34, 60, 80, 0.2);
  -moz-box-shadow: 0px 12px 5px -1px rgba(34, 60, 80, 0.2);
  box-shadow: 0px 12px 5px -1px rgba(34, 60, 80, 0.2);
}

.Kartinka {
  height: 500px;
  width: 50%;

}

.descP {
  margin-top: 30px;
  font-size: 30px;
}

p, h1, h2, h3, a {
  font-family: "Comic Sans MS", "Arial", sans-serif;
  color:#fff;
}

li {
  padding: 10px;
  text-align: start;
  margin-left: 100px;
}

.h3, .str {
  font-size: 50px;
  line-height: 70px;
}

.polt {
  margin-top: 30px;
  margin-bottom: 00px;
}

h2 {
  margin-top: 20px;
}
.dropbtn {
  background-color: grey;
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
  box-shadow: 0px 8px 16px 0px rgba(0, 0, 0, 0.2);
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
.dropdown-content a:hover {
  background-color: #ddd;
}

/* Show the dropdown menu on hover */
.dropdown:hover .dropdown-content {
  display: block;
}

/* Change the background color of the dropdown button when the dropdown content is shown */
.dropdown:hover .dropbtn {
  background-color:#01556a;
}

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
li{
  list-style-type: none;
}
</style>