import { DynamoDBClient, PutItemCommand } from "@aws-sdk/client-dynamodb";
import Note from "../models/Note";
import fs from "fs";

const client = new DynamoDBClient({ region: "us-east-1" });
const db: Array<Note> = [];
class NoteRepository {
  public createNote(note: Note): Boolean {
    // var command = new PutItemCommand({
    //   TableName: "Notes",
    //   Item: {
    //     Name: note.name,
    //     Description: note.description,
    //     CreatedAt: note.dateCreated,
    //   },
    // });
    // await client.send(command);
    // return true;
    db.push(note);
    return true;
  }
  public getNote(name: string): Array<Note> | null {
    return db.filter((n) => n.name == name);
  }
  public getNotes(): Array<Note> | null {
    return db;
  }
  public getNoteById(id: number) {
    return db.filter((n) => n.id == id);
  }
}

export default new NoteRepository();
