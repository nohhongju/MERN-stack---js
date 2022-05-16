import express from "express"
import cors from 'cors'
import dotenv from 'dotenv'
import BoardService from "../services/board.js"

dotenv.config()
const corsOptions = {
    origin: process.env.ORIGIN,
    optionsSuccessStatus: 200
}
const app = express()
app.use(cors());
app.use(function (_req, res, next) {
    res.header(
        "Access-Control-Allow-Headers",
        "x-access-token, Origin, Content-Type, Accept"
    );
    next();
});

app.post('/write', cors(corsOptions), (req, res) => {
    console.log("1. req.body"+JSON.stringify(req.body))
    BoardService().write(req, res)
})

app.get('/list', cors(corsOptions), (req, res) => {
    BoardService().list(req, res)
})

export default app
