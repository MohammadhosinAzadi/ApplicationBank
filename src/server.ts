import express, { Application } from "express";
import bodyParser from "body-parser";
import userRoutes from "./Routes/userRoutes";
import accountRoutes from "./Routes/accountRoutes";
import transactionRoutes from "./Routes/transactionRoutes";

const app: Application = express();
const PORT = 3000;

app.use(bodyParser.json());

app.use("/users", userRoutes);
app.use("/accounts", accountRoutes);
app.use("/transactions", transactionRoutes);

app.listen(PORT, () => {
  console.log(` Server running at http://localhost:${PORT}`);
});
