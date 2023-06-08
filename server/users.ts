import { IncomingMessage, ServerResponse } from 'http'
import { PrismaClient, User } from '@prisma/client'

const prisma = new PrismaClient()

interface Request extends IncomingMessage {
  body: any
}
interface UserCreateInput {
  name: string
  email: string
}
interface UserInput extends Partial<User> {
  id?: number
  name?: string
  email?: string
}
interface UserUpdateInput {
  id: number
  name?: string
  email?: string
}

function handleError(
  error: unknown,
  res: ServerResponse,
  defaultMessage: string
) {
  if (error instanceof Error) {
    console.error(defaultMessage, error.message)
    if (error.message.includes('P2025')) {
      res.statusCode = 404
      res.end(JSON.stringify({ error: 'User not found' }))
    } else {
      res.statusCode = 500
      res.end(JSON.stringify({ error: error.message }))
    }
  }
}

function validateUserInput(
  input: UserInput,
  res: ServerResponse,
  requireId = false
) {
  if (requireId && !input.id) {
    res.statusCode = 400
    res.end(JSON.stringify({ error: 'ID is required' }))
    return false
  }
  if (!input.name || !input.email) {
    res.statusCode = 400
    res.end(JSON.stringify({ error: 'Name and email are required' }))
    return false
  }
  return true
}

export default {
  get: async (req: Request, res: ServerResponse) => {
    try {
      const users = await prisma.user.findMany()
      res.statusCode = 200
      res.end(JSON.stringify(users))
    } catch (error) {
      handleError(error, res, 'Error fetching users:')
    }
  },
  post: async (req: Request, res: ServerResponse) => {
    const userInput = req.body as UserCreateInput
    if (!validateUserInput(userInput, res)) return
    try {
      const newUser = await prisma.user.create({
        data: userInput
      })
      res.statusCode = 201
      res.end(JSON.stringify(newUser))
    } catch (error) {
      handleError(error, res, 'Error creating user:')
    }
  },

  put: async (req: Request, res: ServerResponse) => {
    const userInput = req.body as UserUpdateInput
    if (!validateUserInput(userInput, res, true)) return
    try {
      const updatedUser = await prisma.user.update({
        where: { id: userInput.id },
        data: userInput
      })
      res.statusCode = 200
      res.end(JSON.stringify(updatedUser))
    } catch (error) {
      handleError(error, res, 'Error updating user:')
    }
  },

  delete: async (req: Request, res: ServerResponse) => {
    const userInput = req.body as UserInput
    if (!validateUserInput(userInput, res, true)) return
    try {
      const deletedUser = await prisma.user.delete({
        where: { id: Number(userInput.id) }
      })
      res.statusCode = 200
      res.end(JSON.stringify(deletedUser))
    } catch (error) {
      handleError(error, res, 'Error deleting user:')
    }
  }
}
