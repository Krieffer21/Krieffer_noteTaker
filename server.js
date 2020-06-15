const express = require("express");
const path = require("path");
const app = express();
const PORT = 3000;
const db = require("./db/db.json");

require("./public/index.html")(app);
require("./public/notes.html")(app);

app.use(express.urlencoded({ extended: true }));
app.use(express.json());


app.get("/notes", function(req, res) {
    res.sendFile(path.join(__dirname, "notes.html"));
  });
  app.get("*", function(req, res) {
    res.sendFile(path.join(__dirname, "index.html"));
  });
    
app.get("/api/notes", function(req, res) {
    res.json(db);
})
app.post("/api/notes", function(req, res) {
    
    let requestData = "";

    req.on("data", function(data) {
        requestData += data;
      });
    
})



app.listen(PORT, function() {
    console.log("App listening on PORT " + PORT);
  });
  