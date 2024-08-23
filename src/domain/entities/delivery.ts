import { UniqueEntityID } from "../core/unique-entity-id";

export interface DeliveryProps {
  id?: UniqueEntityID;
  productId: UniqueEntityID;
  localizacao: string;
}

export class Delivery {
  private id: UniqueEntityID;
  private productId: UniqueEntityID;
  private localizacao: string;

  constructor({ id, localizacao, productId }: DeliveryProps) {
    this.id = id ?? new UniqueEntityID();
    this.localizacao = localizacao;
    this.productId = productId;
  }
}
