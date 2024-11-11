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
  public firstName: string;
  public lastName: string;
  public email: string;
  public phoneNumber: string;
  public username: string;
  public password: string;
  public currentRefreshToken?: string;
  public dateOfBirth?: Date;
  public gender: Gender;
  public addressLine1: string;
  public addressLine2?: string;
  public city: string;
  public nation: string;
  public role: Role;
  public customer?: CustomerDetail;
  public shipper?: ShipperDetail;
  public shopOwner?: ShopOwnerDetail;
  constructor(
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
    customer?: CustomerDetail,
    shipper?: ShipperDetail,
    showOwner?: ShopOwnerDetail
  ) {
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
    this.customer = customer;
    this.shipper = shipper;
    this.shopOwner = showOwner;

    // Add any validations or domain rules here
  }
}
