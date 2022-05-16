export default function BoardModel(mongoose) {
    const boardSchema = mongoose.Schema({
        beans: String,
        roast: String,
        origin: String,
        flavor: String,
        acidity: String
    }, {timestamps: true})
    return mongoose.model('Board', boardSchema)

}
