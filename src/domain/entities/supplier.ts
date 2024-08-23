import { UniqueEntityID } from "../core/unique-entity-id";

export interface SupplierProps {
  id?: UniqueEntityID;
  name: string;
  contact: string;
  address: string;
  email: string;
}

export class Supplier {
  private id: UniqueEntityID;
  private name: string;
  private contact?: string;
  private address?: string;
  private email: string;

  constructor({ id, name, contact, address, email }: SupplierProps) {
    this.id = id ?? new UniqueEntityID();
    this.name = name;
    this.contact = contact ?? "";
    this.address = address ?? "";
    this.email = email;
  }
}
