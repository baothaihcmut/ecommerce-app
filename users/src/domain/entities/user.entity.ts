// src/domain/entities/User.ts
import { UUID } from "crypto";
import { Shipper } from "./shipper.entity";
import { Role } from "./role.enum";
import { Customer } from "./customer.entity";
import { ShopOwner } from "./shopowner.entity";
import { Gender } from "./gender.enum";
// Value object for User ID

type CreateUserArg = {
  id: string;
  firstName: string;
  lastName: string;
  email: string;
  phoneNumber: string;
  username: string;
  password: string;
  dateOfBirth: Date;
  gender: Gender;
  addressLine1: string;
  addressLine2?: string | undefined;
  city: string;
  nation: string;
  role: Role;
};

export class User {
  public readonly id: string;
  public firstName: string;
  public lastName: string;
  public email: string;
  public phoneNumber: string;
  public username: string;
  public password: string;
  public currentRefreshToken?: string;
  public dateOfBirth: Date;
  public gender: Gender;
  public addressLine1: string;
  public addressLine2?: string;
  public city: string;
  public nation: string;
  public role: Role;

  public customer?: Customer;
  public shipper?: Shipper;
  public shopOwner?: ShopOwner;

  constructor(args: CreateUserArg) {
    this.id = args.id;
    this.firstName = args.firstName;
    this.lastName = args.lastName;
    this.email = args.email;
    this.phoneNumber = args.phoneNumber;
    this.username = args.username;
    this.password = args.password;
    this.dateOfBirth = args.dateOfBirth;
    this.gender = args.gender;
    this.addressLine1 = args.addressLine1;
    this.addressLine2 = args.addressLine2;
    this.city = args.city;
    this.nation = args.nation;
    this.role = args.role;
    this.currentRefreshToken = "";
    // Add any validations or domain rules here
    this.validate();
  }

  private validate() {
    // Example domain validation
    if (!this.firstName || !this.lastName) {
      throw new Error("First and Last name are required.");
    }
    if (this.email.indexOf("@") === -1) {
      throw new Error("Invalid email format.");
    }
    // Other business rules or constraints can be added here
  }

  // Example method: Updating user profile
  updateProfile(firstName: string, lastName: string, email: string) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.email = email;

    this.validate(); // Re-validate after update
  }

  // Example method: Change password
  changePassword(newPassword: string) {
    this.password = newPassword;
  }

  // Example method: Assigning a new role
  changeRole(newRole: Role) {
    this.role = newRole;
  }

  setCustomerDetail(customer: Customer) {
    this.customer = customer;
  }
  setShipperDetail(shipper: Shipper) {
    this.shipper = shipper;
  }
  setShopOwnerDetail(shopOwner: ShopOwner) {
    this.shopOwner = shopOwner;
  }
}
