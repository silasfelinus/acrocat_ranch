// server/ai.js
import { Configuration, OpenAIApi } from 'openai'

const config = useRuntimeConfig()

const configuration = new Configuration({
  apiKey: process.env.OPENAI_API_KEY
})

const openai = new OpenAIApi(configuration)

export const getChatstream = async ({ messages }) => {
  const response = await openai.createCompletion(
    {
      model: 'text-davinci-003',
      prompt: 'Say this is a test',
      temperature: 0,
      max_tokens: 4096,
      stream: true
    },
    { responseType: 'stream' }
  )
  return response.data
}
