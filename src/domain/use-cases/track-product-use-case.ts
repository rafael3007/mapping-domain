import { UniqueEntityID } from "../../core/unique-entity-id";

interface TrackProductuseCaseRequest {
    productId: UniqueEntityID
}

export class TrackProductuseCase {
    execute({productId}: TrackProductuseCaseRequest) {

    }
}