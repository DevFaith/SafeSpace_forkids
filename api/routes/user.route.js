import express from 'express';
import { helpUser } from '../controllers/user.controller.js';

const router = express.Router();

router.post('/help', helpUser);

export default router;
