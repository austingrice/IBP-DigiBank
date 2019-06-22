"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const yaml = require('js-yaml');
const { FileSystemWallet, Gateway } = require('fabric-network');
const fs = require('fs');
// A wallet stores a collection of identities for use
const wallet = new FileSystemWallet('/home/tecadmin/.fabric-vscode/IBP');
var BlockChainModule;
(function (BlockChainModule) {
    class BlockchainClient {
        async connectToNetwork() {
            const gateway = new Gateway();
            try {
                console.log('connecting to Fabric network...');
                const identityLabel = 'Team00';
                let connectionProfile = JSON.parse(fs.readFileSync('/home/tecadmin/Desktop/IBP-DigiBankCommercialPaper/networkConnection.json', 'utf8'));
                let connectionOptions = {
                    identity: identityLabel,
                    wallet: wallet,
                    discovery: {
                        asLocalhost: false,
                        enabled: true
                    }
                };
                // Connect to gateway using network.yaml file and our certificates in _idwallet directory
                await gateway.connect(connectionProfile, connectionOptions);
                console.log('Connected to Fabric gateway.');
                // Connect to our local fabric
                const network = await gateway.getNetwork('mychannel');
                console.log('Connected to mychannel. ');
                // Get the contract we have installed on the peer
                const contract = await network.getContract('papernet-js');
                let networkObj = {
                    contract: contract,
                    network: network
                };
                return networkObj;
            }
            catch (error) {
                console.log(`Error processing transaction. ${error}`);
                console.log(error.stack);
            }
            finally {
                console.log('Done connecting to network.');
                // gateway.disconnect();
            }
        }
        async redeem(args) {
            console.log('args for redeem: ');
            console.log(args);
            let response = await args.contract.submitTransaction(args.function, args.issuer, args.paperNumber, args.redeemingOwner, args.redeemDateTime);
            return response;
        }
        async buy(args) {
            console.log('args for buy: ');
            console.log(args);
            let response = await args.contract.submitTransaction(args.function, args.issuer, args.paperNumber, args.currentOwner, args.newOwner, args.price, args.purchaseDateTime);
            return response;
        }
    }
    BlockChainModule.BlockchainClient = BlockchainClient;
})(BlockChainModule = exports.BlockChainModule || (exports.BlockChainModule = {}));
//# sourceMappingURL=blockchainClient.js.map