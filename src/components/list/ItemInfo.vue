<template>
  <div class="item-info" thin-border>
    <slot></slot>
  </div>
</template>

<style>
	
.item-info{
    border-bottom: 1px solid #ddd;
    background-color: #fff;
    color: #444;
    position: relative;
    z-index: 2;
    display: block;
    padding: 16px 16px 16px 0;
    font-size: 16px;
}

</style>