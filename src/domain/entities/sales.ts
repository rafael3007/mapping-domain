import { Entity } from "../../core/entities/entity";
import { UniqueEntityID } from "../../core/unique-entity-id";

export interface SalesProps {
  productId: UniqueEntityID;
  quantity: number;
}

export class Sales extends Entity<SalesProps> {
  constructor(props: SalesProps, id?: UniqueEntityID) {
    super(props, id);
  }
}
