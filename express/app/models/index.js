import dotenv from 'dotenv'
import mongoose from 'mongoose'
import BoardModel from './Board.js'

mongoose.Promise = global.Promise

const db = {}
db.mongoose = mongoose
db.url = dotenv.MONGO_URI
db.Board = new BoardModel(mongoose)

export default db