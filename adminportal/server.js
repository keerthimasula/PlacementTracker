const express = require('express');
const mongoose = require('mongoose');
const comps = require('./companymodel')
const jwt = require('jsonwebtoken');
const middleware = require('./middleware')
const cors = require('cors');

const appliedcomps = require('./appliedcomps');




const app = express();
mongoose.connect('mongodb+srv://Nikhil:pwd123456@cluster0.bqph8.mongodb.net/plctrk1?retryWrites=true&w=majority').then(
    ()=> console.log('Db connected..')
)

app.use(express.json());
app.use(cors({origin:"*"}));


app.post('/compregister',async (req,res) =>{
    try{
        const { compname,email,description,eligibility,salary,lastdate,rounds,link } = req.body;
        const exist = await comps.findOne({email});
        if(exist){
            return res.status(200).send('Company has already been registered')
        }
        const existId = await comps.findOne({compname});
        if(existId){
            return res.status(200).send('This Hall Ticket has already been registered')
        }
        

        let newUser = new comps({
            compname,email,description,eligibility,salary,lastdate,rounds,link
        })
        newUser.save();
        return res.status(200).send('Company Registered Successfully')
    }
    catch(err){
        console.log(err)
        return res.status(500).send('compregister Server Error')
    }
})


app.post('/login',async (req,res)=>{
    try{
        const {email,password} = req.body;
        const exist = await users.findOne({email})
        if(!exist){
            return res.status(200).send('User does not exist please register')
        }
        if(exist.password !== password){
            return res.status(200).send('Password Invalid')
        }
        let payload = {
            user : {
                id : exist.id
            }
        }
        jwt.sign(payload,'jwtPassword',{expiresIn:360000000},
        (err,token)=>{
            if(err) throw err
            return res.json({token})
        })
    }
    catch(err){
        console.log(err);
        return res.status(500).send('Login Server Error')
    }
})




app.get('/getcomp',async(req,res)=>{
    try{
        return res.json(await comps.find())
    }
    catch(err){
        console.log(err);
        return res.send("getcomp server error")
    }
})




app.get('/indcompprofile/:id',async(req,res)=>{
    try{
        const exist = await comps.findById(req.params.id)
        return res.status(200).json(exist);

    }
    catch(err){
        console.log(err);
        return res.status(500).send('ind comp Server Error')
    }
})



app.get('/indregcompprofilestudent/:id',async(req,res)=>{
    try{
        const id = req.params.id
        const exist = await appliedcomps.find()
        const filtered = exist.filter(profile => profile.compId === id)
        return res.status(200).json(filtered);
    }
    catch(err){
        console.log(err);
        return res.status(500).send('ind comp Server Error')
    }
})













app.get('/getpresentuser',middleware,async(req,res)=>{
    try{
        const exist = await users.findById(req.user.id)
        return res.status(200).json(exist.collegeId);

    }
    catch(err){
        console.log(err);
        return res.status(500).send('getpresentuser Server Error')
    }
})










app.listen(5000,()=> console.log('Server is Running..'))