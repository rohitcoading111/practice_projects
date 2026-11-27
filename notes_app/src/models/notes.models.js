import mongoose from "mongoose"

const notes = mongoose.Schema({
    title :{
        type:String,
        required:true,
    },
    description:{
        type:String,
        required:true
    },

},{timestamps:true})


const notesModel = mongoose.model("notesModel",notes);

export default notesModel;