import express from 'express';
<<<<<<< HEAD
import { currentUser } from '@rallycoding/common';
=======
import { currentUser } from '../middlewares/current-user'; //implementation of the logic about the currentUser
>>>>>>> 58553996d4a89ee01462b41c25bc7463cc6e64e7

const router = express.Router();

router.get('/api/users/currentuser', currentUser, (req, res) => {
  res.send({ currentUser: req.currentUser || null });
});

export { router as currentUserRouter };
