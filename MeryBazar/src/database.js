const mongoose =require('mongoose');
mongoose.connect("mongodb+srv://meryglez03:Galana2018@maye13.fpdexvo.mongodb.net/MayeBazar?retryWrites=true&w=majority")
.then(db=>console.log("Mongodb connected..."))
.catch(err=>console.error(err));