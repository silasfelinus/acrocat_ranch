// server/galleries/[name].ts
export default eventHandler((event) => `Gallery: ${event.context.params.name}!`)
