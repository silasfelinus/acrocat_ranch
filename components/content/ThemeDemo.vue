<template>
  <div class="p-4">
    <h1 class="text-4xl mb-4">DaisyUI Demo</h1>

    <button class="btn btn-primary mb-4" @click="changeTheme">
      Change Theme
    </button>

    <div class="grid grid-cols-2 gap-4">
      <div>
        <h2 class="text-2xl mb-2">Buttons</h2>
        <button class="btn btn-primary mb-2">Primary</button>
        <button class="btn btn-secondary mb-2">Secondary</button>
        <button class="btn btn-accent mb-2">Accent</button>
        <button class="btn btn-info mb-2">Info</button>
        <button class="btn btn-success mb-2">Success</button>
        <button class="btn btn-warning mb-2">Warning</button>
        <button class="btn btn-error mb-2">Error</button>
      </div>

      <div>
        <h2 class="text-2xl mb-2">Cards</h2>
        <div class="card bordered mb-2">
          <figure>
            <img src="https://placekitten.com/300/200" />
          </figure>
          <div class="card-body">
            <h2 class="card-title">
              Top image
              <div class="badge mx-2 badge-secondary">NEW</div>
            </h2>
            <p>
              Rerum reiciendis beatae tenetur excepturi aut pariatur est eos.
              Sit sit necessitatibus veritatis sed molestiae voluptates incidunt
              iure sapiente.
            </p>
            <div class="justify-end card-actions">
              <button class="btn btn-secondary">More info</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  methods: {
    changeTheme() {
      this.$theme = this.$theme === 'light' ? 'dark' : 'light'
    }
  }
}
</script>
