import { OpenAIApi } from 'openai'

export default async (req, res) => {
  const openai = new OpenAIApi({
    apiKey: process.env.OPENAI_API_KEY
  })

  try {
    const gpt3Response = await openai.createCompletion({
      model: 'gpt-3.5-turbo',
      prompt: req.body.prompt,
      max_tokens: req.body.max_tokens,
      temperature: req.body.temperature
    })

    res.status(200).json(gpt3Response.data)
  } catch (error) {
    res.status(500).json({ message: 'An error occurred.' })
  }
}
