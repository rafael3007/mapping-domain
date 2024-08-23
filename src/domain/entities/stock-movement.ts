import { Entity } from "../../core/entities/entity";
import { UniqueEntityID } from "../../core/unique-entity-id";

export interface StockMovementProps {
  productId: UniqueEntityID;
  type: string;
  quantity: number;
  createdAt: Date;
}

export class StockMovement extends Entity<StockMovementProps> {
  constructor(props: StockMovementProps, id?: UniqueEntityID) {
    super(props, id);
  }
}
