import { Button, Heading } from '@chakra-ui/react'
import { useEthers } from '@usedapp/core'
import {
  getMyBalance,
  getMyPositions
} from '../../lib/contracts/spacepool/bank'

function SpacePoolBank() {
  const { library } = useEthers()
  const balance = () => getMyBalance(library).then((res) => console.log(res))
  return (
    <>
      <Button onClick={balance}>Click</Button>
      <Heading></Heading>
      <Heading> BANK </Heading>
      <Heading> BANK </Heading>
      <Heading> BANK </Heading>
      <Heading> BANK </Heading>
      <Heading> BANK </Heading>
      <Heading> BANK </Heading>
      <Heading> BANK </Heading>
      <Heading> BANK </Heading>
      <Heading> BANK </Heading>
      <Heading> BANK </Heading>
    </>
  )
}

export default SpacePoolBank
