import express from 'express';
import { currentUser } from '../middlewares/current-user'; //implementation of the logic about the currentUser

const router = express.Router();

router.get('/api/users/currentuser', currentUser, (req, res) => {
  res.send({ currentUser: req.currentUser || null });
});

export { router as currentUserRouter };
