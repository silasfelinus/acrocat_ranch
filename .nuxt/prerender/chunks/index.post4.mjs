import { eventHandler, readBody } from 'file:///home/silasfelinus/code/kindrobots/node_modules/h3/dist/index.mjs';
import { hash } from 'file:///home/silasfelinus/code/kindrobots/node_modules/bcrypt/bcrypt.js';
import prisma from './prisma.mjs';
import 'file:///home/silasfelinus/code/kindrobots/node_modules/@prisma/client/index.js';

const index_post = eventHandler(async (event) => {
  const body = await readBody(event);
  const email = body.email;
  const password = body.password;
  const hashedPass = await hash(password, 10);
  try {
    const user = await prisma.user.create({
      data: {
        email,
        hashedPass
        // include other fields as necessary
      }
    });
    return { status: 201, body: user };
  } catch (err) {
    return { status: 400, body: { error: "Email already exists" } };
  }
});

export { index_post as default };
//# sourceMappingURL=index.post4.mjs.map
