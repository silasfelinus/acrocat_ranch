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

export default defineEventHandler(async (event) => {
  const body = await readBody(event)
  let gallery = null

  if (body.name)
    await prisma.gallery
      .create({
        data: {
          id: body.id,
          name: body.name,
          content: body.content,
          description: body.description,
          highlightImage: body.highlightImage,
          isNSFW: body.isNSFW,
          isAuth: body.isAuth,
          user: body.user
        }
      })
      .then((response) => {
        gallery = response
      })
  return {
    gallery
  }
})
