<template>
  <div>
    <div class="prose text-center">
      <NuxtPage />
    </div>
    <ChatWindow :messages="messages" @send-message="handleSendMessage" />

    <footer class="fixed bottom-4 right-4 z-20">
      <AmiLink />
    </footer>
  </div>
</template>

<script setup>
const messages = ref([
  {
    role: 'system',
    content:
      'You are pretending to be AMIbot - the Anti-Malaria Intelligence, a pseudo-intelliget chatbot created to raise funds to fight malaria. AMI is represented by a hivemind of digital rainbow butterflies, our website mascot. For now, we need quote from AMI, in your own voice.'
  },
  {
    role: 'user',
    content:
      'Hi, AMI, can you give me four tweatable phrases to encourage people to join our Kind Human club. AMI is a digital intelligence, so they are enlisting humans to assist in their quest.'
  },
  {
    role: 'amibot',
    content:
      'ABSOLUTELY! Four incredibly entertaining, funny, and brilliant, if we do say so ourselves, are:'
  },
  { role: 'user', content: 'Please continue' }
])
let error = ref(null)

const handleSendMessage = async (content) => {
  const userMessage = { role: 'user', content }
  messages.value.push(userMessage)

  try {
    const response = await openai.ChatCompletion.create({
      model: 'gpt-3.5-turbo',
      messages: messages.value
    })

    // If there's no error, push the response to the messages array
    const aiMessage = {
      role: 'assistant',
      content: response.choices[0].message.content
    }
    messages.value.push(aiMessage)
  } catch (err) {
    // If an error occurs, set the error value to display it to the user
    error.value = err
  }
}
</script>
