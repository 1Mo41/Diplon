<template>
  <HeaderMain/>
  <h2>Возникли вопросы?</h2>
  <p>Обращайся к нам!</p>
  <div class="conteiner">
    <div class="qewst">
      <h2>Часто задаваемые вопросы</h2>
      <ul class="liQuest">
        <li class="quest">Как оформить заказ?</li>
        <li class="quest">Сколько времени ждать?</li>
        <li class="quest">Средний чек?</li>
        <li class="quest">Что делать,если не помогло?</li>
        <li class="quest">Сколько стоит вызвать мастера на дом?</li>
        <li class="quest">Как флексить?</li>
        <li class="quest">Другое</li>
      </ul>
    </div>
    <div class="formQuest">
      <h2>Поле для задавания вопросов</h2>
      <div id="quest">
      <input type="text" v-model="question" placeholder="Задайте ваш вопрос">
      <button @click="getAnswer">Получить ответ</button>
      </div>
    </div>
    <div class="answer">
      <h2>Ответы на вопросы</h2> <br>
      <h2 v-if="answer">{{ answer }}</h2>
    </div>
  </div>
  <FooterMain/>
</template>

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
    };
  },
  methods: {
    getAnswer() {
      // Простой пример автоматического ответа на вопрос
      if (this.question.endsWith('?') && this.question === 'Как оформить заказ?') {
        this.answer = 'По телефону +79129319123';
      } else if (this.question.endsWith('?') && this.question === 'Сколько времени ждать?') {
        this.answer = 'День - два ';
      } else if (this.question.endsWith('?') && this.question === 'Средний чек?') {
        this.answer = '1500 - 2000 рублей';
      } else if (this.question.endsWith('?') && this.question === 'Что делать,если не помогло?') {
        this.answer = 'Обратитесь по номеру +79129319123 ';
      } else if (this.question.endsWith('?') && this.question === 'Сколько стоит вызвать мастера на дом?') {
        this.answer = '1000 рублей';
      }
      else if (this.question === 'Другое') {
        this.answer = 'Позвоните по номеру :+79129319123. ' +
            'Вам ответит наш оператор';
      }else {
        this.answer = 'Пожалуйста, задайте вопрос в форме вопроса.';
      }

    }
  }
};
</script>

<style>
.formQuest {
  background-color: #b1daea;
  height: 400px;
  width: 400px;


}
.conteiner{
  display: flex;
  justify-content: space-evenly;
  margin-top: 100px;
}
.liQuest{
  text-align: left;
}
.answer{
  width: 15%;
}
input{
  margin-top: 100px;
}
li{
  padding: 15px;
}
</style>
