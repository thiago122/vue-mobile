<template>
  <div class="page has-navbar">

	<div class="bar bar-header">
      <h1 class="title">Buttons</h1>
    </div>

    <div class="page-content">
  
        <div class="padding">
      
          <button class="btn --primary --small " @click="showActionSheet()"> 
            --primary  
          </button>  

          <button class="btn --green --small " @click="showActionSheet()"> 
            --green  
          </button>

          <button class="btn --danger --small " @click="showActionSheet()"> 
            --danger  
          </button>

       <br><br>

          <button class="btn --green --small " @click="showActionSheet()"> 
            --small  
          </button>

          <button class="btn --green" @click="showActionSheet()"> 
            Default
          </button>

          <button class="btn --green  -small --large " @click="showActionSheet()"> 
            --large  
          </button>

     <br><br>

          <button class="btn --green --round" @click="showActionSheet()"> 
            --round  
          </button> 

          <button class="btn --green --outline" @click="showActionSheet()"> 
            --outline 
          </button>   
   
          <button class="btn --green --clean" @click="showActionSheet()"> 
            --clean  
          </button> 

        </div>

 


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