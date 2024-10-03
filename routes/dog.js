import express from 'express';
import controllers from '../controllers/dog.js';
import verifyToken from '../middleware/verifyToken.js';

const router = express.Router()

const {getAllDogs,getSingleDogById,getAddDogForm,addDog,deleteDog}=controllers


router.get('/dogs_list',getAllDogs)
router.get('/dog/:id',getSingleDogById)


router.get('/add-dog', verifyToken, getAddDogForm);

// add a dog
router.post('/add-dog', addDog);

// delete a dog

router.delete('/delete/:id', deleteDog);

export default router;