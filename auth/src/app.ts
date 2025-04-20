import express from 'express';
import 'express-async-errors';
import { json } from 'body-parser';
import cookieSession from 'cookie-session';
<<<<<<< HEAD
import { errorHandler, NotFoundError } from '@rallycoding/common';
=======
>>>>>>> 58553996d4a89ee01462b41c25bc7463cc6e64e7

import { currentUserRouter } from './routes/current-user';
import { signinRouter } from './routes/signin';
import { signoutRouter } from './routes/signout';
import { signupRouter } from './routes/signup';
<<<<<<< HEAD
=======
import { errorHandler } from './middlewares/error-handler';
import { NotFoundError } from './errors/not-found-error';
>>>>>>> 58553996d4a89ee01462b41c25bc7463cc6e64e7

const app = express();
app.set('trust proxy', true);
app.use(json());
app.use(
  cookieSession({
    signed: false,
<<<<<<< HEAD
    secure: false,
=======
    secure: process.env.NODE_ENV !== 'test'
>>>>>>> 58553996d4a89ee01462b41c25bc7463cc6e64e7
  })
);

app.use(currentUserRouter);
app.use(signinRouter);
app.use(signoutRouter);
app.use(signupRouter);

app.all('*', async (req, res) => {
  throw new NotFoundError();
});

app.use(errorHandler);

export { app };
