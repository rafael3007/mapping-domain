import { UniqueEntityID } from "../core/unique-entity-id";

export interface ProductProps {
  id?: UniqueEntityID;
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

export class Product {
  private id: UniqueEntityID;
  private name: string;
  private description: string;
  private category: string;
  private price: number;
  private quantityInStore: number;
  private quantityInStoreMax: number;
  private quantityInStoreMin: number;
  private size: string;
  private supplierId: UniqueEntityID | null;
  private maintenanceHistoryId: UniqueEntityID | null;
  private trackingCode: UniqueEntityID | null;

  constructor({
    id,
    name,
    description,
    category,
    price,
    quantityInStore,
    quantityInStoreMax,
    quantityInStoreMin,
    size,
    supplierId,
    maintenanceHistoryId,
    trackingCode,
  }: ProductProps) {
    this.id = id ?? new UniqueEntityID();
    this.name = name;
    this.description = description;
    this.category = category;
    this.price = price;
    this.quantityInStore = quantityInStore;
    this.quantityInStoreMax = quantityInStoreMax ?? 0;
    this.quantityInStoreMin = quantityInStoreMin ?? 0;
    this.size = size;
    this.supplierId = supplierId ?? null;
    this.maintenanceHistoryId = maintenanceHistoryId ?? null;
    this.trackingCode = trackingCode ?? null;
  }
}
