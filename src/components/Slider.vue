<template>
  <div class="slider">
    <div class="slides">
      <img :src="images[currentIndex]" alt="Slide">
    </div>
    <div class="dots">
      <span v-for="(image, index) in images" :key="index" @click="goToSlide(index)" :class="{ active: index === currentIndex }"></span>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      images: ['/images/Kartinka1.jpg', '/images/kartinka2.jpg', '/images/kartinka3.jpg'],
      currentIndex: 0,
      intervalId: null
    };
  },
  methods: {
    startSlider() {
      this.intervalId = setInterval(() => {
        this.currentIndex = (this.currentIndex + 1) % this.images.length;
      }, 3000); // Интервал в миллисекундах (здесь каждые 3 секунды)
    },
    goToSlide(index) {
      clearInterval(this.intervalId); // Остановить автоматическое переключение
      this.currentIndex = index;
      this.startSlider(); // Запустить автоматическое переключение снова
    },
  },
};

</script>

<style>

.dots{
  position:absolute;
  margin-left:450px;
  margin-top:520px;
}

.slides {
  height: 500px;
  width: 1000px;
}
.dots span {
  display: inline-block;
  width: 10px;
  height: 10px;
  background-color: #ccc;
  border-radius: 50%;
  cursor: pointer;
  margin:5px;


}

.dots span.active {
  background-color: #333;
}
</style>
