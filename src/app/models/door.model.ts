export class Door {
  public id: string;
  public description: string;

  constructor(id: string, description: string) {
    this.id = id;
    this.description = description;
  }

  get getId(): string {
    return this.id;
  }

  set setId(value: string) {
    this.id = value;
  }

  get getDescription(): string {
    return this.description;
  }

  set setDescription(value: string) {
    this.description = value;
  }
}
