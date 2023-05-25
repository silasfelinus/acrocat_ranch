<template>
  <div>
    <header>
      <nav>
        <ul>
          <li v-for="navItem in nav" :key="navItem.name">
            <nuxt-link :to="navItem.path">{{ navItem.name }} </nuxt-link>
          </li>
        </ul>
      </nav>
    </header>

    <main>
      <nuxt />
    </main>

    <footer>
      <p>&copy; 2023 Your Company</p>
    </footer>
  </div>
</template>

<script setup>
import { ref } from 'vue'

const { fetch: fetchContent } = useContent()

const nav = ref([])

fetchContent('amiNav').then((data) => {
  nav.value = data
})
</script>

<style scoped>
nav ul {
  list-style: none;
  display: flex;
  justify-content: space-around;
  padding: 0;
}

nav li {
  margin: 0 1em;
}

header,
footer {
  background-color: #f8f9fa;
  padding: 1em 0;
  text-align: center;
}

main {
  min-height: 80vh;
}
</style>
