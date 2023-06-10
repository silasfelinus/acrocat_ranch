import { PrismaClient } from '@prisma/client'
const prisma = new PrismaClient()

export default async (req, res) => {
  // Ensure we only respond to POST requests
  if (req.method !== 'POST') {
    return res.status(405).end(`Method ${req.method} not allowed`)
  }

  // Get image data from the request body
  const imageData = req.body

  // Validate image data
  if (!imageData || !imageData.name || typeof imageData.name !== 'string') {
    return res.status(400).json({ error: 'Invalid image data' })
  }

  try {
    // Check if an image with the same name exists
    const existingImage = await prisma.image.findUnique({
      where: {
        name: imageData.name
      }
    })

    let image
    if (existingImage) {
      // If image already exists, update it
      image = await prisma.image.update({
        where: { name: imageData.name },
        data: imageData
      })
    } else {
      // Otherwise, create a new image
      image = await prisma.image.create({
        data: imageData
      })
    }

    // Respond with the created or updated image data
    return res.status(200).json(image)
  } catch (error) {
    // Handle any errors
    console.error(error)
    return res
      .status(500)
      .json({ error: 'An error occurred while processing the image data' })
  }
}
