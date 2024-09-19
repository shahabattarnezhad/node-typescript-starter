import express, { Request, Response } from "express";

require("dotenv").config();
const cors = require("cors");
const app = express();

app.use(cors());

const PORT = process.env.PORT || 8000;

app.use(express.json());

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});

app.get("/customers", async (req: Request, res: Response) => {
  const customers = [
    { name: "John Smith", email: "john@gmail.com", phone: "+1234567891" },
    { name: "Jane Smith", email: "jane@gmail.com", phone: "+19876543219" },
  ];

  return res.status(200).json(customers);
});
