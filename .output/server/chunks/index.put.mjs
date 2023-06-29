import { defineEventHandler } from 'h3'

const index_put = defineEventHandler((event) => {
  return {
    api: 'put tags'
  }
})

export { index_put as default }
//# sourceMappingURL=index.put.mjs.map
