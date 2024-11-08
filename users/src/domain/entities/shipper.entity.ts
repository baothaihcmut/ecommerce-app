import { UUID } from "crypto";
import { User } from "./user.entity";

export class Shipper {
  public readonly userId: string;
  public user: User;
  public shipmentInventoryId?: string;

  constructor(userId: string, user: User, shipmentInventoryId?: string) {
    this.userId = userId;
    this.user = user;
    this.shipmentInventoryId = shipmentInventoryId;

    // Any domain-specific validations can go here
    this.validate();
  }

  private validate() {
    // Example domain validation
    if (!this.userId) {
      throw new Error("Shipper must have a valid userId.");
    }
  }

  // Example method: Update the shipment inventory
  updateShipmentInventory(shipmentInventoryId: UUID) {
    this.shipmentInventoryId = shipmentInventoryId;
  }
}
