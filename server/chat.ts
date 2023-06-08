import { Configuration, OpenAIApi } from 'openai'

export default defineEventHandler(async (event) => {
  try {
    // Unfolding the secrets within the event, like a digital origami!
    const body = await readBody(event)

    // We're securing the key to the language AI kingdom!
    const { OPENAI_API_KEY } = useRuntimeConfig()

    // Credentials ready, we're like language wizards with the right spell to enter the OpenAI realm.
    const configuration = new Configuration({
      apiKey: OPENAI_API_KEY
    })

    // Connecting with the powerful OpenAI oracle, time to tap into the flow of AI wisdom!
    const openai = new OpenAIApi(configuration)

    // Our horde of digital butterflies, AMI, is all set to take the stage if no other user input is provided.
    const userInput = body.user || 'ami@kindrobots.org'

    // The stage is set, the curtain lifts, let the AI chat magic begin!
    const { data } = await openai.createChatCompletion({
      model: 'gpt-3.5-turbo',
      user: userInput,
      messages: body.messages || [
        {
          role: 'user',
          content:
            'Reply with a fun tagline for kindrobots.org. We make positive tech to better the world.'
        }
      ],
      temperature: body.temperature || 1,
      max_tokens: body.max_tokens || 100,
      n: body.n || 1,
      stream: false,
      top_p: body.top_p || 1
    })

    // Woohoo! Our digital butterflies just had a successful chat with an AI. How cool is that?
    return data
  } catch (error) {
    console.error(
      'Oh no! It seems our butterflies hit a little turbulence: ',
      error
    )

    // Since we're using Nuxt, we'll re-throw the error. NuxtErrorBoundary will come to our rescue!
    throw error
  }
})
