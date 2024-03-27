<template>
  <HeaderMain/>
  <div class="main">
    <h1>О нас </h1>
  </div>
  <FooterMain/>
</template>


<script>
import HeaderMain from '@/components/HeaderMain.vue'
import FooterMain from '@/components/FooterMain.vue'

export default {
  name: 'BodyMain',
  components: {
    HeaderMain,
    FooterMain
  },
}
</script>