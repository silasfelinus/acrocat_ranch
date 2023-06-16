// model Gallery {
//   id             Int      @id @default(autoincrement())
//  name           String   @default("")
//   content        String   @default("")
//   description    String   @default("")
//   highlightImage String?
//   isNSFW         Boolean  @default(false)
//   isAuth         Boolean  @default(false)
//  user           String   @default("cafepurr")
//  createdAt      DateTime @default(now())
//  updatedAt      DateTime @updatedAt

import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()

export default eventHandler(async (event) => {
  const body = await readBody(event)
  const id = body.id
  const name = body.name
  const content = body.content
  const description = body.description
  const highlightImage = body.highlightImage
  const isNSFW = body.isNSFW
  const isAuth = body.isAuth
  const user = body.user

  if (!(id || name))
    return createError({
      statusCode: 400,
      statusMessage: 'Missing ID or email'
    })

  let gallery = null

  if (id || name)
    gallery = await prisma.gallery.update({
      where: {
        id
      },
      data: {
        name,
        content,
        description,
        highlightImage,
        isNSFW,
        isAuth,
        user
      }
    })

  return gallery
})
