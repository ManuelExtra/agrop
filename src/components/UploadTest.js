import React, { useState, useEffect } from 'react';
import SimpleStorageContract from '../../build/contracts/SimpleStorage.json';
import getWeb3 from '../utils/getWeb3';
import ipfs from '../ipfs';

export default function UploadTest() {
  const [ipfsHash, setIpfsHash] = useState('');
  const [web3, setWeb3] = useState(null);
  const [buffer, setBuffer] = useState(null);
  const [account, setAccount] = useState(null);

  const instantiateContract = () => {
    /*
     * SMART CONTRACT EXAMPLE
     *
     * Normally these functions would be called in the context of a
     * state management library, but for convenience I've placed them here.
     */

    const contract = require('truffle-contract');
    const simpleStorage = contract(SimpleStorageContract);
    simpleStorage.setProvider(this.state.web3.currentProvider);

    // Get accounts.
    this.state.web3.eth.getAccounts((error, accounts) => {
      simpleStorage
        .deployed()
        .then((instance) => {
          this.simpleStorageInstance = instance;
          this.setState({ account: accounts[0] });
          // Get the value from the contract to prove it worked.
          return this.simpleStorageInstance.get.call(accounts[0]);
        })
        .then((ipfsHash) => {
          // Update state with the result.
          return setIpfsHash(ipfsHash);
        });
    });
  };

  const captureFile = (event) => {
    event.preventDefault();
    const file = event.target.files[0];
    const reader = new window.FileReader();
    reader.readAsArrayBuffer(file);
    reader.onloadend = () => {
      this.setState({ buffer: Buffer(reader.result) });
      console.log('buffer', this.state.buffer);
    };
  };

  const onSubmit = (event) => {
    event.preventDefault();
    ipfs.files.add(this.state.buffer, (error, result) => {
      if (error) {
        console.error(error);
        return;
      }
      this.simpleStorageInstance
        .set(result[0].hash, { from: this.state.account })
        .then((r) => {
          return this.setState({ ipfsHash: result[0].hash });
          console.log('ifpsHash', this.state.ipfsHash);
        });
    });
  };

  useEffect(() => {
    // Get network provider and web3 instance.
    // See utils/getWeb3 for more info.

    getWeb3
      .then((results) => {
        this.setState({
          web3: results.web3,
        });

        // Instantiate contract once web3 provided.
        this.instantiateContract();
      })
      .catch(() => {
        console.log('Error finding web3.');
      });
  });

  return (
    <div className="App">
      <nav className="navbar pure-menu pure-menu-horizontal">
        <a href="#" className="pure-menu-heading pure-menu-link">
          IPFS File Upload DApp
        </a>
      </nav>

      <main className="container">
        <div className="pure-g">
          <div className="pure-u-1-1">
            <h1>Your Image</h1>
            <p>This image is stored on IPFS & The Ethereum Blockchain!</p>
            <img src={`https://ipfs.io/ipfs/${ipfsHash}`} alt="" />
            <h2>Upload Image</h2>
            <form onSubmit={onSubmit}>
              <input type="file" onChange={captureFile} />
              <input type="submit" />
            </form>
          </div>
        </div>
      </main>
    </div>
  );
}
