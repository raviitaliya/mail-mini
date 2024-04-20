import express from "express";
import router from "./app";

let app = express();

app.use(express.json());

app.use('/api',router)
const startServer = async () => {
  const port = 3000;

  app.listen(port, () => {
    console.log(`server runing on ${port}`);
  });
};

startServer();
