import { createNote,getAllNote,getSingleNote,updateNote,deleteNote } from "../services/notes.service.js";

export const createNotesController = async (req, res) => {
    try {
        const data = await createNote(req.body);
        return res.status(201).json({
            success: true,
            message: "Note created successfully",
            data,
        });
    } catch (error) {
        return res.status(500).json({
            success: false,
            message: error.message || "Failed to create note",
        });
    }
};

export const getNotesController = async (req,res) =>{
    try {
        const data = await getAllNote()
        return res.status(200).json({
            data,
            message:"data fetched successfully"
        })
    } catch (error) {
        return res.status(500).json({
            success: false,
            message: error.message || "Failed to get notes",
        });
    }
}


export const getSingleNoteController = async (req,res) =>{
    try {
        const data = await getSingleNote(req.params)
        return res.status(200).json({
            data,
            message:"note fetched successfully",
            success:true
        })
    } catch (error) {
         return res.status(500).json({
            success: false,
            message: error.message || "Failed to get note",
        });
    }
}

export const updateNotesController = async (req, res) => {
    try {
        const data = await updateNote({
            id: req.params.id,
            ...req.body
        });

        res.status(200).json({
            success: true,
            message: "Note updated successfully",
            data
        });
    } catch (error) {
        res.status(500).json({
            success: false,
            message: error.message || "Failed to update note"
        });
    }
};

export const deleteNoteController = async (req,res) =>{
    try {
        const data = await deleteNote(req.params);
        return res.status(200).json({
            data,
            message:"note deleted successfully"
        })
    } catch (error) {
         res.status(500).json({
            success: false,
            message: error.message || "Failed to delete note"
        });
    }
}