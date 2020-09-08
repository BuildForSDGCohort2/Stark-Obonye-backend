import mongoose from 'mongoose';
import dotenv, { config } from 'dotenv';

/** remote connection */
/* const uri = "mongodb+srv://team_275:04tLXMQ4mmllwy2P@cluster0-dghpw.mongodb.net/test?retryWrites=true&w=majority"; */
/** localhost */
dotenv.config();

mongoose.connect(config.DB_PATH_PROD, { useNewUrlParser: true, useUnifiedTopology: true });
const dbConnection = mongoose.connection;
export default dbConnection;
