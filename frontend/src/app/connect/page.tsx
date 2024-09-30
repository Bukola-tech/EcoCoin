"use client"
import React, {useState, useEffect} from 'react'
import Image from "next/image";
import { useRouter } from "next/navigation";
import {ethers} from 'ethers';

import '@rainbow-me/rainbowkit/styles.css';

import { ConnectButton } from '@rainbow-me/rainbowkit';
import { useReadContract, useBalance, useAccount, useWriteContract, useWaitForTransactionReceipt } from 'wagmi'

import { ECOCOIN_CONTRACT_ADDRESS} from '@/config/EcoCoin';
import {ECO_CONTRACT_ABI, ECO_CONTRACT_ADDRESS} from '@/config/EcoContract'
import {ECOCOIN_NFT_CONTRACT_ADDRESS, ECOCOIN_NFT_CONTRACT_ABI} from '@/config/EcoCoinNFT'


export default function Connect() {
  useEffect(() => {
    refetch()
  }, [])
  const [tokenId, setTokenId] = useState<string>("");


const { address } = useAccount()
const { data: hash, writeContractAsync, isPending } = useWriteContract()

   const { data, refetch, isLoading } = useBalance({
    address: address as `0x${string}`,
    token: ECOCOIN_CONTRACT_ADDRESS as `0x${string}`,
    
  })

  


const handleContribution = async  (tokenIdx: number) => {
  try {
    const tx = await writeContractAsync({
      address: ECO_CONTRACT_ADDRESS as `0x${string}`,
    abi: ECO_CONTRACT_ABI,
    functionName: 'claimRewards',
    args: [BigInt(tokenIdx)],
  })

  console.log("hash", tx)
  } catch (error) {
    console.log("error", error)
    alert(error.message)
  }

};

const handleMint = async () => {
  try {
    const tx = await writeContractAsync({
      address: ECOCOIN_NFT_CONTRACT_ADDRESS as `0x${string}`,
    abi: ECOCOIN_NFT_CONTRACT_ABI,
    functionName: 'mintNFT',
    args: [address],
  })
  console.log("hash", tx)
  } catch (error) {
    console.log("error", error)
    
  }
}

  return (
    <div className="flex flex-col items-center justify-center min-h-screen p-8 bg-gray-100">
      
      <main className="flex flex-col items-center gap-8 bg-white p-10 rounded-lg shadow-md">
        <Image
          src="/images/ecoCoinLogo.jpeg" 
          alt="ecoCoin Logo"
          width={180}
          height={38}
          priority
        />
        <div className="flex flex-col items-center gap-4">
         
            <div className="text-center">
            {address && (
              <>
                <p className="text-lg font-semibold">Connected Account:</p>
                <p className="text-sm text-gray-600">{address}</p>
                <p className="mt-2 text-lg font-semibold">Token Balance:</p>
                <p className="text-sm text-gray-600">
                  {isLoading ? 'Loading...' : data?.value ? parseFloat(ethers.formatEther(data.value)).toFixed(4) : '0'} {data?.symbol || 'Tokens'}
                </p>
              </>
            )}
              
            </div>

            <input type="text" placeholder="Enter token ID"  value={tokenId} onChange={(e) => {setTokenId(e.target.value)}} className='border border-gray-300 rounded-md p-2'/>

          <button
            className={`px-6 py-3 bg-green-500 text-white rounded-full hover:bg-green-600 transition 
              // !currentAccount ? "opacity-50 cursor-not-allowed" : ""
            `}
            onClick={() => {
              handleContribution(Number(tokenId)); setTokenId('')
                

              }}
            // disabled={!currentAccount}
          >
            {isPending ? 'Contributing...' : 'I Have Contributed'}
          </button>
          <button onClick={handleMint} className='px-6 py-3 bg-green-500 text-white rounded-full hover:bg-green-600 transition outline-none '>Mint</button>

  <div className='mt-10'>
          <ConnectButton />
  </div>

          
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