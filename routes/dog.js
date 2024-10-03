import express from 'express';
import controllers from '../controllers/dog.js';
import verifyToken from '../middleware/verifyToken.js';

const router = express.Router()

const {getAllDogs}=controllers


router.get('/dogs_list',getAllDogs)


export default router