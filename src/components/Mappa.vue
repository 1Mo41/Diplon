<template>
  <div id="map" style="height: 400px;"></div>
</template>

<script>
import { ref, onMounted } from 'vue';
import L from 'leaflet';

export default {
  setup() {
    const map = ref(null);

    onMounted(() => {
      map.value = L.map('map').setView([51.505, -0.09], 13);
      L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png').addTo(map.value);
    });

    return {
      map
    };
  }
};
</script>

<style>
#map {
  width: 500px;
  height: 500px;
}
</style>