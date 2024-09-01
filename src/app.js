import express from "express";
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url); 
const __dirname = path.dirname(__filename); 


const app = express()

app.use( express.static(__dirname + '/public/css') )
app.use( express.static(__dirname + '/public/script') )
app.use( express.static(__dirname + '/public/img') )

app.use( express.static(__dirname + '/public/') )



export default app


