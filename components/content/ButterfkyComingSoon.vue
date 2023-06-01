<template>
  <div class="coming-soon-wrapper">
    <AmiButterfly :x="butterfly.x" :y="butterfly.y" />
    <div class="string"></div>
    <div class="sign">Coming Soon</div>
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted } from 'vue'
import AmiButterfly from './AmiButterfly.vue'

interface ButterflyPosition {
  x: number
  y: number
}

const butterfly = ref<ButterflyPosition>({ x: 0, y: 0 })

onMounted(() => {
  butterfly.value = {
    x: window.innerWidth / 2,
    y: window.innerHeight / 4
  }
})
</script>

<style scoped>
.coming-soon-wrapper {
  position: relative;
  width: 100%;
  height: 100vh;
  overflow: hidden;
  background-color: #111;
}

.string {
  position: absolute;
  top: 50%;
  left: 50%;
  width: 2px;
  height: 200px;
  background-color: #555;
}

.sign {
  position: absolute;
  top: 60%;
  left: 40%;
  width: 150px;
  height: 100px;
  background-color: #964b00;
  color: white;
  text-align: center;
  line-height: 100px;
  border-radius: 5px;
}
</style>
