const mongoose = require("mongoose");

const mongo_url = process.env.MONGO;

mongoose
  .connect(mongo_url, {
    tls: true,
    replicaSet: "rs0",
  })
  .then(() => {
    console.log("MongoDB Connected...");
  })
  .catch((err) => {
    console.log("MongoDB Connection Error: ", err);
  });
