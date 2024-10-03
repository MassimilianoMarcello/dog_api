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
    },
    getAddDogForm: (req, res) => {
        const token = req.cookies.token;
        res.render('layout', {
            token,
            title: 'Add Dog', 
            body: 'includes/addDogForm' 
        });
    },
    addDog: (req, res) => {
        try {
            const { name,breed,years,city,description,cost,img } = req.body;

            // Basic validation (optional)
            if (!name || !breed || !years ||!city ||!description ||!img || isNaN(cost)) {
                return res.status(400).render('layout', {
                    title: 'Add Dog',
                    body: 'includes/addDogForm',
                    error: 'All fields are required and price must be a number.'
                });
            }

            const newFlight = {
                name,
                cost: parseFloat(cost),
                breed,
               years,
               city,
               description,
               img
            };

            Dog.Add(newDog); 
            res.redirect('/api/Dogs_list');
        } catch (error) {
            res.status(500).render('500', { title: 'Server Error', message: 'Unable to add a new Dog.' });
        }
    },

    deleteDog: (req, res) => {
        const dogId = req.params.id;
        const dogExist = Flight.getById(dogId);
    
        if (dogExist) {
            try {
               Dog.deleteFlight(dogId); 
                res.redirect('/api/dogs_list'); 
            } catch (error) {
                console.error("Error deleting flight:", error);
                res.status(500).render('error', {
                    title: 'Error',
                    message: 'There was a problem deleting the dog.'
                });
            }
        } else {
            res.status(404).render('404', {
                title: '404 Page',
                message: 'Dog not found' 
            });
        }
    }

    
};

export default controllers;
