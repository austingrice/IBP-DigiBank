import { DigibankCommercialpaperApplication } from '../..';
import { Client } from '@loopback/testlab';
export declare function setupApplication(): Promise<AppWithClient>;
export interface AppWithClient {
    app: DigibankCommercialpaperApplication;
    client: Client;
}
