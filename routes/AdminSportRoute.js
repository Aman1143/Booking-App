import express from 'express' 
import { addSport, addSportCenter, getAllSportCenter, getSportS } from '../controllers/AdminController.js';
import { isAuthendicated } from '../middleware/Auth.js';
const router=express.Router();   


router.post('/addSportCenter',isAuthendicated,addSportCenter);
router.get('/getAllSportCenter',isAuthendicated, getAllSportCenter);
router.get('/getSports/:center_id',isAuthendicated,getSportS);
router.post('/addSport/:center_id',isAuthendicated,addSport);
export default router;