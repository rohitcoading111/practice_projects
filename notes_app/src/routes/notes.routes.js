import {createNotesController,getNotesController,getSingleNoteController,deleteNoteController,updateNotesController} from "../controller/notes.controller.js"
import {notes} from "../validators/notes.validator.js"
import express from "express"


const router = express.Router();

router.post("/createNote",notes,createNotesController);
router.get("/getAllNotes",getNotesController);
router.get("/getSingleNote",getSingleNoteController);
router.post("/updateNote",updateNotesController);
router.post("/delete",deleteNoteController);


export default router;