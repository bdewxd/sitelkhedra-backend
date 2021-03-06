// ////////////////////// bonk ///////////////////
let express = require('express');
let app = express();
const cors = require("cors");
const bodyParser = require('body-parser');
const mongoose = require ('mongoose');
const cookieParser = require('cookie-parser');
const jwt = require("jsonwebtoken");
const PORT = process.env.port || 5000;
const signup = require('./signup.js');
const login = require('./login.js');
const profile = require('./profile.js');
const cartel = require('./cartel.js');
const products = require('./products.js');
const logout = require('./logout.js');
////////////// 2-db connection ///////////////////
const dbURL="mongodb+srv://user1:1234567890@site-lkhedra-cluster.bzoic.mongodb.net/site-lkhedra-db";
mongoose.connect(dbURL,{useNewUrlParser:true})
.then(result => app.listen(5000, ()=>{
    console.log('listening to requesta');
}) ) 
.catch(err => console.log(err) );
////////////////////////////////////////////

/////////// 3-middlewares //////////////////////
app.use(cookieParser());
app.use(bodyParser.urlencoded({ extended: false }));
const corsOptions ={
   origin:'http://localhost:3000', 
   credentials:true,
   optionSuccessStatus:200,
}
app.use(cors(corsOptions));
app.use(bodyParser.json());
/////////////////////////////////




                 ///////////////////////////////    4-Routes and Requests    /////////////////////////////////////////


// cartel //
app.use('/cartel', cartel);
// profile //
app.use('/profile', profile);
// login ///
app.use('/login', login);
// logout //
app.use('/logout', logout);
//sign up//
app.use('/signup', signup);
// products //
app.use('/Products', products);
