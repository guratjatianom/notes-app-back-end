import { Router } from 'express';
import notes from '../notes.js';

const router = Router();

router.use('/', notes);

export default router;