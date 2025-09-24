import express from 'express';
import { signup,signin } from '../controllers/auth_controllers.js';

const router = express.Router();

router.post('/signup',signup)
router.post('/sigin',signin)

export default router;