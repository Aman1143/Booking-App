import express from 'express'
import { booKSlot, getAllSportCenter, getField, getSportField } from '../controllers/UserController.js';
import { isAuthendicated } from '../middleware/Auth.js';
const router = express.Router();


router.get('/getAllSportCenterUser',isAuthendicated, getAllSportCenter);
router.get('/getSportField/:sport_id', isAuthendicated, getSportField);
router.get('/bookSlot/:field_id/:index', isAuthendicated, booKSlot);
router.get('/getField/:fieldId', isAuthendicated, getField);

export default router;