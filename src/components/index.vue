<template>
  <div class="page has-navbar">

    <div class="bar bar-header">
      <h1 class="title">Home</h1>
    </div>

    <div class="page-content text-center">
      <h2 class="padding" v-text="msg"></h2>

      <button class="md-button button button-assertive" v-link="{ path: '/teste2' }"> 
        <i class="ion-information-circled"></i> About  
      </button>
    </div>
  </div>
</template>
<script>
  export default {
    data () {
      return {
        msg: 'Hello! Vonic.'
      }
    }
  }
</script>
<style>
  h2 {
    font-family: Candara,Calibri,Segoe,Segoe UI,Optima,Arial,sans-serif;
    color: #888;
  }


</style>
