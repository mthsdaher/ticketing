import mongoose from 'mongoose';

import { app } from './app';

<<<<<<< HEAD
=======
import dotenv from 'dotenv';
dotenv.config();

>>>>>>> 58553996d4a89ee01462b41c25bc7463cc6e64e7
const start = async () => {
  if (!process.env.JWT_KEY) {
    throw new Error('JWT_KEY must be defined');
  }
<<<<<<< HEAD
  if (!process.env.MONGO_URI) {
    throw new Error('MONGO_URI must be defined');
  }

  try {
    await mongoose.connect(process.env.MONGO_URI);
=======

  try {
    await mongoose.connect('mongodb://auth-mongo-srv:27017/auth');

>>>>>>> 58553996d4a89ee01462b41c25bc7463cc6e64e7
    console.log('Connected to MongoDb');
  } catch (err) {
    console.error(err);
  }

  app.listen(3000, () => {
    console.log('Listening on port 3000!!!!!!!!');
  });
};

start();
