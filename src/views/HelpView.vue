<template>
  <HeaderMain />
  <div>
    <input type="text" v-model="question" placeholder="Задайте ваш вопрос">
    <button @click="getAnswer">Получить ответ</button>
    <p v-if="answer">{{ answer }}</p>
  </div>
  <div>
    <input type="text" v-model="searchQuery" placeholder="Поиск...">
    <ul>
      <li v-for="item in filteredItems" :key="item.id">{{ item.name }}</li>
    </ul>
  </div>
</template>
  <FooterMain />
<script>
import HeaderMain from "@/components/HeaderMain.vue";
import FooterMain from "@/components/FooterMain.vue";

export default {
  name: 'HelpView',
  components: {
    HeaderMain,
    FooterMain
  },
  data() {
      return {
        question: '',
        answer: '',
        items: [
          { id: 1, name: 'Элемент 1' },
          { id: 2, name: 'Элемент 2' },
          { id: 3, name: 'Элемент 3' }
        ],
        searchQuery: ''
      };
    },
    computed: {
      filteredItems() {
        return this.items.filter(item => {
          return item.name.toLowerCase().includes(this.searchQuery.toLowerCase());
        });
      }
    },
  methods: {
    getAnswer() {
      // Простой пример автоматического ответа на вопрос
      if (this.question.endsWith('?') && this.question === 'Как оформить заказ?') {
        this.answer = 'По телефону 912931923';
      } else if (this.question.endsWith('?') && this.question === 'Кто?') {
        this.answer = 'Костя лох';
      } else if (this.question.endsWith('?') && this.question === 'Кто?') {
        this.answer = 'Костя лох';
      } else {
        this.answer = 'Пожалуйста, задайте вопрос в форме вопроса.';
      }

    }
  }
};
</script>

<style>
/* Стили для формы и списка вопросов */
</style>
