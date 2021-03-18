/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import {
  ethers,
  EventFilter,
  Signer,
  BigNumber,
  BigNumberish,
  PopulatedTransaction,
} from 'ethers'
import {
  Contract,
  ContractTransaction,
  Overrides,
  PayableOverrides,
  CallOverrides,
} from '@ethersproject/contracts'
import { BytesLike } from '@ethersproject/bytes'
import { Listener, Provider } from '@ethersproject/providers'
import { FunctionFragment, EventFragment, Result } from '@ethersproject/abi'

interface TestConstructorBuddyInterface extends ethers.utils.Interface {
  functions: {
    'codeHash()': FunctionFragment
    'finalizeBuddyDeploy(bool)': FunctionFragment
    'inbox()': FunctionFragment
    'initiateBuddyDeploy(uint256,uint256,bytes)': FunctionFragment
    'l2Buddy()': FunctionFragment
    'l2Connection()': FunctionFragment
    'l2Deployer()': FunctionFragment
  }

  encodeFunctionData(functionFragment: 'codeHash', values?: undefined): string
  encodeFunctionData(
    functionFragment: 'finalizeBuddyDeploy',
    values: [boolean]
  ): string
  encodeFunctionData(functionFragment: 'inbox', values?: undefined): string
  encodeFunctionData(
    functionFragment: 'initiateBuddyDeploy',
    values: [BigNumberish, BigNumberish, BytesLike]
  ): string
  encodeFunctionData(functionFragment: 'l2Buddy', values?: undefined): string
  encodeFunctionData(
    functionFragment: 'l2Connection',
    values?: undefined
  ): string
  encodeFunctionData(functionFragment: 'l2Deployer', values?: undefined): string

  decodeFunctionResult(functionFragment: 'codeHash', data: BytesLike): Result
  decodeFunctionResult(
    functionFragment: 'finalizeBuddyDeploy',
    data: BytesLike
  ): Result
  decodeFunctionResult(functionFragment: 'inbox', data: BytesLike): Result
  decodeFunctionResult(
    functionFragment: 'initiateBuddyDeploy',
    data: BytesLike
  ): Result
  decodeFunctionResult(functionFragment: 'l2Buddy', data: BytesLike): Result
  decodeFunctionResult(
    functionFragment: 'l2Connection',
    data: BytesLike
  ): Result
  decodeFunctionResult(functionFragment: 'l2Deployer', data: BytesLike): Result

  events: {}
}

export class TestConstructorBuddy extends Contract {
  connect(signerOrProvider: Signer | Provider | string): this
  attach(addressOrName: string): this
  deployed(): Promise<this>

  on(event: EventFilter | string, listener: Listener): this
  once(event: EventFilter | string, listener: Listener): this
  addListener(eventName: EventFilter | string, listener: Listener): this
  removeAllListeners(eventName: EventFilter | string): this
  removeListener(eventName: any, listener: Listener): this

  interface: TestConstructorBuddyInterface

  functions: {
    codeHash(overrides?: CallOverrides): Promise<[string]>

    'codeHash()'(overrides?: CallOverrides): Promise<[string]>

    finalizeBuddyDeploy(
      success: boolean,
      overrides?: Overrides
    ): Promise<ContractTransaction>

    'finalizeBuddyDeploy(bool)'(
      success: boolean,
      overrides?: Overrides
    ): Promise<ContractTransaction>

    inbox(overrides?: CallOverrides): Promise<[string]>

    'inbox()'(overrides?: CallOverrides): Promise<[string]>

    initiateBuddyDeploy(
      maxGas: BigNumberish,
      gasPriceBid: BigNumberish,
      contractInitCode: BytesLike,
      overrides?: PayableOverrides
    ): Promise<ContractTransaction>

    'initiateBuddyDeploy(uint256,uint256,bytes)'(
      maxGas: BigNumberish,
      gasPriceBid: BigNumberish,
      contractInitCode: BytesLike,
      overrides?: PayableOverrides
    ): Promise<ContractTransaction>

    l2Buddy(overrides?: CallOverrides): Promise<[string]>

    'l2Buddy()'(overrides?: CallOverrides): Promise<[string]>

    l2Connection(overrides?: CallOverrides): Promise<[number]>

    'l2Connection()'(overrides?: CallOverrides): Promise<[number]>

    l2Deployer(overrides?: CallOverrides): Promise<[string]>

    'l2Deployer()'(overrides?: CallOverrides): Promise<[string]>
  }

  codeHash(overrides?: CallOverrides): Promise<string>

  'codeHash()'(overrides?: CallOverrides): Promise<string>

  finalizeBuddyDeploy(
    success: boolean,
    overrides?: Overrides
  ): Promise<ContractTransaction>

  'finalizeBuddyDeploy(bool)'(
    success: boolean,
    overrides?: Overrides
  ): Promise<ContractTransaction>

  inbox(overrides?: CallOverrides): Promise<string>

  'inbox()'(overrides?: CallOverrides): Promise<string>

  initiateBuddyDeploy(
    maxGas: BigNumberish,
    gasPriceBid: BigNumberish,
    contractInitCode: BytesLike,
    overrides?: PayableOverrides
  ): Promise<ContractTransaction>

  'initiateBuddyDeploy(uint256,uint256,bytes)'(
    maxGas: BigNumberish,
    gasPriceBid: BigNumberish,
    contractInitCode: BytesLike,
    overrides?: PayableOverrides
  ): Promise<ContractTransaction>

  l2Buddy(overrides?: CallOverrides): Promise<string>

  'l2Buddy()'(overrides?: CallOverrides): Promise<string>

  l2Connection(overrides?: CallOverrides): Promise<number>

  'l2Connection()'(overrides?: CallOverrides): Promise<number>

  l2Deployer(overrides?: CallOverrides): Promise<string>

  'l2Deployer()'(overrides?: CallOverrides): Promise<string>

  callStatic: {
    codeHash(overrides?: CallOverrides): Promise<string>

    'codeHash()'(overrides?: CallOverrides): Promise<string>

    finalizeBuddyDeploy(
      success: boolean,
      overrides?: CallOverrides
    ): Promise<void>

    'finalizeBuddyDeploy(bool)'(
      success: boolean,
      overrides?: CallOverrides
    ): Promise<void>

    inbox(overrides?: CallOverrides): Promise<string>

    'inbox()'(overrides?: CallOverrides): Promise<string>

    initiateBuddyDeploy(
      maxGas: BigNumberish,
      gasPriceBid: BigNumberish,
      contractInitCode: BytesLike,
      overrides?: CallOverrides
    ): Promise<void>

    'initiateBuddyDeploy(uint256,uint256,bytes)'(
      maxGas: BigNumberish,
      gasPriceBid: BigNumberish,
      contractInitCode: BytesLike,
      overrides?: CallOverrides
    ): Promise<void>

    l2Buddy(overrides?: CallOverrides): Promise<string>

    'l2Buddy()'(overrides?: CallOverrides): Promise<string>

    l2Connection(overrides?: CallOverrides): Promise<number>

    'l2Connection()'(overrides?: CallOverrides): Promise<number>

    l2Deployer(overrides?: CallOverrides): Promise<string>

    'l2Deployer()'(overrides?: CallOverrides): Promise<string>
  }

  filters: {}

  estimateGas: {
    codeHash(overrides?: CallOverrides): Promise<BigNumber>

    'codeHash()'(overrides?: CallOverrides): Promise<BigNumber>

    finalizeBuddyDeploy(
      success: boolean,
      overrides?: Overrides
    ): Promise<BigNumber>

    'finalizeBuddyDeploy(bool)'(
      success: boolean,
      overrides?: Overrides
    ): Promise<BigNumber>

    inbox(overrides?: CallOverrides): Promise<BigNumber>

    'inbox()'(overrides?: CallOverrides): Promise<BigNumber>

    initiateBuddyDeploy(
      maxGas: BigNumberish,
      gasPriceBid: BigNumberish,
      contractInitCode: BytesLike,
      overrides?: PayableOverrides
    ): Promise<BigNumber>

    'initiateBuddyDeploy(uint256,uint256,bytes)'(
      maxGas: BigNumberish,
      gasPriceBid: BigNumberish,
      contractInitCode: BytesLike,
      overrides?: PayableOverrides
    ): Promise<BigNumber>

    l2Buddy(overrides?: CallOverrides): Promise<BigNumber>

    'l2Buddy()'(overrides?: CallOverrides): Promise<BigNumber>

    l2Connection(overrides?: CallOverrides): Promise<BigNumber>

    'l2Connection()'(overrides?: CallOverrides): Promise<BigNumber>

    l2Deployer(overrides?: CallOverrides): Promise<BigNumber>

    'l2Deployer()'(overrides?: CallOverrides): Promise<BigNumber>
  }

  populateTransaction: {
    codeHash(overrides?: CallOverrides): Promise<PopulatedTransaction>

    'codeHash()'(overrides?: CallOverrides): Promise<PopulatedTransaction>

    finalizeBuddyDeploy(
      success: boolean,
      overrides?: Overrides
    ): Promise<PopulatedTransaction>

    'finalizeBuddyDeploy(bool)'(
      success: boolean,
      overrides?: Overrides
    ): Promise<PopulatedTransaction>

    inbox(overrides?: CallOverrides): Promise<PopulatedTransaction>

    'inbox()'(overrides?: CallOverrides): Promise<PopulatedTransaction>

    initiateBuddyDeploy(
      maxGas: BigNumberish,
      gasPriceBid: BigNumberish,
      contractInitCode: BytesLike,
      overrides?: PayableOverrides
    ): Promise<PopulatedTransaction>

    'initiateBuddyDeploy(uint256,uint256,bytes)'(
      maxGas: BigNumberish,
      gasPriceBid: BigNumberish,
      contractInitCode: BytesLike,
      overrides?: PayableOverrides
    ): Promise<PopulatedTransaction>

    l2Buddy(overrides?: CallOverrides): Promise<PopulatedTransaction>

    'l2Buddy()'(overrides?: CallOverrides): Promise<PopulatedTransaction>

    l2Connection(overrides?: CallOverrides): Promise<PopulatedTransaction>

    'l2Connection()'(overrides?: CallOverrides): Promise<PopulatedTransaction>

    l2Deployer(overrides?: CallOverrides): Promise<PopulatedTransaction>

    'l2Deployer()'(overrides?: CallOverrides): Promise<PopulatedTransaction>
  }
}
