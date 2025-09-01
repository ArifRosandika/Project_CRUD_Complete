import express from 'express';
import { getUser, getUserId, userCreate, userUpdate, userDelete }  from '../controller/userControl.js';

const router = express.Router();

router.get('/user', getUser);
router.get('/user/:id', getUserId);
router.post('/user', userCreate);
router.patch('/user/:id', userUpdate);
router.delete('/user/:id', userDelete);

export default router;