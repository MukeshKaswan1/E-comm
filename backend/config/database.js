const mongoose = require("mongoose");

const connectDatabase = () => {
    mongoose.connect(process.env.DB_URI || "mongodb+srv://saransh9803:Saransh%40123@cluster0.hel1jjm.mongodb.net/E-Commerce", {useNewUrlParser:true, useUnifiedTopology: true}).then((data) => {
            console.log(`MongoDB connected with server: ${data.connection.host}`);
        });
}

module.exports = connectDatabase;