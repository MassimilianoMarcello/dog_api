import { v4 as Id } from 'uuid';

const dogs = [
    {
        id: Id(),
        name: 'Buddy',
        breed: 'Golden Retriever',
        years: 3,
        city: 'New York',
        description: 'A friendly and energetic dog who loves to play fetch.',
        cost: 500,
        img: '/img/Golden_Retriver.png'
    },
    {
        id: Id(),
        name: 'Max',
        breed: 'German Shepherd',
        years: 5,
        city: 'Los Angeles',
        description: 'Loyal and protective, Max is great with families.',
        cost: 700,
        img: '/img/German_Shepherd.png'
    },
    {
        id: Id(),
        name: 'Bella',
        breed: 'Border Collie',
        years: 2,
        city: 'Chicago',
        description: 'A sweet and playful dog who loves swimming.',
        cost: 600,
        img: '/img/Border_collie.png'
    },

    {
        id: Id(),
        name: 'Rocky',
        breed: 'Normal Regular MF Dog',
        years: 6,
        city: 'Miami',
        description: 'Relaxed and friendly, Rocky loves to cuddle.',
        cost: 11750,
        img: '/img/Normal_Dog.png'
    }
];

class Dog {
    static getDogList() {
        return dogs;
    }
    static getById(id){
        return dogs.find( dog=> {return dog.id === id})

    }
    static Add(dog){
        const newDog={
            id:Id(),
            ...dog}
           dogs.push(newDog)
            return dog
        }
   

        static deleteDog(id) {
            const index = dogs.findIndex(dog => dog.id === id); 
            if (index !== -1) {
               dogs.splice(index, 1); 
                return true; 
            }
            return false; 
        }

}


export default Dog
