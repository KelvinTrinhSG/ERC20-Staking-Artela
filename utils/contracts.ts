import { chain } from "@/app/chain";
import { client } from "@/app/client";
import { getContract } from "thirdweb";
import { STAKING_CONTRACT_ABI } from "./stakingContractABI";

// Replace <contract_address> with the contract address of your contract
const stakeTokenContractAddress = "0x9Bd924d14e7e553Bc5ACd5bbcFDdc80E1060f07b";
const rewardTokenContractAddress = "0x54e975CE9713Fac10D2155ca1E4780E46ecd22dc";
const stakingContractAddress = "0xF2Aa0e85EC37654e9aEA4C49Ad846F8794A4E7eF";

export const STAKE_TOKEN_CONTRACT = getContract({
    client: client,
    chain: chain,
    address: stakeTokenContractAddress,
});

export const REWARD_TOKEN_CONTRACT = getContract({
    client: client,
    chain: chain,
    address: rewardTokenContractAddress,
});


export const STAKING_CONTRACT = getContract({
    client: client,
    chain: chain,
    address: stakingContractAddress,
    abi: STAKING_CONTRACT_ABI
});