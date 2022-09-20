import { formatUnits, parseUnits } from '@ethersproject/units'
import { Web3Provider } from '@ethersproject/providers'
import { Contract } from '@ethersproject/contracts'
import { addresses } from '@dapp/frontend/artifacts/contracts/addresses'
import SpacePoolJSON from '@dapp/frontend/artifacts/contracts/spacepool/SpacePool.sol/SpacePool.json'
import ERC20Mock from '@dapp/frontend/artifacts/contracts/ERC20Mock.sol/ERC20Mock.json'
import { SpacePool } from '../../../types/typechain'

export const addLiquidity = async (provider: Web3Provider, amount: number) => {
  try {
    const ERC20MockContract = new Contract(
      addresses.ERC20Mock,
      ERC20Mock.abi,
      provider.getSigner()
    )
    const tokenValue = parseUnits(amount.toString(), 18)
    const tokenApproval = await ERC20MockContract.approve(
      addresses.SpacePool,
      tokenValue
    )
    const approvalReceipt = await tokenApproval.wait()
    const SpacePoolContract = new Contract(
      addresses.SpacePool,
      SpacePoolJSON.abi,
      provider.getSigner()
    )
    const contractResult = await SpacePoolContract.addLiquidity(tokenValue)
    const contractReceipt = await contractResult.wait()

    return { tokenApproval, approvalReceipt, contractResult, contractReceipt }
  } catch (error) {
    return { error }
  }
}

export const getMyBalance = async (provider: Web3Provider) => {
  try {
    const myAddress = await provider.getSigner().getAddress()
    const balance = await provider.getBalance(myAddress)
    const convertBalance = formatUnits(balance, 'ether')
    const txCount = await provider.getTransactionCount(myAddress)

    return { convertBalance, myAddress, txCount }
  } catch (error) {
    return { error }
  }
}

export const getMyLiquidity = async (provider: Web3Provider) => {
  try {
    const signer = provider.getSigner()
    const SpacePoolContract = new Contract(
      addresses.SpacePool,
      SpacePoolJSON.abi,
      signer
    )

    return await SpacePoolContract.getMyLiquidity().toString()
  } catch (error) {
    return { error }
  }
}

export const getCurrentEpoch = async (provider: Web3Provider) => {
  try {
    const SpacePoolContract = new Contract(
      addresses.SpacePool,
      SpacePoolJSON.abi,
      provider.getSigner()
    ) as SpacePool

    return SpacePoolContract.getCurrentEpoch().toString()
  } catch (error) {
    return { error }
  }
}

export const getMyPositions = async (provider: Web3Provider) => {
  try {
    const SpacePoolContract = new Contract(
      addresses.SpacePool,
      SpacePoolJSON.abi,
      provider.getSigner()
    ) as SpacePool

    return await SpacePoolContract.getMyPositions().toString()
  } catch (error) {
    return { error }
  }
}
