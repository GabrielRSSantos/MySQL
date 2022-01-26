const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const model = require('./models');
const user = model.User;

let app = express();
app.use(cors());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());


app.post('/create', async (req, res) => {
    let reqs = await model.User.create({
        'name': req.body.nameUser,
        'password': req.body.passwordUser,
        'email': req.body.emailUser,
        'balance': 1000,
        'createdAt': new Date(),
        'updtatedAt': new Date()
    });
    if (reqs) {
        res.send(JSON.stringify('O usuário foi cadastrado com sucesso!'));
    }
});

app.post('/login', async (req, res) => {
    let login = await model.User.findOne({
        where: {
            name: req.body.nameUser,
            password: req.body.passwordUser
        }
    });
    if(login === null){
        console.log('Não conseguiu acessar');
    }else{
        res.send(login);
        return nome = req.body.nameUser;
    }
});

 app.get('/read', async (req,res)=>{
    let users = await user.findOne({
        where:{
            name: nome
        }
    });
    res.send(users);
 });


let port = process.env.PORT || 3000;
app.listen(port, (req, res) => {
    console.log('Servidor Rodando');
})



// Exemplos do CRUD

// app.get('/create',async (req,res)=>{
//     let create=await user.create({
//     name: "joao",
//     password: "abc",
//     createdAt: new Date(),
//     updatedAt: new Date()

// });
//     res.send('Usuario criado com sucesso');
// });

// app.get('/read', async (req,res)=>{
//     let read=await user.findAll({
//         raw:true
//     });
//     console.log(read);
// });

// app.get('/update', async (req,res)=>{
//     let update=await user.findByPk(1).then((response)=>{
//         response.name='Tiagooooos',
//         response.password='123',
//         response.save();
//     });
// });

// app.get('/delete', async (req,res)=>{
//     user.destroy({
//         where: {id:1}
//     });
// });
