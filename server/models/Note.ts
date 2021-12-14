class Note {
    private description:string;
    private name:string;
    private dateCreated:Date;
    constructor(name:string,description:string,dateCreated:Date){
        this.description = description;
        this.name = name;
        this.dateCreated = dateCreated;
    }
    toString() {
        return `${this.name} created on ${this.dateCreated.toLocaleTimeString()}`
    }
}

export default Note;