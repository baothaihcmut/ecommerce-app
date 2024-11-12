import CreateUserCommand, {
  CreateCustomerDetail,
  CreateShipperDetail,
  CreateShopOwnerDetail,
} from "./create-user.command";

export interface UpdateCustomerDetail extends Partial<CreateCustomerDetail> {}
export interface UpdateShipperDetail extends Partial<CreateShipperDetail> {}
export interface UpdateShopOwnerDetail extends Partial<CreateShopOwnerDetail> {}

export interface UpdateUserInfo
  extends Partial<
    Omit<
      CreateUserCommand,
      "password" | "currentRefreshToken" | "customer" | "shipper" | "shopOwne"
    >
  > {
  customer?: UpdateCustomerDetail;
  shipper?: UpdateShipperDetail;
  shopOwner?: UpdateShopOwnerDetail;
}

export default interface UpdateUserCommand {
  userId: string;
  updateInfo: UpdateUserInfo;
}
