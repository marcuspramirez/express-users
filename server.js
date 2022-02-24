const cors = require("cors");
const express = require("express");
const app = express();
const port = process.env.PORT || 3400;


// middleware
app.use(express.json());
app.use(cors());


app.get("/", (req, res) => {
  res.send("Welcome to the Users API");
});

app.get("/users", (req, res) => {
    res.send("This is where all the users will live?!");
  });

  app.get("/:id", (req, res) => {
      const wildcard = req.params['id'];
    res.send(`The ID you hit is ${wildcard}`);
    console.log(wildcard)
  });

  app.get("/:id1/:id2", (req, res) => {
    const id1 = req.params['id1'];
    const id2 = req.params['id2'];
    const sum = parseInt(id1) + parseInt(id2);
  if(isNaN(sum)){
      res.send(`NaN has been returned`)
  } else res.send(`${id1} plus ${id2} = ${sum}`)
 
});




app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});
