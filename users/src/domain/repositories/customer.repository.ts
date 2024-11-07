import { UUID } from 'crypto';
import { Customer } from '../entities/customer.entity';
import { User } from '@prisma/client';

export default interface ICustomerRepository {
    createCustomer(customer:  Omit<Customer, 'id' | 'user'>): Promise<Customer>;  // Create a new customer
    deleteCustomer(id: string): Promise<void>;  // Delete customer by id
    updateCustomer(id: string, customer: Partial<Omit<Customer, 'id' | 'user'>>): Promise<Customer>;  // Update customer data
    findAllCustomers(offset: number, limit: number): Promise<Customer[]>;  // Find multiple customers with pagination
    findCustomerByUserId(userId: string): Promise<Customer | null>;  // Find a customer by user ID (relation to User)
}
