import { Request, Response } from "express";
import Note from "../models/Note";
import noteRepository from "../repository/NoteRepository";
class NoteController {
  constructor() {}

  public getNote(req: Request, res: Response) {
    const id = parseInt(req.params.id);
    console.log(id);
    var note = noteRepository.getNoteById(id);

    return res.status(200).send(note);
    // return res
    //   .status(200)
    //   .send(JSON.stringify(new Note("First note", "demo", new Date())));
  }
  public getNotes(req: Request, res: Response) {
    var notes = noteRepository.getNotes();
  }
  public createNote(req: Request, res: Response) {
    var noteToBeCreated = req.body as Note;
    noteToBeCreated.dateCreated = new Date();
    var success = noteRepository.createNote(noteToBeCreated);
    return res.status(201).send(noteToBeCreated);
  }
}

export default new NoteController();
