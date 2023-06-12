import { PrismaClient } from '@prisma/client'

// model User {
// id          Int      @id @default(autoincrement())
// email       String   @unique
// name        String   @default("")
// createdAt   DateTime @default(now())
// updatedAt   DateTime @updatedAt
// bio         String?
// avatarImage String?

const prisma = new PrismaClient()

export default defineEventHandler(async (event) => {
  const body = await readBody(event)
  let user = null

  if (body.email)
    await prisma.user
      .create({
        data: {
          email: body.email,
          name: body.name || 'acrouser'
        }
      })
      .then((response) => {
        user = response
      })
  return {
    user
  }
})
