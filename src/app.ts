import express from "express";

import userRouter from "./routes/users";
const app = express();
const PORT = 3000;
app.use("/api/users", userRouter);

app.listen(PORT, () => {
  console.log(`App running on ${PORT}`);
});
