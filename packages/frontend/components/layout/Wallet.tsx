import {
  Button,
  Flex,
  Image,
  Menu,
  MenuButton,
  MenuItem,
  MenuList,
  Spacer
} from '@chakra-ui/react'
import Balance from '../Balance'
import ConnectWallet from '../ConnectWallet'
import React, { useState } from 'react'
import { useEthers } from '@usedapp/core'
import blockies from 'blockies-ts'

function truncateHash(hash: string, length = 38): string {
  return hash.replace(hash.substring(6, length), '...')
}

// Extends `window` to add `ethereum`.
declare global {
  interface Window {
    ethereum: any
  }
}

const Wallet = (): JSX.Element => {
  const { account, deactivate } = useEthers()
  let blockieImg
  if (typeof window !== 'undefined') {
    blockieImg = blockies.create({ seed: account }).toDataURL()
  }

  return (
    <>
      {account ? (
        <Flex alignItems={'center'}>
          <Image ml="4" src={blockieImg} alt="blockie" />
          <Menu placement="bottom-end">
            <MenuButton as={Button} ml="4">
              {truncateHash(account)}
            </MenuButton>
            <MenuList>
              <MenuItem
                onClick={() => {
                  deactivate()
                }}
              >
                Disconnect
              </MenuItem>
            </MenuList>
          </Menu>
        </Flex>
      ) : (
        <ConnectWallet />
      )}
    </>
  )
}

export default Wallet
