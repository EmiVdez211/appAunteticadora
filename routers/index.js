import { Router } from"express";
const router = Router();

let users = [{
    id:"1",
    name:"Emilio",
    address:"ehe",
    age:21
}
]

//POST
router.post('/users/create', (req,res)=>{
    //BODY
    users.push(req.body);
    res.send("ok!");
});

//GET

router.get('/users', (req,res)=>{
    res.status(200).json(users);
});

//PUT
router.put('/users/update/:id', (req,res)=>{
    const user = users.find(u=>u.id === req.params.id);
    if(!user){
        res.status(404).send("No se encontro al usuario unu");
        return;
    }

    const updateUser = {...user, ...req.body}

    users = users.map(u=>u.id === req.params.id ? updateUser : u);
    res.status(200).send("Usuario actualizado con exito! úwù");
})

export default router;