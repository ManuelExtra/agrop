import React, { useState } from 'react';
import { Outlet, useNavigate, Link, useLocation } from 'react-router-dom';
import { Navbar, Button } from 'flowbite-react';

import { WalletConnectConnector } from '@web3-react/walletconnect-connector';

import axios from 'axios';

import { API_URL, API_KEY, INFURA_URL, BRIDGE_URL } from '../utils/data';
import { remove } from '../utils/auth';

import { useWeb3React } from '@web3-react/core';

export default function Header(props) {
  const location = useLocation();
  const [isOpen, setIsOpen] = useState(false);
  const { activate, deactivate } = useWeb3React();

  const WalletConnect = new WalletConnectConnector({
    rpcUrl: INFURA_URL,
    bridge: BRIDGE_URL,
    qrcode: true,
  });
  const toggle = () => setIsOpen(!isOpen);

  const navigate = useNavigate();
  const [url2, setUrl2] = useState('');
  const [text, setText] = useState('Search');
  const [isLoading, setIsLoading] = useState(false);

  console.log(location.pathname);

  const handleSubmitLink2 = async (e) => {
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
        { url2 },
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

  return (
    <div className="container">
      <Navbar fluid={true} rounded={true}>
        <Link to={'/'} className="no-underline">
          <Navbar.Brand className="no-underline">
            <img
              src="./Agrop Logo.svg"
              className="mr-3 h-6 sm:h-9"
              alt="Flowbite Logo"
            />
          </Navbar.Brand>
        </Link>
        <div className="flex md:order-2">
          <Button
            color="success"
            className="raleway main-bgcolor main-bgcolor:hover"
          >
            Launch App
          </Button>
          <Navbar.Toggle />
        </div>
        <Navbar.Collapse>
          <Navbar.Link color="success" className="no-underline">
            <Link
              to={'/'}
              color="success"
              className={`raleway ${
                location.pathname === '/'
                  ? 'main-color main-color-active'
                  : 'text-dark'
              } no-underline`}
            >
              Home
            </Link>
          </Navbar.Link>
          <Navbar.Link className="no-underline">
            <Link
              to={'/pricing'}
              className={`raleway ${
                location.pathname === '/pricing'
                  ? 'main-color main-color-active'
                  : 'text-dark'
              } no-underline`}
            >
              Pricing
            </Link>
          </Navbar.Link>
          <Navbar.Link className="no-underline">
            <Link
              to={'/developers'}
              className={`raleway ${
                location.pathname === '/developers'
                  ? 'main-color main-color-active'
                  : 'text-dark'
              } no-underline`}
            >
              Developers
            </Link>
          </Navbar.Link>

          <Navbar.Link className="no-underline">
            <Link
              to={'/guide'}
              className={`raleway ${
                location.pathname === '/guide'
                  ? 'main-color main-color-active'
                  : 'text-dark'
              } no-underline`}
            >
              Guide
            </Link>
          </Navbar.Link>
          <Navbar.Link className="no-underline">
            <Link
              to={'/about-us'}
              color="success"
              className={`raleway ${
                location.pathname === '/about-us'
                  ? 'main-color main-color-active'
                  : 'text-dark'
              } no-underline`}
            >
              About Us
            </Link>
          </Navbar.Link>
        </Navbar.Collapse>
      </Navbar>

      <Outlet />
      {/* &nbsp;
      <button
        onClick={() => {
          activate(WalletConnect);
        }}
      >
        Wallet Connect
      </button>
      {INFURA_URL} */}
    </div>
  );
}
