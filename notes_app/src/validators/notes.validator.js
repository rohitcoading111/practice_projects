import {validationResult,body} from "express-validator"


const notes = [
    body("title").trim()
    .notEmpty().withMessage("title is not a empty string").bail(),

    body("description").trim()
    .notEmpty().withMessage("description is not a emty string").bail(),

    (req,res,next)=>{
     const errors = validationResult(req);
     if(!errors.isEmpty()){
         return res.status(400).json({ errors: errors.array() });
     }
     next();
    }

]

