<script setup>
// 1.直接导入组件
import Comp from 'comps/Comp.vue'
import {reactive, ref ,useAttrs ,useSlots,defineExpose} from 'vue'
// 2.属性定义 （输入/父传子）
const props = defineProps({
  msg: String
})
console.log(props);
// 3.获取属性和插槽
const attrs = useAttrs()
const slots = useSlots()
console.log(attrs,slots);
// 4.定义事件
const emit = defineEmits(['myclick'])
// 5.组件实例向外暴漏方法
defineExpose({
  someMethod(){
    console.log('somemessage from hellowworld!');
  }
})
const count = reactive({count: 0})
</script>

<template>
  <h1>{{ msg }}</h1>
  <comp></comp>
  <p>
    Recommended IDE setup:
    <a href="https://code.visualstudio.com/" target="_blank">VSCode</a>
    +
    <a href="https://github.com/johnsoncodehk/volar" target="_blank">Volar</a>
  </p>

  <p>
    <a href="https://vitejs.dev/guide/features.html" target="_blank">
      Vite Documentation
    </a>
    |
    <a href="https://v3.vuejs.org/" target="_blank">Vue 3 Documentation</a>
  </p>

  <button type="button" @click="count++">count is: {{ count }}</button>
  <button @click=" emit('myclick')">emit派发事件</button>
  <p>
    Edit
    <code>components/HelloWorld.vue</code> to test hot module replacement.
  </p>
</template>

<style scoped>
a {
  color: #42b983;
}
</style>
