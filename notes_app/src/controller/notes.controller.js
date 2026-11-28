import { createNote,getAllNote } from "../services/notes.service.js";

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