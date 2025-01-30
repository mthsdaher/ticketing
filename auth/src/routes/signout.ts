import express from 'express';

const router = express.Router();

router.post('/api/users/signout', (req, res) => {
  req.session = null; //cookie-session library (destroying a session)

  res.send({});
});

export { router as signoutRouter };
