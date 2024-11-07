import { UUID } from 'crypto';
import { Shipper } from './../entities/shipper.entity';

export default interface IShipperRepository {
    createShipper(shipper: Omit<Shipper, 'id' | 'user'>): Promise<Shipper>;  // Create a new shipper
    deleteShipper(id: string): Promise<void>;  // Delete a shipper by ID
    updateShipper(id: string, shipper: Partial<Omit<Shipper, 'id' | 'user'>>): Promise<Shipper>;  // Update shipper's data
    findAllShippers(offset: number, limit: number): Promise<Shipper[]>;  // Find multiple shippers with pagination
    findShipperByUserId(userId: string): Promise<Shipper | null>;  // Find a shipper by their user ID
}
