import express from "express";

const app = express();
const PORT = 2004;

app.get("/", (req, res) => {
  res.send("hello world");
});

app.listen(PORT, () => {
  console.log(`Máy đang chạy trên cổng ${PORT} nà <3!!`);
});
