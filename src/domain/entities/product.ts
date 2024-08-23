import { Entity } from "../../core/entities/entity";
import { UniqueEntityID } from "../../core/unique-entity-id";

export interface ProductProps {
  name: string;
  description: string;
  category: string;
  price: number;
  quantityInStore: number;
  quantityInStoreMax?: number;
  quantityInStoreMin?: number;
  size: string;
  supplierId?: UniqueEntityID | null;
  maintenanceHistoryId?: UniqueEntityID | null;
  trackingCode?: UniqueEntityID | null;
}

export class Product extends Entity<ProductProps> {
  constructor(props: ProductProps, id?: UniqueEntityID) {
    super(props, id);
  }
}
