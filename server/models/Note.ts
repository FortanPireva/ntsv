import BaseEntity from "./BaseEntity";
class Note extends BaseEntity {
  public description: string;
  public name: string;
  public dateCreated: Date;
  constructor(
    id: number,
    name: string,
    description: string,
    dateCreated: Date
  ) {
    super(id);
    this.description = description;
    this.name = name;
    this.dateCreated = dateCreated;
  }
  toString() {
    return `${this.name} created on ${this.dateCreated.toLocaleTimeString()}`;
  }
}

export default Note;
