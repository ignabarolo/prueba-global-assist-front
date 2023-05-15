export class Guest {
  public id: string;
  public firstname: string;
  public lastname: string;

  constructor(id: string, firstname: string, lastname: string) {
    this.id = id;
    this.firstname = firstname;
    this.lastname = lastname;
  }

  get idGetter(): string {
    return this.id;
  }

  set idSetter(id: string) {
    this.id = id;
  }

  get firstnameGetter(): string {
    return this.firstname;
  }

  completeNameGetter(): string {
    return this.firstname + this.lastname;
  }

  set firstnameSetter(firstname: string) {
    this.firstname = firstname;
  }

  get lastnameGetter(): string {
    return this.lastname;
  }

  set lastnameSetter(lastname: string) {
    this.lastname = lastname;
  }
}
