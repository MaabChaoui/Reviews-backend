import express, { Request, Response } from 'express';
import { config } from "./configs/config";

let init = async () => {
  const app = express();
  app.use(express.json());

  app.get('/what', (req: Request, res: Response) => {
    res.send("all gooddddd?");
  })

  app.get("/", (req: Request, res: Response) => {
    res.send("<h1>Welcome, to this API</h1>");
  });

  try {
    app.listen(config.port, () => {
      console.log("listening on port " + config.port);
    });

    console.log("initialized");
  } catch (error) {
    console.log("error:", error);
  }
};
init();