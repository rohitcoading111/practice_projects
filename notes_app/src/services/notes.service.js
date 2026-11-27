import notesModel from "../models/notes.models.js"


export const createNote = async (data)=>{
    const {title,description} = data;
    const present = await notesModel.findOne({
        title,
    })
    if(present){
        throw new Error ("data already presented");
    }
    const note = await notesModel.create({
        title,
        description
    });
    return note;
   
}