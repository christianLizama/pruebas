import express from 'express';
import morgan from 'morgan';
import cors from 'cors';
import mongoose from 'mongoose';
import path from 'path';
//const express=require('express');
//const morgan=require('morgan');
//const cors=require('cors');
const app=express();

mongoose.Promise=global.Promise;
mongoose.connect('mongodb+srv://diegoaguilera4:Messa@cluster0.ltzow.mongodb.net/messa?retryWrites=true&w=majority')
    .then(db => console.log('DB is connected'))
    .catch(err => console.error(err));


app.use(morgan('dev'));
app.use(cors());

app.use(express.json());
app.use(express.urlencoded({extended:true}));
app.use(express.static(path.join(__dirname,'public')));

app.set('port',process.env.PORT || 3000);

app.listen(app.get('port'),()=>{
    console.log('sv port '+ app.get('port'));
    console.log(path.join(__dirname,'public'));
});