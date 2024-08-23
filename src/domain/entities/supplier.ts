import { Entity } from "../../core/entities/entity";
import { UniqueEntityID } from "../../core/unique-entity-id";

export interface SupplierProps {
  name: string;
  contact: string;
  address: string;
  email: string;
}

export class Supplier extends Entity<SupplierProps> {
  constructor(props: SupplierProps, id?: UniqueEntityID) {
    super(props, id);
  }
}
