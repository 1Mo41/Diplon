<template>
  <footer class="footer">
    <div class="footer-content">
      <div class="footer-section">
        <h4>Мы в социальных сетях</h4>
        <ul>
          <li><a href="https://www.facebook.com/yourcompany" target="_blank">Вконтакте</a></li>
          <li><a href="https://twitter.com/yourcompany" target="_blank">Телеграмм</a></li>
          <li><a href="https://www.instagram.com/yourcompany" target="_blank">Ватсап</a></li>
        </ul>
      </div>
      <div class="footer-section">
        <h4>Наши партнеры</h4>
        <ul>
          <li><a href="https://www.partner1.com" target="_blank">Сбербанк</a></li>
          <li><a href="https://www.partner2.com" target="_blank">Запчасти Томск</a></li>
        </ul>
      </div>
      <div class="footer-section">
        <h4>Контакты</h4>
        <p>Телефон: +7-961-095-90-28</p>
        <p>Email: kompoff@kompoff.com</p>
      </div>
    </div>
  </footer>
</template>

<style>
.footer {
  background-color: #01556a;
  color: #fff;
  padding: 20px;
}

.footer-content {
  display: flex;
  justify-content: space-around;
}

.footer-section {
  margin-bottom: 20px;
}

.footer-section h4 {
  margin-bottom: 10px;
}

.footer-section ul {
  list-style-type: none;
  padding: 0;
}

.footer-section ul li {
  margin-bottom: 5px;
}
li{
  list-style-type: none;
}
</style>
