import { UniqueEntityID } from "../core/unique-entity-id";

export interface StockMovementProps {
  id: UniqueEntityID;
  productId: UniqueEntityID;
  type: string;
  quantity: number;
  createdAt: Date;
}

export class StockMovement {
  private id: UniqueEntityID;
  private productId: UniqueEntityID;
  private type: string;
  private quantity: number;
  private createdAt: Date;

  constructor({
    id,
    productId,
    type,
    quantity,
    createdAt,
  }: StockMovementProps) {
    this.id = id ?? new UniqueEntityID();
    this.productId = productId;
    this.createdAt = createdAt ?? new Date();
    this.type = type;
    this.quantity = quantity;
  }
}
