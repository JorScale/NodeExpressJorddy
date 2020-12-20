const mongoose = require("mongoose");
require('../Config/config.js');

let db;

module.exports = function Connection(){
    if(!db){
        db= mongoose.createConnection(`mongodb+srv://JorScale:${pwdbd}@jorddynode.ngxc8.mongodb.net/${cruster}?retryWrites=true&w=majority`);
    }
    return db;
}