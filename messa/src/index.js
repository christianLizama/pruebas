import express from 'express';
import morgan from 'morgan';
import cors from 'cors';
import path from 'path';
import mongoose from 'mongoose';
import router from './routes';
//const express = require('express');
//const morgan = require('morgan');
//const cors=require('cors');
//const mongoose = require('mongoose');

const app = express();
mongoose.Promise=global.Promise;
mongoose.connect('mongodb+srv://diegoaguilera4:Messa@cluster0.ltzow.mongodb.net/messa?retryWrites=true&w=majority')
    .then(db => console.log('DB is connected'))
    .catch(err => console.error(err));

    


//Middlewares
app.use(morgan('dev'));
app.use(express.json());
app.use(express.urlencoded({extende:true}));
app.use(express.static(path.join(__dirname,'public')));
app.use(cors());

//Routes
app.use('/api',router);

//Settings
app.set('port', process.env.PORT || 4000);

//Static files
app.use(express.static(__dirname + '/public'));

//Server is listening
app.listen(app.get('port'), () => {
    console.log('Server on port', app.get('port'));
    console.log(path.join(__dirname,'public'));
});
