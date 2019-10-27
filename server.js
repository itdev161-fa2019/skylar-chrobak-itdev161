import express from 'express';
import connectDatabase from './config/db';
import {check, validationResult} from 'express-validator';
import cors from 'cors';
const app = express();
app.use(express.json({extended:false}));
app.use(
    cors({
        origin: 'http://localhost:3000'
    })
);

app.get('/',(req,res)=>
    res.send('http get request sent to root api endpoint')
    );
const port = 5000;
app.listen(port, () => console.log(`Express server running on port ${port}`));