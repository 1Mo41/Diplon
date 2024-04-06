<template>
  <div>
    <div>
      <input type="number" v-model="num1" />
      <button @click="add(num1)">+</button>
    </div>
    <div>
      <input type="number" v-model="num2" />
      <button @click="add(num2)">+</button>
    </div>
    <div>
      <input type="number" v-model="num3" />
      <button @click="add(num3)">+</button>
    </div>
    <div>
      Result: {{ result }}
    </div>
  </div>
</template>

<script>
import { ref } from 'vue';

export default {
  setup() {
    const num1 = ref(0);
    const num2 = ref(0);
    const num3 = ref(0);
    const result = ref(0);

    const add = (num) => {
      result.value += num;
    };

    return {
      num1,
      num2,
      num3,
      result,
      add,
    };
  },
};
</script>
