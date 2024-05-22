<template>
  <div class="calculator">
    <label>Сумма</label><input type="text" v-model="expression" disabled>
    <div class="buttons">
      <button @click="appendToExpression('1690+')">Ремонт стекла</button>
      <button @click="appendToExpression('200+')">Сим карт</button>
      <button @click="appendToExpression('3300+')">зарядка</button>
      <button @click="appendToExpression('+')">Добавить</button>
      <button @click="appendToExpression('900+')">Крышка</button>
      <button @click="appendToExpression('200+')">Разьём aux</button>
      <button @click="appendToExpression('100+')">Деньги</button>
      <button @click="appendToExpression('800+')">Провод</button>
      <button @click="appendToExpression('800+')">Флешка</button>
      <button @click="appendToExpression('1000')">Сам ремонт</button>
      <button @click="appendToExpression('923+')">Новый телефон</button>
      <button @click="clearExpression">Удалить</button>
      <button @click="calculateResult">Сколько стоит</button>
    </div>

  </div>

</template>

<script>
export default {
  name:'MainView',
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
.calculator {
  width: 300px;
  margin: auto;
  margin-top: 200px;
  margin-left: 750px;
  text-align: center;
}

input {
  width: 100%;
  margin-bottom: 10px;
  padding: 5px;
}

.buttons {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 5px;
  margin-right: 100px;
}

button {
  margin: 5px;
  padding: 10px;
  font-size: 18px;
}
label{
color: #fff;
}
</style>