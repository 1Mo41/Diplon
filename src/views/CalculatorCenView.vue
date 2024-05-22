<template>
  <HeaderMain/>
  <div class="phones">
    <h1 class="h1">Телефоны Samsung</h1>
    <h2>Проверь,есть ли в запчасти на ваш телефон?</h2>

    <div class="Search">
      <p>Введите марку своего телефона</p>
      <input type="text" v-model="searchQuery" @input="filterItems" placeholder="Search...">
      <button class="button" @click="toggleList">Поиск</button>
      <ul v-if="showList">
        <li v-for="item in filteredItems" :key="item.id"><a class="FilterA" href="">{{ item.name }}</a></li>
      </ul>
    </div>
  </div>
  <div class="calcul">
    <h2 id="h2">Посчитай сколько обойдётся ремонт!</h2>
  <!-- <Calculator/> -->
  </div>
  <FooterMain/>

</template>
<script>
import HeaderMain from "@/components/HeaderMain.vue";
import FooterMain from "@/components/FooterMain.vue";
import Slider from "@/components/Slider.vue";
import Calculator from "@/components/Calculator.vue";
import Filter from "@/components/Filter.vue";

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
      searchQuery: '',
      showList: false,
      items: [
        {id: 1, name: "Samsung Galaxy S20"},
        {id: 2, name: "Samsung Galaxy Note 10"},
        {id: 3, name: "Samsung Galaxy A50"},
        {id: 4, name: "Samsung Galaxy A10"},
        {id: 5, name: "Samsung Galaxy A6"},
        {id: 6, name: "Samsung Galaxy A33"},
        {id: 7, name: "Samsung Galaxy A34"},
        {id: 8, name: "Samsung Galaxy Note 3"},
      ]
    };
  },
  computed: {
    filteredItems() {
      return this.items.filter(item => item.name.toLowerCase().includes(this.searchQuery.toLowerCase()));
    }
  },
  methods: {
    filterItems() {
      this.showList = false; 
    },
    toggleList() {
      this.showList = !this.showList && this.searchQuery != 0; 
    }
  }
};
</script>
<style>
.Search{
  height: 450px;
}
.h1{
  margin-bottom: 20px;
}
footer{
margin-top:00px ;
}
.phones {
  max-width: 600px;
  margin: 0 auto;
}

.phone-item {
  border: 1px solid #ccc;
  padding: 10px;
  margin-bottom: 10px;
}

input {
  width: 200px;
}

.FilterA {
  color: black;
}

li {
  list-style-type: none;
  text-align: left;
  padding: 10px;
  color: #fff;
}
a,li,h2,h1,p{
  color: #fff;
}
.FilterA{
  color: #fff;
}
a {
  text-decoration: none;

}
body{
  background:url("../assets/fon2.jpg")  no-repeat center center;

}
.button {
  width: auto;
  height: auto;
}

.h1 {
  color: white;
}
#h2{
  padding-top:5px;
}
</style>
