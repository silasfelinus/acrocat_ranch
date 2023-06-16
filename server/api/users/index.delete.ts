// model User {
// id          Int      @id @default(autoincrement())
// email       String   @unique
// name        String   @default("")
// createdAt   DateTime @default(now())
// updatedAt   DateTime @updatedAt
// bio         String?
// avatarImage String?
import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()

export default eventHandler(async (event) => {
  const body = await readBody(event)
  let user = null
  let error = null

  if (body.id)
    await prisma.user
      .delete({
        where: {
          id: body.id
        }
      })
      .then((response) => {
        user = response
      })
      .catch(async (e) => {
        error = e
      })

  if (error)
    return createError({ statusCode: 500, statusMessage: 'Server Error' })

  return user
})
