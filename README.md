# Krieffer_noteTaker

## Note Taker
  This assignment was to write the backend code and connect it to the given front end code to create a note taker application. The completed application will allow the user to write a note, save it, and delete the selected note. 

### GET API Route
  The GET route reads the db.json file and returns the saved notes as JSON. 

![get](https://github.com/Krieffer21/Krieffer_noteTaker/blob/master/assets/Screen%20Shot%202020-06-16%20at%203.18.52%20PM.png)

### POST API Route
  The POST route receives a new note, gives it a unique id to save it to the request body and adds it to the db.json file. It then returns the new note to the client. 

![post](https://github.com/Krieffer21/Krieffer_noteTaker/blob/master/assets/Screen%20Shot%202020-06-16%20at%203.17.54%20PM.png)

### DELETE API Route
  The DELETE route uses the unique id of the note selected to delete it. Then it rewrites the notes to the file.    
  
![delete](https://github.com/Krieffer21/Krieffer_noteTaker/blob/master/assets/Screen%20Shot%202020-06-16%20at%203.18.04%20PM.png)

### Note Taker GIF
  In the gif below you can see the Heroku url connects to the functioning application. 
  Deployed link: https://morning-bastion-53699.herokuapp.com/notes

![](https://github.com/Krieffer21/Krieffer_noteTaker/blob/master/assets/note.gif)
