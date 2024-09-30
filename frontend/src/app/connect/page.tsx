"use client"
import React, {useState} from 'react'
import Image from "next/image";
import { useRouter } from "next/navigation";
import {ethers} from 'ethers';

import '@rainbow-me/rainbowkit/styles.css';

import { ConnectButton } from '@rainbow-me/rainbowkit';
import { useReadContract, useBalance, useAccount, useWriteContract } from 'wagmi'

import {TOKEN_CONTRACT_ABI, TOKEN_CONTRACT_ADDRESS} from '@/config/TokenContract';
import {CAUSEKOIN_CONTRACT_ABI, CAUSEKOIN_CONTRACT_ADDRESS} from '@/config/CauseKoin';


export default function Connect() {
  const [tokenBalance, setTokenBalance] = useState<number>(0);
  const [walletAddress, setWalletAddress] = useState<string>('');
  const router = useRouter();

const { address } = useAccount()
const { data: hash, writeContract, isPending } = useWriteContract()

   const { data, refetch, isLoading } = useBalance({
    address: address as `0x${string}`,
    token: TOKEN_CONTRACT_ADDRESS as `0x${string}`,
    
  })

  


const handleContribution = async () => {
  try {
    writeContract({
      address: CAUSEKOIN_CONTRACT_ADDRESS as `0x${string}`,
    abi: CAUSEKOIN_CONTRACT_ABI,
    functionName: 'claimTokens',
    args: [],
  })
  } catch (error) {
    console.error(error)
  }

  console.log(hash)

};

  return (
    <div className="flex flex-col items-center justify-center min-h-screen p-8 bg-gray-100">
      <ConnectButton />
      <main className="flex flex-col items-center gap-8 bg-white p-10 rounded-lg shadow-md">
        <Image
          src="/images/causekoin.png" 
          alt="Your Project Logo"
          width={180}
          height={38}
          priority
        />
        <div className="flex flex-col items-center gap-4">
         
            <div className="text-center">
              <p className="text-lg font-semibold">Connected Account:</p>
              <p className="text-sm text-gray-600">{address}</p>
              <p className="mt-2 text-lg font-semibold">Token Balance:</p>
              <p className="text-sm text-gray-600">
                {isLoading ? 'Loading...' : data?.value ? parseFloat(ethers.formatEther(data.value)).toFixed(4) : '0'} {data?.symbol || 'Tokens'}
              </p>
            </div>

          <button
            className={`px-6 py-3 bg-green-500 text-white rounded-full hover:bg-green-600 transition 
              // !currentAccount ? "opacity-50 cursor-not-allowed" : ""
            `}
            onClick={handleContribution}
            // disabled={!currentAccount}
          >
            {isPending ? 'Contributing...' : 'I Have Contributed'}
          </button>
           

          
        </div>

        <ol className="list-decimal list-inside text-left text-sm text-gray-700">
          <li>
            Connect your wallet using the Connect Wallet button.
          </li>
          <li>
            Indicate your contribution by clicking the I Have Contributed button.
          </li>
          <li>
            Receive 100 tokens for every 10 contributions.
          </li>
        </ol>
      </main>

      <footer className="mt-10 text-center text-gray-600">
        © {new Date().getFullYear()} Your Project Name. All rights reserved.
      </footer>
    </div>

  );
}