import { DefaultCrudRepository } from '@loopback/repository';
import { Redeem, RedeemRelations } from '../models';
import { DbDataSource } from '../datasources';
export declare class RedeemRepository extends DefaultCrudRepository<Redeem, RedeemRelations> {
    constructor(dataSource: DbDataSource);
}
