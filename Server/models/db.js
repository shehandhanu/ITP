const mongoose = require('mongoose');

mongoose.connect(process.env.MONGODB_URI, (err) => {
    if(!err){ 
        console.log('Mongo DB Connection Success.'); 
    }
    else{
        console.log('Error in Mongo DB Connection : ' + JSON.stringify(err, undefined, 2)) 
    }
});

require('./employee.model');  