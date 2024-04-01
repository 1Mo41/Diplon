<template>
  <div class="slider">
    <input type="range"  :min="min" :max="max" :step="step" @input="updateValue">
<!--    <span>{{ value }}</span>-->
  </div>
</template>

<script>
export default {
  name:'Slider',
  props: {
    min: {
      type: Number,
      default: 0
    },
    max: {
      type: Number,
      default: 100
    },
    step: {
      type: Number,
      default: 1
    },
    value: {
      type: Number,
      default: 0
    }
  },
  methods: {
    updateValue(event) {
      this.$emit('input', parseInt(event.target.value));
    }
  }
}
</script>

<style>

.slider {
  width: 100%;
}

</style>