import { User } from "./user.entity";

export class Customer {
  public readonly userId: string; // Customer's userId (identity)
  public user: User; // Related User entity
  public point: number; // Customer's points

  constructor(
    userId: string,
    user: User,
    point: number = 0 // Default value for points is 0
  ) {
    this.userId = userId;
    this.user = user;
    this.point = point;

    // Any domain-specific validations can go here
    this.validate();
  }

  private validate() {
    // Example domain validation
    if (!this.userId) {
      throw new Error("Customer must have a valid userId.");
    }

    if (this.point < 0) {
      throw new Error("Points cannot be negative.");
    }
  }

  // Example method: Add points to the customer
  addPoints(amount: number) {
    if (amount < 0) {
      throw new Error("Cannot add negative points.");
    }
    this.point += amount;
  }

  // Example method: Deduct points from the customer
  deductPoints(amount: number) {
    if (amount < 0) {
      throw new Error("Cannot deduct negative points.");
    }
    if (this.point - amount < 0) {
      throw new Error("Not enough points to deduct.");
    }
    this.point -= amount;
  }
}
