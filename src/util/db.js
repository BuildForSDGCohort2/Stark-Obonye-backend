
import mongoose from 'mongoose';

/** remote connection */
/* const uri = "mongodb+srv://team_275:04tLXMQ4mmllwy2P@cluster0-dghpw.mongodb.net/test?retryWrites=true&w=majority"; */
/** localhost */
const uri = '';
mongoose.connect(uri, { useNewUrlParser: true, useUnifiedTopology: true });
const dbConnection = mongoose.connection;
export default dbConnection;