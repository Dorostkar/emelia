const express = require("express");
const app = express();

const PORT = process.env.PORT || 5000; //Heroku  set the port for us
app.get("/", (req, res) => {
  res.send({ message: "secount deploy", deploy: {} });
});

app.listen(PORT, () => {
  console.log(`Server is up on port ${PORT}`);
});
