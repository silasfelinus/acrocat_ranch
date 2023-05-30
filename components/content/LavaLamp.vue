<template>
  <div class="lava-lamp">
    <svg class="lava-lamp-container" viewBox="0 0 200 400">
      <g class="lava-lamp-glass">
        <path
          d="M100,10 Q140,60 100,400 Q60,60 100,10"
          fill="rgba(255, 255, 255, 0.1)"
          stroke="rgba(255, 255, 255, 0.2)"
          stroke-width="2"
        />
      </g>
      <g class="lava-bubbles">
        <lava-bubble
          v-for="(bubble, index) in bubbles"
          :key="index"
          :bubble="bubble"
        />
      </g>
    </svg>
  </div>
</template>

<script setup>
import { ref, onMounted, onBeforeUnmount } from 'vue';
import LavaBubble from "./LavaBubble.vue";

const bubbles = ref([]);
let bubbleCreationInterval = null;

const createBubble = () => {
  const size = Math.random() * 15 + 5;
  const x = Math.random() * (160 - size) + 20;
  const y = Math.random() * 340;
  const hue = Math.floor(Math.random() * 360);

  bubbles.value.push({ x, y, size, hue });
};

onMounted(() => {
  bubbleCreationInterval = setInterval(createBubble, 1000);
});

onBeforeUnmount(() => {
  if (bubbleCreationInterval) {
    clearInterval(bubbleCreationInterval);
  }
});
</script>

<style lang="scss">
.lava-bubbles {
  animation: moveBubbles 10s linear infinite;
}

@keyframes moveBubbles {
  0%,
  100% {
    transform: translateY(0%);
  }
  50% {
    transform: translateY(-20%);
  }
}
</style>
