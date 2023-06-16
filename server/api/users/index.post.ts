// model User {
// id          Int      @id @default(autoincrement())
// email       String   @unique
// name        String   @default("")
// bio         String?
// avatarImage String?
import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()

export default defineEventHandler(async (event) => {
  const body = await readBody(event)
  let user = null

  if (body.email)
    await prisma.user
      .create({
        data: {
          email: body.email,
          name: body.name || 'acroguest'
        }
      })
      .then((response) => {
        user = response
      })
  return {
    user
  }
})
