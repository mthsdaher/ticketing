import express from 'express';

const router = express.Router();

router.post('/api/users/signout', (req, res) => {
<<<<<<< HEAD
  req.session = null;
=======
  req.session = null; //cookie-session library (destroying a session)
>>>>>>> 58553996d4a89ee01462b41c25bc7463cc6e64e7

  res.send({});
});

export { router as signoutRouter };
