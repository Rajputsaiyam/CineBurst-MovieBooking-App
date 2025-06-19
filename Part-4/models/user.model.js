const {Schema} = require('mongoose');
const mongoose = require('mongoose');

const userSchema = new Schema({
    firstname:{
        type:String,
        required:true,
    },
    lastname:{
        type:String,
    },
    email:{
        type:String,
        required:true,
        unique:true,
        trim:true,
        match: [/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/, 
            'Please fill a valid email address'],
    },
    password:{
        type:String,
        required:true,
    },
    role:{
        type:String,
        enum:['admin', 'user'],
        default:'user'
    },
    salt:{
        type:String,
        required:true, 
    }
},{timestamps:true});

const User = mongoose.model("user",userSchema);

module.exports = User;