<template>
  <div class="fon">
    <div class="main-fon-img">
      <div class="main-fon-backgroundcolor">

        <HeaderMain/>
        <div class="createRequest">
          <div>
            <form @submit.prevent="submitForm">
              <label for="name">Название телефона:</label>
              <input type="text" id="name" v-model="name">

              <label for="description">Проблема:</label>
              <input type="text" id="description" v-model="description">С

              <button type="submit">Отправить заявку</button>

            </form>
          </div>


        </div>

        <footer>
          <FooterMain/>
        </footer>
      </div>
    </div>
  </div>


</template>
<script>

import axios from "axios"
import HeaderMain from "@/components/HeaderMain.vue";
import FooterMain from "@/components/FooterMain.vue";

export default {
  props: {
    request: Array
  },
  name: 'CreateRequest',
  components: {
    FooterMain,
    HeaderMain,

  },
  data() {
    return {
      request: []
    }
  },
  methods: {
    async submitForm() {
      try {
        const response = await axios.post("https://5fd54060406a6fc7.mokky.dev/request", {

          description: this.description,
          name: this.name
        });
        console.log(response.data);
      }
    catch
      (error)
      {
        console.error(error);
      }
    }
  }
}
</script>
<style>
.createRequest {
  margin-top:100px;
  background-color: #b1daea;
  height: 500px;
  width: 500px;
  margin-left: 700px;
}

.img-for-foto {
  width: 500px;
  height: 100%;
}

</style>