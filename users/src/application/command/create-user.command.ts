import { Customer } from "@app/domain/entities/customer.entity";
import { Gender } from "@app/domain/entities/gender.enum";
import { Role } from "@app/domain/entities/role.enum";
import { Shipper } from "@app/domain/entities/shipper.entity";
import { ShopOwner } from "@app/domain/entities/shopowner.entity";
import { User } from "@app/domain/entities/user.entity";

interface CustomerDetail {}
interface ShipperDetail {
  shipmentInventoryId: string;
}
interface ShopOwnerDetail {}

export default class CreateUserCommand {
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
  public detail: CustomerDetail | ShipperDetail | ShopOwnerDetail;
  constructor(
    id: string,
    firstName: string,
    lastName: string,
    email: string,
    phoneNumber: string,
    username: string,
    password: string,
    dateOfBirth: Date,
    gender: Gender,
    addressLine1: string,
    addressLine2: string,
    city: string,
    nation: string,
    role: Role,
    detail: CustomerDetail | ShipperDetail | ShopOwnerDetail
  ) {
    this.id = id;
    this.firstName = firstName;
    this.lastName = lastName;
    this.email = email;
    this.phoneNumber = phoneNumber;
    this.username = username;
    this.password = password;
    this.dateOfBirth = dateOfBirth;
    this.gender = gender;
    this.addressLine1 = addressLine1;
    this.addressLine2 = addressLine2;
    this.city = city;
    this.nation = nation;
    this.role = role;
    this.detail = detail;
    // Add any validations or domain rules here
  }
  toEntity(): User {
    const user = new User(this);
    if (user.role === Role.Customer) {
      user.customer = this.detail as Customer;
      return user;
    }
    if (user.role === Role.Shipper) {
      user.shipper = this.detail as Shipper;
      return user;
    }
    if (user.role === Role.ShopOwner) {
      user.shopOwner = this.detail as ShopOwner;
      return user;
    }
    return user;
  }
}
