import React, { useState } from 'react'
import { pinata } from '../config'
import { ethers } from "ethers"

import './App.css'

const App = () => {

  const [selectedFile, setselectedFile] = useState(null);
  const [ipfsHash, setipfsHash] = useState("");
  const [storedHash, setstoredHash] = useState("");

  const changeHandler = (event) => {
    setselectedFile(event.target.files[0]);
  }
  
  

  const contractAddress = "0xd9145CCE52D386f254917e481eB44e9943F39138";
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
    <div className='app-container'>
      <div className='upload-section'>
        <label className='label-name'>IPFS Storage</label>
        <input type='file' className='file-input' onChange={changeHandler}></input>
        <button className='submit-button' onClick={handleSubmission}>Submit</button>

      </div>

    </div>

  )
}

export default App


