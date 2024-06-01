<template>
  <div>
    <input type="text" v-model="searchQuery" placeholder="Search...">
    <ul v-if="searchQuery">
      <li v-for="item in filteredItems" :key="item.id"><a class="FilterA" href="">{{ item.name }}</a></li>
    </ul>
  </div>
</template>
<script>

export default {
  data() {
    return {
      items: [
        { id: 1, name: 'Samsung 10a' },
        { id: 2, name: 'Samsung 14 Ultra' },
        { id: 3, name: 'Samsung 4s' }
      ],
      searchQuery: ''
    };
  },
  computed: {
    filteredItems() {
      return this.items.filter(item => item.name.toLowerCase().includes(this.searchQuery.toLowerCase()));
    }
  }
};
</script>
<style>
input{
  width: 200px;
}
.FilterA{
  color: red;
}
li{
  list-style-type: none;
}
</style>