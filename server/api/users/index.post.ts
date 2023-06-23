// server/api/auth/signup.ts
import { hash } from 'bcrypt'
import prisma from './../prisma'

export default eventHandler(async (event) => {
  const body = await readBody(event)
  const email = body.email
  const password = body.password
  const hashedPass = await hash(password, 10)

  try {
    const user = await prisma.user.create({
      data: {
        email,
        hashedPass
        // include other fields as necessary
      }
    })
    return { status: 201, body: user }
  } catch (err) {
    return { status: 400, body: { error: 'Email already exists' } }
  }
})
