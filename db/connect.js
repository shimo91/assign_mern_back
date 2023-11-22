const mongoose = require('mongoose');
require('dotenv').config();
mongoose.connect(`mongodb+srv://${process.env.DB_USERNAME}:${process.env.DB_PASSWORD}@cluster0.v21na5t.mongodb.net/employee?retryWrites=true&w=majority`)
.then(()=>{
    console.log('connected to employeedb');
})
.catch(()=>{
    console.log('Error!! No connection');
})