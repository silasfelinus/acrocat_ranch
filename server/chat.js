// Importing the required OpenAI packages and the helper from Nuxt server

// Defining a Nuxt server route
module.exports = async function handler(req, res) {
  if (req.method !== 'POST') {
    // This handler only accepts POST requests, reject anything else
    res.statusCode = 405
    res.end('Method Not Allowed')
    return
  }

  try {
    // Unfolding the secrets within the event, like a digital origami!
    const body = await new Promise((resolve, reject) => {
      let data = ''
      req.on('data', (chunk) => (data += chunk))
      req.on('end', () => resolve(JSON.parse(data)))
      req.on('error', reject)
    })

    // We're securing the key to the language AI kingdom!
    const { OPENAI_API_KEY } = process.env

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
    res.statusCode = 200
    res.setHeader('Content-Type', 'application/json')
    res.end(JSON.stringify(data))
  } catch (error) {
    console.error(
      'Oh no! It seems our butterflies hit a little turbulence: ',
      error
    )

    // If we hit a snag, let's tell the client about it with a 500 status code and the error message
    res.statusCode = 500
    res.setHeader('Content-Type', 'text/plain')
    res.end(`Server error: ${error.message || error.toString()}`)
  }
}
