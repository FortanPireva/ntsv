import { Request, Response } from "express";
import Note from "../models/Note";

class NoteController {
  constructor() {}

  public getNote(req: Request, res: Response) {
    return res
      .status(200)
      .send(JSON.stringify(new Note("First note", "demo", new Date())));
  }
  public getNotes(req: Request, res: Response) {
    return res
      .status(200)
      .send(new Note("First note1sdmfkls", "demo", new Date()));
  }
}

export default new NoteController();
