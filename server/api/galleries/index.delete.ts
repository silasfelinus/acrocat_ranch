import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()

export default eventHandler(async (event) => {
  const body = await readBody(event)
  let gallery = null
  let error = null

  if (body.id)
    await prisma.gallery
      .delete({
        where: {
          id: body.id
        }
      })
      .then((response) => {
        gallery = response
      })
      .catch(async (e) => {
        error = e
      })

  if (error)
    return createError({ statusCode: 500, statusMessage: 'Server Error' })

  return gallery
})
