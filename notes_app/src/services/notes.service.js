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

export const updateNote = async (data)=>{
    const {id,title,description} = data;
    const notes = await notesModel.findById(id);
    if(!notes){
        throw new Error("notes has been not presented")
    }
    if(title !== undefined){
        notes.title = title;
    }
    if(description != undefined){
        notes.description = description;
    };
    await notes.save();

    return notes;
}


export const deleteNote = async (data)=>{
    const {id} = data;
    const val = await notesModel.findById(id);
    if(!val){
      throw new Error("this note has been not available");
    }
    await val.deleteOne();
    return val;

}


export const getAllNote  = async ()=>{
    const notes = await notesModel.find();
    return notes;
}