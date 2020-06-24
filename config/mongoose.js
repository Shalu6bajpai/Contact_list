//require the library
const mongoose=require('mongoose');
//connect to database
mongoose.connect('mongodb://localhost/contact_list_db');
//acquire the connection(tocheck if it is succesful)
const db=mongoose.connection;
//error
db.on('error',console.error.bind(console,'error connecting to db'));
//up and runnin print the message
db.once('open',function(){
    console.log('Succesfully connected to db');
});
