const express = require("express");
const path = require("path");
const app = express();
const PORT = process.env.PORT || 3000;
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

app.post("/api/notes", function(req, res) {
    const newNote = req.body;

    fs.readFile(path.join(__dirname, "db", "db.json"), function(err, data) {
        if (err) throw err;
        db = JSON.parse(data);
        newNote.id = db.length + 1;
        db.push(newNote);

        fs.writeFile(path.join(__dirname, "db","db.json"), JSON.stringify(db), function(err) {
            if (err) throw err;
        });
    
        res.json(newNote);       
    });
});

app.delete("/api/notes/:id", function(req, res) {
     let delNote = req.params.id;
     const rmNote = req.body;

     fs.readFile(path.join(__dirname, "db", "db.json"), function(err, data) {
        if (err) throw err;
        db = JSON.parse(data);
        db.splice(delNote -1, 1);

        fs.writeFile(path.join(__dirname, "db","db.json"), JSON.stringify(db), function(err) {
            if (err) throw err;
        });
        res.json(rmNote);       
    });
});

app.get("*", function(req, res) {
    res.sendFile(path.join(__dirname, "public", "index.html"));
  });

app.listen(PORT, function() {
    console.log("App listening on PORT " + PORT);
  });
  