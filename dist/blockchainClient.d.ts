export declare module BlockChainModule {
    class BlockchainClient {
        connectToNetwork(): Promise<{
            contract: any;
            network: any;
        } | undefined>;
        redeem(args: any): Promise<any>;
        buy(args: any): Promise<any>;
    }
}
