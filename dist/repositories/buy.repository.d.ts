import { DefaultCrudRepository } from '@loopback/repository';
import { Buy, BuyRelations } from '../models';
import { DbDataSource } from '../datasources';
export declare class BuyRepository extends DefaultCrudRepository<Buy, BuyRelations> {
    constructor(dataSource: DbDataSource);
}
