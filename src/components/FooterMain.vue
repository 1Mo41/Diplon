<template>
  <div class="footerLine"></div>
  <div class="footer">

    <div class="footerL">
    <h3>Наши соц. Сети</h3>
      <ul class="seti">
        <li class="fLi"><a href="" class="footerA">Вк</a></li>
        <li class="fLi"><a href="" class="footerA">Телеграмм</a></li>
        <li class="fLi"><a href="" class="footerA">Ватсап</a></li>
        <li class="fLi"><a href="" class="footerA">Одноклассинки</a></li>
      </ul>
    </div>
    <div class="footerR">
  <h3>Наши партнёры</h3>
      <ul class="seti">
        <li class="fLi"><a href="" class="footerA">Запчасти для ПК</a></li>
        <li class="fLi"><a href="" class="footerA">ТТИТ</a></li>
        <li class="fLi"><a href="" class="footerA">Сбербанк</a></li>
        <li class="fLi"><a href="" class="footerA">Армяне</a></li>
      </ul>
  </div>
  </div>
</template>







<script>
 export default {
   name:'FooterMain',
   props: {
     footermain:String
   }
 }
</script>
<style>
.footerLine{
  border: 1px solid black;
}
.footer{
  display: flex;
  justify-content: space-between;
}
.footerL{
  margin-top: 20px;
margin-left: 200px;
}
.footerR{
  margin-right: 200px;
  margin-top: 20px;
}
a{
  text-decoration: none;
}
li{
  list-style-type: none;
  padding: 10px;
}
</style>
