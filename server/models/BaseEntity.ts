import internal from "stream";

class BaseEntity {
  public id: number;
  constructor(id: number) {
    this.id = id;
  }
  //   public toJSON() {
  //     return Object.getOwnPropertyNames(this).map((property) => {
  //       return {
  //         property: this[property],
  //       };
  //     });
  //   }
}

export default BaseEntity;
