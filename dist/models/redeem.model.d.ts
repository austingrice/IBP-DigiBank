import { Entity } from '@loopback/repository';
export declare class Redeem extends Entity {
    issuer: string;
    paperNumber: string;
    redeemingOwner: string;
    redeemDateTime: string;
    constructor(data?: Partial<Redeem>);
}
export interface RedeemRelations {
}
export declare type RedeemWithRelations = Redeem & RedeemRelations;
