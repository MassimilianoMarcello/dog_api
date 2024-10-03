import express from 'express';
import controllers from '../controllers/dog.js';
import verifyToken from '../middleware/verifyToken.js';

const router = express.Router()

const {getAllDogs,getSingleDogById}=controllers


router.get('/dogs_list',getAllDogs)
router.get('/dog/:id',getSingleDogById)


export default router