import mongoose from "mongoose";

const connection = {}; /* creating connection object*/

async function connectMongo() {
  mongoose.connect(process.env.MONGO_URI);

  /* connecting to our database */
  const db = mongoose.connect(process.env.MONGO_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useFindAndModify: false,
  });

  //   connection.isConnected = db.connections[0].readyState;
  connection.isConnected = mongoose.connection.readyState;
}

export default connectMongo;
