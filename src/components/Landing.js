import React, { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';

import { Button } from 'flowbite-react';
import Header from './Header';

import axios from 'axios';
import { BASE_URL, API_URL, API_KEY } from '../utils/data';
import { verify, view, remove } from '../utils/auth';

import { useDispatch, useSelector } from 'react-redux';
import { keyType } from '../actions';

export default function Landing() {
  const navigate = useNavigate();
  const [url, setUrl] = useState('');
  const [text, setText] = useState('Search');
  const [isLoading, setIsLoading] = useState(false);

  const [keyTypeValue, setKeyTypeValue] = useState({
    _wallet: useSelector((state) => state.types)._wallet,
    _projects: useSelector((state) => state.types)._projects,
    _project: useSelector((state) => state.types)._project,
    _web3: useSelector((state) => state.types)._web3,
    _error: useSelector((state) => state.types)._error,
    loader: useSelector((state) => state.types).loader,
  });

  const handleSubmitLink = async (e) => {
    e.preventDefault();

    try {
      setIsLoading(true);
      setText(
        <div class="spinner-border spinner-border-sm" role="status">
          <span class="sr-only">Loading...</span>
        </div>
      );
      const response = await axios.post(
        `${API_URL}`,
        { url },
        {
          headers: {
            Apikey: API_KEY,
          },
        }
      );
      setIsLoading(false);
      setText('Search');

      const _phish_details = response.data;
      sessionStorage.setItem('_phish_details', JSON.stringify(_phish_details));
      if (response.data.ValidURL === true) {
        navigate('/valid');
      } else {
        navigate('/invalid');
      }
      // console.log(response);
    } catch (error) {
      console.log(error);
    }
  };

  const dispatch = useDispatch();
  //   const keyTypeValue = useSelector((state) => state.types);

  //   console.log(keyTypeValue);

  const launchTest = (loader) => {
    // console.log(loader);
    const typeValue = keyTypeValue;
    dispatch(keyType({ ...typeValue, type: 'UPDATE_APP_SETUP', loader }));
    setKeyTypeValue({
      ...typeValue,
      type: 'UPDATE_APP_SETUP',
      loader,
    });
  };

  return (
    <>
      {/* <Header /> */}
      <div className="container grid h-56 grid-cols-2 gap-4 sm:h-64 xl:h-80 2xl:h-96">
        <div className="py-5 w-full">
          <h1 className="poppins-black font-black text-main-color">
            A decentralized way to{' '}
          </h1>
          <h1 className="poppins-black font-black text-main-color">
            improve agriculture
          </h1>
          <br />

          <p className="raleway">
            Using Web3 and blockchain to connect farmers to consumers improving
            sustainability, profitability together ensuring efficiency, trust
            and transparency.
          </p>
          <br />
          <br />
          <Button
            color="success"
            className="main-bgcolor main-bgcolor:hover"
            onClick={() =>
              launchTest(keyTypeValue.loader === true ? false : true)
            }
          >
            Launch App
          </Button>
          <br />
          <i color="light">
            <small>
              Start by launching the app then connect your ETH wallet (i.e
              Trust, Metamask, CoinbaseWallet). It works with all kind wallet
              using WalletConnect library.
            </small>
          </i>
        </div>
        <div>
          <img
            src="./isometric agroculture-01.png"
            className="w-full"
            alt="..."
          />
        </div>
      </div>
    </>
  );
}
