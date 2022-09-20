import { Text } from '@chakra-ui/react'
import { useState } from 'react'
import { useEtherBalance, useEthers } from '@usedapp/core'
import axios from 'axios'

function Transactions(): JSX.Element {
  const [data, setData] = useState([])
  const tx_url = `https://api.etherscan.io/api?module=account&action=txlist&address=${process.env.NEXT_PUBLIC_ASSET_ADDRESS}&startblock=0&endblock=99999999&sort=asc&apikey=${process.env.NEXT_PUBLIC_ETHERSCAN_KEY}`
  // const nft_url = `https://api.etherscan.io/api?module=account&action=tokennfttx&address=${process.env.NEXT_PUBLIC_ASSET_ADDRESS}&startblock=0&endblock=999999999&sort=asc&apikey=${process.env.NEXT_PUBLIC_ETHERSCAN_KEY}`

  axios
    .get(tx_url)
    .then((res) => {
      setData(res.data.result)
    })
    .catch((err) => console.log(err))
  return (
    <>
      {data.map((datum, index) => {
        ;<Text>Loading...</Text>
      })}
    </>
  )
}

export default Transactions
