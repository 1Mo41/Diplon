<template>
      <HeaderMain/>
      <h1>Оставить заявку на ремонт</h1>
        <div class="createRequest">   
            <div class="leftText">
              <div>
                <img class="imgSYKA" src="../assets/icon1.png" alt="">
                <img class="imgSYKA" src="../assets/icon1.png" alt="">
                <img class="imgSYKA" src="../assets/icon1.png" alt="">
                <img class="imgSYKA" src="../assets/icon1.png" alt="">
              </div>
              <div>
                <img class="imgSYKA" src="../assets/icon1.png" alt="">
                <img class="imgSYKA" src="../assets/icon1.png" alt="">
                <img class="imgSYKA" src="../assets/icon1.png" alt="">
                <img class="imgSYKA" src="../assets/icon1.png" alt="">
              </div>
              </div>
              
              <div class="textRigth">
               <form @submit.prevent="submitForm">
                   <input type="text" id="name" v-model="name" placeholder="Название телефона"><br>
                    <input type="text" id="description" v-model="description" placeholder="Описание проблемы"><br>
                  <button type="submit">Отправить заявку</button>
                </form>
            </div>
          </div>
  <footer><FooterMain/></footer>

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
  display: flex;
  justify-content: space-around;
  margin-top: 200px;
  margin-bottom:300px;
  
}
.img-for-foto {
  width: 500px;
  height: 100%;
}
body{
  background:url("../assets/fonchik.jpg")  no-repeat center center;
}
input,button{
  margin: 10px;
  height: 30px;
  width: 200px;
}
p{
  color:#fff; 
}
.imgSYKA{
  width: 100px;
  height:100px ;
}
h1{
  color: #fff;
}
</style>