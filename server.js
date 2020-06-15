const express = require("express");
const path = require("path");
const app = express();
const PORT = 3000;
const fs = require("fs");

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static("public"));

app.get("/notes", function(req, res) {
    res.sendFile(path.join(__dirname, "public", "notes.html"));
  });
    
app.get("/api/notes", function(req, res) {
    fs.readFile(path.join(__dirname, "db", "db.json"), function(err, data) {
        if (err) throw err;
        return res.json(JSON.parse(data));         
    });

});

// app.post("/api/notes", function(req, res) {
    
//     req.on("data", function(data) {
//         const newNote = req.body;
//         res.json(newNote);
    
//         newNote += data;
//         // write to db file
//         res.writeHead(200, {"Content-type": "db/db.json"});
//       });
    
// });

// app.delete("/api/notes/:id", function(req, res) {
//     const delNote = req.params.${id};
//     console.log(chosen);
  
    
// })

app.get("*", function(req, res) {
    res.sendFile(path.join(__dirname, "public", "index.html"));
  });

app.listen(PORT, function() {
    console.log("App listening on PORT " + PORT);
  });
  