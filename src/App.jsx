import React, { useState } from 'react'
import { pinata } from '../config'
import { ethers } from "ethers"

import './App.css'

const App = () => {

  const [selectedFile, setselectedFile] = useState(null);
  const [ipfsHash, setipfsHash] = useState("");
  const [storedHash, setstoredHash] = useState("");

  const contractAddress = "0xd9145CCE52D386f254917e481eB44e9943F39138",
  const contractAbi = [
    {
      "inputs": [
        {
          "internalType": "string",
          "name": "_ipfshash",
          "type": "string"
        }
      ],
      "name": "setIPFSHash",
      "outputs": [],
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "inputs": [],
      "name": "getIPFSHash",
      "outputs": [
        {
          "internalType": "string",
          "name": "",
          "type": "string"
        }
      ],
      "stateMutability": "view",
      "type": "function"
    }
  ]

  return (
    
  )
}

export default App


