import Asset from '../artifacts/contracts/marketplace/Asset.sol/Asset.json'
import { Button } from '@chakra-ui/react'
import { useEthers } from '@usedapp/core'
import Web3 from 'web3'
import { getMyBalance, getMyPositions } from '../lib/contracts/spacepool/bank'

function SpaceRoot() {
  const { library } = useEthers()
  const web3 = new Web3('http://localhost:8545')
  getMyPositions(library).then((res)=>console.log(res))
  const AssetContract = new web3.eth.Contract(
    Asset.abi,
    process.env.NEXT_PUBLIC_ASSET_ADDRESS
  )
  const createRoot = () => getMyBalance(library).then((res) => {
    res.error ?
      alert("Please connect your wallet") :
      AssetContract.methods
        .createRoot(true, true, 0)
        .send({from: res.myAddress})
        .then((res) => console.log(res))
    
  })
    

  return (
    <>
      <Button onClick={createRoot}>Create NFT</Button>
    </>
  )
}

export default SpaceRoot
