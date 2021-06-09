const express = require("express");
const userRouter = require("../src/routes/user.router");
const app = express();
const PORT = 3000;

app.set("view engine", "ejs");
app.use(express.json());
app.use(express.static("public"));
// app.use("/css", express.static(__dirname + "public/css"));

app.use("/users", userRouter);

app.get("/", (req, res) => {
  res.render();
});

app.listen(PORT, () => {
  console.log(`Listening on port ${PORT}`);
});
