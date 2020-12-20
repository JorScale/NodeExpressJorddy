const moongoose= require('mongoose');
const Schema = moongoose.Schema;

module.exports = ()=>{
    var modelTask = new Schema({
        title: String,
        description: String,
        status: Boolean
    });
    return moongoose.model('Task',modelTask);
}




