const express=require('express');
const port=8003;
const path=require('path');
const db=require('./config/mongoose');
const Contact=require('./models/contact');
const app=express();

app.set('view engine','ejs');
 app.set('views',path.join(__dirname,'views'));
 app.use(express.urlencoded());
 app.use(express.static('assests'));

 var contactlist = [
     {

    name : "shalu",
    phone : "100"
 },
 {
     name: "Tony",
     phone: "123"
 }
 ]

app.get('/',function(req,res){
    // console.log(__dirname);
    return res.render('home',{title:"I am flying"});
    // res.send('cool running');
});


app.get('/practice',function(req,res){
    return res.render('practice',{
        title:"contact list",
        
    });
    });
    app.get('/home',function(req,res){
        return res.render('home',{
            title:"contact list",
            contact_list:contactlist
            
        });
        });
        app.post('/create-contact',function(req,res){
            // return res.redirect('/practice');
            contactlist.push(req.body);
            return res.redirect('back');
            
        });
        // return res.redirect('/');
        // });



app.listen(port,function(err){
    if(err){
        console.log('error in running',err);
    }
    console.log('no problem',port);
});