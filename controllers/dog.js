import Dog from '../models/dog.js';


const controllers={
    getAllDogs: (req,res)=>{
     const dogsList=   Dog.getDogList()
     const token =req.cookies.token
     res.status(200).render('layout',{
        title:'Our Dogs',
         body:'includes/dogs_list',
         dogsList,
         token

     })
     
    }
}

export default controllers