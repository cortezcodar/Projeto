
import express from 'express';
import userscontroler from './controller/userscontroler';

const router = express.Router();


 router.post('/users', userscontroler.create);
 router.get('/users', userscontroler.findAll);
 router.get('/users/userID', userscontroler.findOne );
 router.put('/users/:userID',userscontroler.update  );
 router.delete('/users/:userID', userscontroler.delete);

export { router };



