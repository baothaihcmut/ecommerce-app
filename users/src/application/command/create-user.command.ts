import { Customer } from "@app/domain/entities/customer.entity";
import { Gender } from "@app/domain/entities/gender.enum";
import { Role } from "@app/domain/entities/role.enum";
import { Shipper } from "@app/domain/entities/shipper.entity";
import { ShopOwner } from "@app/domain/entities/shopowner.entity";
import { User } from "@app/domain/entities/user.entity";

export interface CreateCustomerDetail {}
export interface CreateShipperDetail {
  shipmentInventoryId: string;
}
export interface CreateShopOwnerDetail {}

export default interface CreateUserCommand {
  firstName: string;
  lastName: string;
  email: string;
  phoneNumber: string;
  username: string;
  password: string;
  currentRefreshToken?: string;
  dateOfBirth?: Date;
  gender: Gender;
  addressLine1: string;
  addressLine2?: string;
  city: string;
  nation: string;
  role: Role;
  customer?: CreateCustomerDetail;
  shipper?: CreateShipperDetail;
  shopOwner?: CreateShopOwnerDetail;
}
