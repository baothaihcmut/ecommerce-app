import { UUID } from 'crypto';
import { ShopOwner } from './../entities/shopowner.entity';

export default interface IShopOwnerRepository {
    createShopOwner(shopOwner:  Omit<ShopOwner, 'id' | 'user'>): Promise<ShopOwner>;  // Create a new shop owner
    deleteShopOwner(id: string): Promise<void>;  // Delete a shop owner by ID
    updateShopOwner(id: string, shopOwner: Partial< Omit<ShopOwner, 'id' | 'user'>>): Promise<ShopOwner>;  // Update shop owner's data
    findAllShopOwners(offset: number, limit: number): Promise<ShopOwner[]>;  // Find multiple shop owners with pagination
    findShopOwnerByUserId(userId: string): Promise<ShopOwner | null>;  // Find a shop owner by their user ID
}
