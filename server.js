const express = require("express");
const app = express();

app.listen(3000, function () {
  console.log("Server is listening on port 3000. Ready to accept requests!");
});
app.get("/", function (req, res) {
  res.send("Yay Node!");
});
app.get("/node", function (req, res) {
  res.send("Hello Node!");
});

app.get("/cyf", function (req, res) {
  res.send("CYF IS FANTASTIC");
});
app.get("/", function (req, res){
  let amount = 5;
  res.send("Hello my chocolate" + amount)
})
app.get("/chocolate", function (req, res) {
  let searchQuery = req.query.page;
  let searchQuery1 = req.query.limit;
  res.send(`Hello World! You searched for ${searchQuery} and ${searchQuery1}`);
});
