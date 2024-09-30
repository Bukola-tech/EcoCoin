import { useReadContract } from 'wagmi'; 

const useContractRead = (address: any, abi: any) => {
  const { data, isError, isLoading } = useReadContract({
    address,
    abi,
  });

  return { data, isError, isLoading };
};

export default useContractRead;
