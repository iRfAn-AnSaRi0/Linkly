import express from 'express';
import cors from 'cors';

const app = express();

app.use(cors({
    origin: "*",  
    // credentials: true                 
}));

app.use(express.json({ limit: "24kb" }));
app.use(express.urlencoded({ limit: "24kb", extended: true }));
import { Urlroute } from './routes/UrlRoute.js';

app.use(Urlroute);

export { app };