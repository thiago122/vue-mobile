<template>
  <div class="page has-navbar">

	<div class="bar bar-header">
      <h1 class="title">About</h1>
    </div>

    <div class="page-content text-center">
      <h2 class="padding">Nothing here.</h2>

      <button class="md-button button button-assertive" @click="showActionSheet()"> 
        <i class="ion-information-circled"></i> Action Sheet  
      </button>

    </div>
  </div>
</template>


<script>
  export default {
    methods: {
      showActionSheet(theme) {
        $actionSheet.show({
          theme: theme || '',
          title: '标题',
          buttons: {
            'Action - 1': () => {
              console.log('action 1 called.')
            },

            'Action - 2': () => {
              console.log('action 2 called.')
            }
          }
        })
      }
    }
  }
</script>