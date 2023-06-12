import { PrismaClient } from '@prisma/client'

// model Tag {
// id        Int      @id @default(autoincrement())
// name      String   @default("")
// createdAt DateTime @default(now())
// updatedAt DateTime @updatedAt

const prisma = new PrismaClient()
export default defineEventHandler(async (event) => {
  const body = await readBody(event)

  return body
})
