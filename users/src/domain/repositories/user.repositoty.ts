import { UUID } from 'crypto';
import { User } from './../entities/user.entity';
export default interface IUserRepository {
    createUser(user:Omit<User,'id'|'customer'|'shipper'|'shopOwner'>):Promise<User>
    deleteUser(id:string):Promise<void>
    updateUser(id:string,user: Partial< Omit<User,'id'|'customer'|'shipper'|'shopOwner'>>):Promise<User>
    findAllUser(offset:number, limit: number): Promise<User[]>
    findUserByID(id:string):Promise<User>
}