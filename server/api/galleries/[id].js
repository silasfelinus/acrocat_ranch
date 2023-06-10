export default defineEventHandler(async (event) => {
  const id = event.context.params?.id
  const gallery = await getGallery(id)
  if (!gallery) {
    const notFoundError = createError({
      statusCode: 404,
      statusMessage: 'Gallery not found '
    })
    sendError(event, notFoundError)
  }
  return gallery
})
