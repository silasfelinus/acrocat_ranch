import { defineEventHandler, readBody, createError } from 'h3';
import prisma from './prisma.mjs';
import '@prisma/client';

const index_post = defineEventHandler(async (event) => {
  try {
    const body = await readBody(event);
    const requiredFields = ["messages"];
    for (const field of requiredFields) {
      if (!body[field]) {
        throw new Error(`Missing data. Please make sure to provide ${field}.`);
      }
    }
    const conversation = await prisma.conversation.create({
      data: {
        messages: {
          create: body.messages
        }
      },
      include: {
        messages: true
      }
    });
    return conversation;
  } catch (error) {
    let errorMessage = "An error occurred while creating the conversation.";
    if (error instanceof Error) {
      errorMessage += ` Details: ${error.message}`;
    }
    throw createError({
      statusCode: 500,
      statusMessage: errorMessage
    });
  }
});

export { index_post as default };
//# sourceMappingURL=index.post3.mjs.map
