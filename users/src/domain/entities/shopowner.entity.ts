import { UUID } from "crypto";
import { User } from "./user.entity";

export class ShopOwner {
    public readonly userId: string;         // ShopOwner's userId (identity)
    public user: User;                            // Related User entity
    public numOfShop: number;                     // Number of shops owned
  
    constructor(
      userId: string,
      user: User,
      numOfShop: number = 0   // Default value for numOfShop is 0
    ) {
      this.userId = userId;
      this.user = user;
      this.numOfShop = numOfShop;
  
      // Any domain-specific validations can go here
      this.validate();
    }
  
    private validate() {
      // Example domain validation
      if (!this.userId) {
        throw new Error('ShopOwner must have a valid userId.');
      }
  
      if (this.numOfShop < 0) {
        throw new Error('Number of shops cannot be negative.');
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
      } else {
        throw new Error('Cannot remove shop, no shops to remove.');
      }
    }
  }