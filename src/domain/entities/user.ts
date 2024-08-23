import { UniqueEntityID } from "../core/unique-entity-id";

export interface UserProps {
  id: UniqueEntityID;
  name: string;
}

export class User {
  private id: UniqueEntityID;
  private name: string;

  constructor({ id, name }: UserProps) {
    this.id = id ?? new UniqueEntityID();
    this.name = name;
  }
}
