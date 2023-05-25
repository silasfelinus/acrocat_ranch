<script setup lang="ts">
import { onMounted, onUnmounted, reactive, ref } from 'vue'
import { makeNoise2D } from 'open-simplex-noise'

// Random color generator
const randomColor = (): string =>
  '#' + (((1 << 24) * Math.random()) | 0).toString(16)

// Complementary color generator
const complementaryColor = (color: string): string => {
  let hex = color.replace('#', '')
  let rgb = parseInt(hex, 16) // convert rrggbb to decimal
  let r = (rgb >> 16) & 0xff // extract red
  let g = (rgb >> 8) & 0xff // extract green
  let b = (rgb >> 0) & 0xff // extract blue
  let comp = ((0xff - r) << 16) | ((0xff - g) << 8) | (0xff - b) // calculate complement
  return '#' + comp.toString(16) // convert to hex and prepend #
}

interface Butterfly {
  wingTopColor: string
  wingBottomColor: string
  pattern: string
  x: number
  y: number
  scale: number
  rotation: number
  speed: number
  dx: number
  dy: number
}

let wingTopColor = randomColor()
let wingBottomColor = complementaryColor(wingTopColor)

const butterfly = reactive<Butterfly>({
  wingTopColor,
  wingBottomColor,
  pattern: 'two-color',
  x: Math.random() * window.innerWidth,
  y: Math.random() * window.innerHeight,
  scale: 1,
  rotation: 110,
  speed: 2,
  dx: 0,
  dy: 0
})
const noise2D = makeNoise2D(Date.now())
let t = 0
const mouseIsDown = ref(false)

function handleClick() {
  butterfly.speed *= -1
}
function updatePosition() {
  t += 0.01
  const angle =
    noise2D(butterfly.x * 0.01, butterfly.y * 0.01 + t) * Math.PI * 2
  butterfly.dx = Math.cos(angle) * butterfly.speed
  butterfly.dy = Math.sin(angle) * butterfly.speed

  butterfly.x += butterfly.dx
  butterfly.y += butterfly.dy

  if (butterfly.x < 0 || butterfly.x > window.innerWidth - 100) {
    butterfly.x = Math.max(Math.min(butterfly.x, window.innerWidth - 100), 0)
  }

  if (butterfly.y < 0 || butterfly.y > window.innerHeight - 100) {
    butterfly.y = Math.max(Math.min(butterfly.y, window.innerHeight - 100), 0)
  }

  // Change scale based on screen position
  butterfly.scale =
    0.33 +
    ((2 -
      (butterfly.x / window.innerWidth + butterfly.y / window.innerHeight)) /
      2) *
      0.67

  // Update the rotation based on the direction
  butterfly.rotation = butterfly.dx >= 0 ? 120 : 30
}

function animate() {
  updatePosition()
  requestAnimationFrame(animate)
}

const handleMouseMove = (e: MouseEvent) => {
  const dxMouse = e.clientX - butterfly.x
  const dyMouse = e.clientY - butterfly.y
  const distance = Math.sqrt(dxMouse * dxMouse + dyMouse * dyMouse)

  if (distance < 150) {
    const directionX = dxMouse / distance
    const directionY = dyMouse / distance
    butterfly.dx -= directionX * 2
    butterfly.dy -= directionY * 2

    // Limit speed
    const currentSpeed = Math.sqrt(
      butterfly.dx * butterfly.dx + butterfly.dy * butterfly.dy
    )
    if (currentSpeed > 5) {
      butterfly.dx = (butterfly.dx / currentSpeed) * 5
      butterfly.dy = (butterfly.dy / currentSpeed) * 5
    }

    butterfly.rotation = butterfly.dx >= 0 ? 120 : 30
  }
}
const handleMouseDown = () => {
  mouseIsDown.value = true
}

const handleMouseUp = () => {
  mouseIsDown.value = false
}

onMounted(() => {
  document.addEventListener('mousemove', handleMouseMove)
  document.addEventListener('mousedown', handleMouseDown)
  document.addEventListener('mouseup', handleMouseUp)
  animate()
})

onUnmounted(() => {
  document.removeEventListener('mousemove', handleMouseMove)
  document.removeEventListener('mousedown', handleMouseDown)
  document.removeEventListener('mouseup', handleMouseUp)
})
</script>
<template>
  <div
    class="butterfly"
    :style="{
      left: butterfly.x + 'px',
      top: butterfly.y + 'px',
      transform:
        'rotate3d(1, 0.5, 0, ' +
        butterfly.rotation +
        'deg) scale(' +
        butterfly.scale +
        ')'
    }"
    @click="handleClick"
  >
    <div class="left-wing">
      <div class="top" :style="{ background: butterfly.wingTopColor }"></div>
      <div
        class="bottom"
        :style="{ background: butterfly.wingBottomColor }"
      ></div>
    </div>
    <div class="right-wing">
      <div class="top" :style="{ background: butterfly.wingTopColor }"></div>
      <div
        class="bottom"
        :style="{ background: butterfly.wingBottomColor }"
      ></div>
    </div>
  </div>
</template>
<style scoped>
body {
  background: #111;
}

@keyframes flutter-left {
  0% {
    transform: rotate3d(0, 1, 0, 20deg);
  }
  50% {
    transform: rotate3d(0, 1, 0, 70deg);
  }
  100% {
    transform: rotate3d(0, 1, 0, 20deg);
  }
}

@keyframes flutter-right {
  0% {
    transform: rotate3d(0, 1, 0, -20deg);
  }
  50% {
    transform: rotate3d(0, 1, 0, -70deg);
  }
  100% {
    transform: rotate3d(0, 1, 0, -20deg);
  }
}

.butterfly {
  width: 100px;
  height: 100px;
  position: absolute;
  transform-style: preserve-3d;
  transform: rotate3d(1, 0.5, 0, 110deg);
}

.left-wing,
.right-wing {
  width: 24px;
  height: 42px;
  position: absolute;
  top: 10px;
}

.left-wing {
  left: 10px;
  top: 10px;
  transform-origin: 24px 50%;
  transform: rotate3d(0, 1, 0, 20deg);
  animation: flutter-left 0.3s infinite;
}

.right-wing {
  left: 34px;
  transform: rotate3d(0, 1, 0, -20deg);
  transform-origin: 0px 50%;
  animation: flutter-right 0.3s infinite;
}

.left-wing .top {
  right: 0;
}

.top,
.bottom {
  opacity: 0.7;
  position: absolute;
}
.top {
  width: 20px;
  height: 20px;
  border-radius: 10px;
}

.bottom {
  top: 18px;
  width: 24px;
  height: 24px;
  border-radius: 12px;
}
</style>
