import express from 'express';
import { signup,signin, google } from '../controllers/auth_controllers.js';

const router = express.Router();

router.post('/signup',signup)
router.post('/sigin',signin)
router.post('/google',google)

export default router;