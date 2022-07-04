<template>
    <div class="app-wrapper">
        <!-- 侧边栏 -->
        <sidebar class="sidebar-container"></sidebar>
        <!-- 内容区 -->
        <div class="main-container">
            <!-- 顶部导航栏 -->
            <navbar/>  
            <!-- 内容区 -->
            <app-main/>
        </div>
    </div>
</template>

<script setup>
import AppMain from "layouts/components/AppMain.vue";
import Navbar from "layouts/components/Navbar.vue";
import Sidebar from "layouts/components/Sidebar/index.vue"
</script>

<style lang="scss" scoped>
@import "styles/mixin.scss";
.app-wrapper {
  @include clearfix;
  position: relative;
  height: 100%;
  width: 100vw;
  .sidebar-container{
    width: 160px;
    height: 100vh;
    background-color: rgba(8, 84, 84, 0.636);
    float: left;
    @include clearfix;
  }
  .main-container{
    min-width: calc(100vw - 160px);
    height: 100%;
    float: right;
    @include clearfix;
  }
}

</style>