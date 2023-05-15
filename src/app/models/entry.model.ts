import { Door } from './door.model';
import { Guest } from './guest.model';

export class Entry {
  public id: string;
  public door: Door;
  public guest: Guest;
  public created: Date;

  constructor(id: string, door: Door, guest: Guest, created: Date) {
    this.id = id;
    this.door = door;
    this.guest = guest;
    this.created = created;
  }

  idGetter(): string {
    return this.id;
  }

  idSetter(id: string) {
    this.id = id;
  }

  doorGetter(): Door {
    return this.door;
  }

  doorSetter(door: Door) {
    this.door = door;
  }

  guestGetter(): Guest {
    return this.guest;
  }

  guestSetter(guest: Guest) {
    this.guest = guest;
  }

  createdGetter(): Date {
    return this.created;
  }

  createdSetter(created: Date) {
    this.created = created;
  }
}
