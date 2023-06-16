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
  const id = body.id
  const email = body.email
  const name = body.name

  if (!(id && email))
    return createError({
      statusCode: 400,
      statusMessage: 'Missing ID or email'
    })

  let user = null

  if (id && email)
    user = await prisma.user.update({
      where: {
        id
      },
      data: {
        name,
        email
      }
    })

  return user
})
