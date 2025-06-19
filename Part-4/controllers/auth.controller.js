const {
    userSignupValidationSchema, 
    userSigninValidationSchema
} = require('../lib/validators/auth.validators');
const AuthService = require('../services/auth.service');
const AuthError = require('../errors/app.error');
const JWT =require('jsonwebtoken');

async function handleSignUp(req, res) {
    //const body=req.body;
    const validationResult = await userSignupValidationSchema.safeParseAsync(req.body);
    if(validationResult.error) {
        return res.status(400).json({error: validationResult.error});
    }

    const {firstname, lastname, email, password} = validationResult.data;

    try{
        const token = await AuthService.signupWithEmailAndPassword({
            firstname,
            lastname,
            email,
            password
        });
        return res.status(201).json({ status:'success', data: {token} });
    }catch(err){
        if(err instanceof AuthError){
            return res.status(err.code).json({status:'error', message:err.message});
        }
        return res.status(500).json({ status:'error', error:'Internal server error'  });
    }
}

async function handleSignIn(req, res) {
    const validationResult = await userSigninValidationSchema.safeParseAsync(req.body);
    console.log(validationResult.data);
    if(validationResult.error) {
        return res.status(400).json({error: validationResult.error});
    }

    const {email, password} = validationResult.data;
    try{
        const token = await AuthService.signinWithEmailAndPassword({email, password});
        console.log("token in handle sign in ");
        console.log(token);
        return res.status(201).json({
            status:'success',
            message:`success in sign in for ${email}`,
            data:{token}
        });

    }catch(err){
        if(err instanceof AuthError){
            return res.status(err.code).json({status:'error', message:err.message});
        }
        return res.status(500).json({ status:'error', error:'Internal server error'  });
    }

}

async function handleMe(req, res){
    if(!req.user) return res.json({isLoggedIn:false});

    return res.json({isLoggedIn:true, data : {user:req.user}});

}


module.exports = {handleSignUp, handleSignIn, handleMe};

