<!-- <script setup>
// This starter template is using Vue 3 <script setup> SFCs
// Check out https://v3.vuejs.org/api/sfc-script-setup.html#sfc-script-setup
import HelloWorld from 'comps/HelloWorld.vue'
import {ref} from 'vue'
const hw = ref(null)
const onmyclick = ()=>{
  console.log('myclick from hellowworld!');
  console.log(hw.value.someMethod());
}
</script> -->

<template>
  <img alt="Vue logo" src="./assets/logo.png" />
  <!-- <HelloWorld msg="Hello Vue 3 + Vite" @myclick="onmyclick" ref="hw"/> -->
  <router-view></router-view>
</template>


