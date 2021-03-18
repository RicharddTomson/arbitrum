/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import { Signer } from 'ethers'
import { Provider, TransactionRequest } from '@ethersproject/providers'
import { Contract, ContractFactory, Overrides } from '@ethersproject/contracts'

import type { NodeFactory } from '../NodeFactory'

export class NodeFactory__factory extends ContractFactory {
  constructor(signer?: Signer) {
    super(_abi, _bytecode, signer)
  }

  deploy(overrides?: Overrides): Promise<NodeFactory> {
    return super.deploy(overrides || {}) as Promise<NodeFactory>
  }
  getDeployTransaction(overrides?: Overrides): TransactionRequest {
    return super.getDeployTransaction(overrides || {})
  }
  attach(address: string): NodeFactory {
    return super.attach(address) as NodeFactory
  }
  connect(signer: Signer): NodeFactory__factory {
    return super.connect(signer) as NodeFactory__factory
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): NodeFactory {
    return new Contract(address, _abi, signerOrProvider) as NodeFactory
  }
}

const _abi = [
  {
    inputs: [],
    stateMutability: 'nonpayable',
    type: 'constructor',
  },
  {
    inputs: [
      {
        internalType: 'bytes32',
        name: '_stateHash',
        type: 'bytes32',
      },
      {
        internalType: 'bytes32',
        name: '_challengeHash',
        type: 'bytes32',
      },
      {
        internalType: 'bytes32',
        name: '_confirmData',
        type: 'bytes32',
      },
      {
        internalType: 'uint256',
        name: '_prev',
        type: 'uint256',
      },
      {
        internalType: 'uint256',
        name: '_deadlineBlock',
        type: 'uint256',
      },
    ],
    name: 'createNode',
    outputs: [
      {
        internalType: 'address',
        name: '',
        type: 'address',
      },
    ],
    stateMutability: 'nonpayable',
    type: 'function',
  },
  {
    inputs: [],
    name: 'templateContract',
    outputs: [
      {
        internalType: 'contract ICloneable',
        name: '',
        type: 'address',
      },
    ],
    stateMutability: 'view',
    type: 'function',
  },
]

const _bytecode =
  '0x608060405234801561001057600080fd5b5060405161001d9061005f565b604051809103906000f080158015610039573d6000803e3d6000fd5b50600080546001600160a01b0319166001600160a01b039290921691909117905561006c565b6107b8806103cb83390190565b6103508061007b6000396000f3fe608060405234801561001057600080fd5b50600436106100365760003560e01c806372be06d81461003b578063d45ab2b51461005f575b600080fd5b610043610094565b604080516001600160a01b039092168252519081900360200190f35b610043600480360360a081101561007557600080fd5b50803590602081013590604081013590606081013590608001356100a3565b6000546001600160a01b031681565b6000805481906100bb906001600160a01b031661014c565b60408051632901acdd60e21b8152336004820152602481018a905260448101899052606481018890526084810187905260a4810186905290519192506001600160a01b0383169163a406b3749160c48082019260009290919082900301818387803b15801561012957600080fd5b505af115801561013d573d6000803e3d6000fd5b50929998505050505050505050565b6000816001600160a01b0316636f791d296040518163ffffffff1660e01b815260040160206040518083038186803b15801561018757600080fd5b505afa15801561019b573d6000803e3d6000fd5b505050506040513d60208110156101b157600080fd5b505160408051808201909152600c81526b21a627a722afa6a0a9aa22a960a11b60208201529061025f5760405162461bcd60e51b81526004018080602001828103825283818151815260200191508051906020019080838360005b8381101561022457818101518382015260200161020c565b50505050905090810190601f1680156102515780820380516001836020036101000a031916815260200191505b509250505060405180910390fd5b50610272826001600160a01b0316610278565b92915050565b6000604051733d602d80600a3d3981f3363d3d373d3d3d363d7360601b81528260601b60148201526e5af43d82803e903d91602b57fd5bf360881b60288201526037816000f09150506001600160a01b038116610315576040805162461bcd60e51b8152602060048201526016602482015275115490cc4c4d8dce8818dc99585d194819985a5b195960521b604482015290519081900360640190fd5b91905056fea2646970667358221220f82062bf5d2d4fadf90439d3086818ec4085cfaf70f2a1642821d3e00bde479164736f6c634300060b0033608060405234801561001057600080fd5b506000805460ff1916600117905561078b8061002d6000396000f3fe608060405234801561001057600080fd5b506004361061012c5760003560e01c806388d221c6116100ad578063a406b37411610071578063a406b37414610255578063cb23bcb514610299578063d7ff5e35146102bd578063dff69787146102c5578063f0dd77ff146102cd5761012c565b806388d221c6146101f15780639168ae72146101f957806396a9fdc01461021f57806397bdc51014610245578063a0369c141461024d5761012c565b80635b8b2280116100f45780635b8b2280146101a05780636971dfe5146101a85780636f791d29146101c5578063701da98e146101e157806383197ef0146101e95761012c565b80631bc09d0a146101315780632466696e146101505780632edfb42a146101885780633aa1927414610190578063479c925414610198575b600080fd5b61014e6004803603602081101561014757600080fd5b50356102d5565b005b6101766004803603602081101561016657600080fd5b50356001600160a01b0316610333565b60408051918252519081900360200190f35b610176610416565b61014e61041c565b610176610468565b61017661046e565b61014e600480360360208110156101be57600080fd5b5035610474565b6101cd6104c6565b604080519115158252519081900360200190f35b6101766104cf565b61014e6104d5565b61014e610525565b6101cd6004803603602081101561020f57600080fd5b50356001600160a01b031661056e565b61014e6004803603602081101561023557600080fd5b50356001600160a01b0316610583565b610176610655565b61017661065b565b61014e600480360360c081101561026b57600080fd5b506001600160a01b038135169060208101359060408101359060608101359060808101359060a00135610661565b6102a1610734565b604080516001600160a01b039092168252519081900360200190f35b610176610743565b610176610749565b61017661074f565b6009546001600160a01b03163314610322576040805162461bcd60e51b815260206004820152600b60248201526a524f4c4c55505f4f4e4c5960a81b604482015290519081900360640190fd5b600a5461032e5743600a555b600b55565b6009546000906001600160a01b03163314610383576040805162461bcd60e51b815260206004820152600b60248201526a524f4c4c55505f4f4e4c5960a81b604482015290519081900360640190fd5b6001600160a01b03821660009081526008602052604090205460ff16156103e2576040805162461bcd60e51b815260206004820152600e60248201526d1053149150511657d4d51052d15160921b604482015290519081900360640190fd5b506001600160a01b03166000908152600860205260409020805460ff19166001908117909155600780549091019081905590565b60055481565b600654431015610466576040805162461bcd60e51b815260206004820152601060248201526f10d212531117d513d3d7d49150d1539560821b604482015290519081900360640190fd5b565b60045481565b60025481565b6009546001600160a01b031633146104c1576040805162461bcd60e51b815260206004820152600b60248201526a524f4c4c55505f4f4e4c5960a81b604482015290519081900360640190fd5b600655565b60005460ff1690565b60015481565b6009546001600160a01b03163314610522576040805162461bcd60e51b815260206004820152600b60248201526a524f4c4c55505f4f4e4c5960a81b604482015290519081900360640190fd5b33ff5b600554431015610466576040805162461bcd60e51b815260206004820152600f60248201526e4245464f52455f444541444c494e4560881b604482015290519081900360640190fd5b60086020526000908152604090205460ff1681565b6009546001600160a01b031633146105d0576040805162461bcd60e51b815260206004820152600b60248201526a524f4c4c55505f4f4e4c5960a81b604482015290519081900360640190fd5b6001600160a01b03811660009081526008602052604090205460ff1661062a576040805162461bcd60e51b815260206004820152600a6024820152691393d517d4d51052d15160b21b604482015290519081900360640190fd5b6001600160a01b03166000908152600860205260409020805460ff1916905560078054600019019055565b60035481565b60065481565b6009546001600160a01b0316156106ae576040805162461bcd60e51b815260206004820152600c60248201526b1053149150511657d253925560a21b604482015290519081900360640190fd5b6001600160a01b0386166106f7576040805162461bcd60e51b815260206004820152600b60248201526a2927a6262aa82fa0a2222960a91b604482015290519081900360640190fd5b600980546001600160a01b0319166001600160a01b0397909716969096179095556001939093556002919091556003556004556005819055600655565b6009546001600160a01b031681565b600a5481565b60075481565b600b548156fea2646970667358221220f4077143ef1803cde97e949178f8adf66682930dd063409c5d48ce54e1b67af564736f6c634300060b0033'
