// M9ashnqIYwG19TN9

const mongoose = require('mongoose');

const connectDB = async () => {
    try {
        const conn = await mongoose.connect("mongodb+srv://raikamiryu:M9ashnqIYwG19TN9@cluster0.cy8jb.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0");
        console.log(`MongoDB Connected: ${conn.connection.host}`);
    } catch (error) {
        console.log(error);
        process.exit(1);
    }
}

module.exports = connectDB