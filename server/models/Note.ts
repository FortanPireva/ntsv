import BaseEntity from "./BaseEntity";
class Note extends BaseEntity {
  private description: string;
  private name: string;
  private dateCreated: Date;
  constructor(name: string, description: string, dateCreated: Date) {
    super();
    this.description = description;
    this.name = name;
    this.dateCreated = dateCreated;
  }
  toString() {
    return `${this.name} created on ${this.dateCreated.toLocaleTimeString()}`;
  }
}

export default Note;
