const mongoose = require ('mongoose');
const databaseUrl = process.env.DATABASE_URL;

const connectDb = async () => {
    try {
        await mongoose.connect(databaseUrl);

        console.log('Connection of Database: Success');
    } catch (error) {
        console.log(error);
    }
}

module.exports = connectDb;

