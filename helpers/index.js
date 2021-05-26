const createPostValidator = (req,res,next) => {
    req.check('title',"Title needed").notEmpty()
    req.check('title',"Title should be more than 4 to 150 chars").isLength({
        min:4,
        max:150
    });
    req.check('body',"body needed").notEmpty()
    req.check('body',"body should be more than 4 to 150 chars").isLength({
        min:4,
        max:2000
    });

    const errors = req.validationErrors()
    if(errors){
        const firsterr = errors.map((error)=>error.msg[0] )
        return res.status(400).json({error:firsterr}) 
    }
    next();
}