import Web3 from 'web3'
import {address, ABI} from './constants/NotaryContract'

let getContract = new Promise(function (resolve, reject) {
  let web3 = new Web3(window.web3.currentProvider)
  let NotaryContract = web3.eth.contract(ABI)
  let NotaryContractInstance = NotaryContract.at(address)
  console.log(NotaryContract)
  console.log(NotaryContractInstance)
  resolve(NotaryContractInstance)
})

export default getContract
