import { defineChain } from "thirdweb";

// Replace <chain_id> with the chain id of your chain
export const chain = defineChain({
    id: 11822,
    nativeCurrency: {
        name: "Artela",
        symbol: "ART",
        decimals: 18,
      },
    rpc: "https://betanet-rpc1.artela.network"
}   
);