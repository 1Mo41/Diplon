<template>
  <HeaderMain/>
  <h2>Контакты</h2>
  <div class="contacts">
  <div class="contact-block">
    <h2>Адрес: г. Томск, пр. Комсомольский 37 "Б"</h2>
    <p>Телефон: +7 (3822) 220-788</p>
    <p>ИП Лещенко С. Н., ИНН 701708845853, ОГРНИП 310701704600311</p>
    <p>E-mail: mail@remcom.su</p>
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
  <div :class="{ 'dark-theme': isDarkMode }">
    <button @click="toggleTheme">Сменить тему</button>
<!--    <p class="aaa"> To connect to a database via Vue 3.js, you typically don't directly connect from the client-side code (Vue.js) to the database. Instead, you'd typically create a backend server (using Node.js, Python, etc.) that interacts with the database and exposes an API. Then, your Vue.js application can make HTTP requests to this API to fetch or manipulate data.-->

<!--      Here's a general overview of the steps:-->

<!--      Set up a Backend: Create a backend server using a technology like Node.js, Express.js, Python with Flask/Django, etc. This server will handle requests from the Vue.js frontend and interact with the database.-->

<!--      Database Connection: In your backend server code, establish a connection to your database. This could be a SQL database like MySQL, PostgreSQL, or a NoSQL database like MongoDB.-->

<!--      Create API Endpoints: Define routes and controllers in your backend server to handle CRUD operations (Create, Read, Update, Delete) for your data. These routes will interact with your database.-->

<!--      Make HTTP Requests from Vue.js: In your Vue.js components, use libraries like Axios or Fetch API to make HTTP requests to your backend API endpoints.-->

<!--      Handle Responses: Once you receive responses from the backend, update your Vue.js application's state or UI accordingly.-->

<!--      Here's a simple example of how you might fetch data from a backend API in a Vue component-->
<!--      Set up a Backend: Create a backend server using a technology like Node.js, Express.js, Python with Flask/Django, etc. This server will handle requests from the Vue.js frontend and interact with the database.-->

<!--      Database Connection: In your backend server code, establish a connection to your database. This could be a SQL database like MySQL, PostgreSQL, or a NoSQL database like MongoDB.-->

<!--      Create API Endpoints: Define routes and controllers in your backend server to handle CRUD operations (Create, Read, Update, Delete) for your data. These routes will interact with your database.-->

<!--      Make HTTP Requests from Vue.js: In your Vue.js components, use libraries like Axios or Fetch API to make HTTP requests to your backend API endpoints.-->

<!--      Handle Responses: Once you receive responses from the backend, update your Vue.js application's state or UI accordingly.-->

<!--      Here's a simple example of how you might fetch data from a backend API in a Vue component:-->
<!--      User-->
<!--      How to connect to database via vue 3 js?-->

<!--      ChatGPT-->
<!--      To connect to a database via Vue 3.js, you typically don't directly connect from the client-side code (Vue.js) to the database. Instead, you'd typically create a backend server (using Node.js, Python, etc.) that interacts with the database and exposes an API. Then, your Vue.js application can make HTTP requests to this API to fetch or manipulate data.-->

<!--      Here's a general overview of the steps:-->

<!--      Set up a Backend: Create a backend server using a technology like Node.js, Express.js, Python with Flask/Django, etc. This server will handle requests from the Vue.js frontend and interact with the database.-->

<!--      Database Connection: In your backend server code, establish a connection to your database. This could be a SQL database like MySQL, PostgreSQL, or a NoSQL database like MongoDB.-->

<!--      Create API Endpoints: Define routes and controllers in your backend server to handle CRUD operations (Create, Read, Update, Delete) for your data. These routes will interact with your database.-->

<!--      Make HTTP Requests from Vue.js: In your Vue.js components, use libraries like Axios or Fetch API to make HTTP requests to your backend API endpoints.-->

<!--      Handle Responses: Once you receive responses from the backend, update your Vue.js application's state or UI accordingly.-->

<!--      Here's a simple example of how you might fetch data from a backend API in a Vue component:</p>-->


  </div>




  <!--  Ещё вернёмся-->
<!--  <div>-->
<!--    <h2>Сложение разных значений</h2>-->
<!--    <div class="block">-->
<!--      <button @click="appendToExpression('1690+')">Ремонт стекла</button>-->
<!--    </div>-->
<!--    <div class="block">-->
<!--      <input v-model="value2" type="number" placeholder="Значение 2" />-->
<!--    </div>-->
<!--    <div class="block">-->
<!--      <input v-model="value3" type="number" placeholder="Значение 3" />-->
<!--    </div>-->
<!--    <div class="result">-->
<!--      Результат: {{ value1 }} + {{ value2 }} + {{ value3 }} = {{ sum }}-->
<!--    </div>-->
<!--  </div>-->
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
.contact-block{
  margin-left: 50px;
  margin-top: 50px;
}
.map{
  background-color:grey ;
  width: 50%;
}
</style>