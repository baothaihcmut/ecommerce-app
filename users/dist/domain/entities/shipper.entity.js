"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Shipper = void 0;
class Shipper {
    constructor(userId, user, shipmentInventoryId) {
        this.userId = userId;
        this.user = user;
        this.shipmentInventoryId = shipmentInventoryId;
        // Any domain-specific validations can go here
        this.validate();
    }
    validate() {
        // Example domain validation
        if (!this.userId) {
            throw new Error("Shipper must have a valid userId.");
        }
    }
    // Example method: Update the shipment inventory
    updateShipmentInventory(shipmentInventoryId) {
        this.shipmentInventoryId = shipmentInventoryId;
    }
}
exports.Shipper = Shipper;
