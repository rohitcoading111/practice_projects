import { createNote } from "../services/notes.service.js";

export const createNotes = async (req, res) => {
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