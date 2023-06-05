// openai.js

async function createChatCompletion({ model, messages }) {
  const stream = got.stream('https://api.openai.com/v1/chat/completions', {
    headers: {
      Authorization: `Bearer ${process.env.OPENAI_API_KEY}`
    },
    json: {
      messages,
      model,
      stream: true
    },
    method: 'POST'
  })

  const choices = []

  stream.on('data', (chunk) => {
    const body = chunk.toString()

    for (const message of body.split('\n')) {
      if (message === '') {
        continue
      }

      if (message === 'data: [DONE]') {
        continue
      }

      if (!message.startsWith('data: ')) {
        continue
      }

      const json = JSON.parse(message.toString().slice('data: '.length))

      for (const choice of json.choices) {
        choices[choice.index] = choices[choice.index] || {}

        if (choice.delta.role) {
          choices[choice.index].role = choice.delta.role
        }

        if (choice.delta.content) {
          choices[choice.index].content = choices[choice.index].content || ''
          choices[choice.index].content += choice.delta.content
        }
      }
    }
  })

  return new Promise((resolve, reject) => {
    stream.on('error', reject)
    stream.on('end', () => resolve(choices))
  })
}

module.exports = createChatCompletion
