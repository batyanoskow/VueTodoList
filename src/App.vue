<template>
  <div class="wrapper">
    <HeaderVue />
    <router-view />
  </div>
 
</template>
<script>
  import HeaderVue from './components/Header.vue';

  export default { 
    name : "MainApp",
    components : { 
      HeaderVue
    },
  
  }
</script>
<style lang="scss">

</style>
