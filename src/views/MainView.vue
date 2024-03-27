<template>
  <HeaderMain/>
  <div class="main">
    <h1>Главная Страничка </h1>
    <div class="polt">
      <p>Наша кантора самая лучшая в мире по оемонту ПК, кто не согласен, тот артавод с бутылкой в жопе</p>
    </div>
    <h3></h3>
  </div>
  <FooterMain/>
</template>

<script>
import HeaderMain from '@/components/HeaderMain.vue'
import FooterMain from '@/components/FooterMain.vue'

export default {
  name: 'MainView',
  components: {
    HeaderMain,
    FooterMain
  },
}
</script>