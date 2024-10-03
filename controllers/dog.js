import Dog from '../models/dog.js';

const controllers = {
    getAllDogs: (req, res) => {
        const dogsList = Dog.getDogList();
        const token = req.cookies.token;
        res.status(200).render('layout', {
            title: 'Our Dogs',
            body: 'includes/dogs_list',
            dogsList,
            token
        });
    },
    getSingleDogById: (req, res) => {
        const dogId = req.params.id;
        const dog = Dog.getById(dogId); 
        const token = req.cookies.token; 
    
        if (!dog) {
            return res.status(404).render('404', {
                title: 'Dog Not Found',
                message: 'Dog not found.'
            });
        }
        res.render('layout', {
            title: dog.name,
            body: 'includes/dog',
            dog,
            token
        });
    }
    
};

export default controllers;
