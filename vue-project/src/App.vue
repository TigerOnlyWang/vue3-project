<template>
  <div>
    <router-view v-slot="{ Component }">
      <transition name="fadeAndScale" enter-active-class="animate__animated animate__zoomIn animate__faster">
        <keep-alive include="login">
          <component :is="Component" />
        </keep-alive>
      </transition>
    </router-view>
  </div>
</template>

<script setup>
import 'animate.css'
</script>

<style lang="scss" scoped>

</style>