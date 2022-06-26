<template>
    <div class="app-wrapper">
        <!-- 侧边栏 -->
        <div class="sidebar-container"></div>
        <!-- 内容区 -->
        <div class="main-container">
            <!-- 顶部导航栏 -->
            <nav-bar/>  
            <!-- 内容区 -->
            <app-main/>
        </div>
    </div>
</template>

<script setup>
import AppMain from "layouts/components/AppMain.vue";
import NavBar from "layouts/components/NavBar.vue";
</script>

<style lang="scss" scoped>
@import "styles/mixin.scss";
.app-wrapper {
  @include clearfix;
  position: relative;
  height: 100%;
  width: 100%;
}
</style>