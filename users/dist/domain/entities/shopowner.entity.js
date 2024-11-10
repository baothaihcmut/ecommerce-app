"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ShopOwner = void 0;
class ShopOwner {
    constructor(userId, user, numOfShop = 0 // Default value for numOfShop is 0
    ) {
        this.userId = userId;
        this.user = user;
        this.numOfShop = numOfShop;
        // Any domain-specific validations can go here
        this.validate();
    }
    validate() {
        // Example domain validation
        if (!this.userId) {
            throw new Error("ShopOwner must have a valid userId.");
        }
        if (this.numOfShop < 0) {
            throw new Error("Number of shops cannot be negative.");
        }
    }
    // Example method: Add a shop to the owner's count
    addShop() {
        this.numOfShop += 1;
    }
    // Example method: Remove a shop from the owner's count
    removeShop() {
        if (this.numOfShop > 0) {
            this.numOfShop -= 1;
        }
        else {
            throw new Error("Cannot remove shop, no shops to remove.");
        }
    }
}
exports.ShopOwner = ShopOwner;
