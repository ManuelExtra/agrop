import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';

import axios from 'axios';

import Header from './Header';

import { BASE_URL } from '../utils/data';
import { view, sign } from '../utils/auth';

export default function Developers() {
  const navigate = useNavigate();
  const [user, setUser] = useState({
    user: '',
    password: '',
  });

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      let response = await axios.post(`${BASE_URL}user/login`, user);
      console.log(response.data.error);
      response = response.data;
      if (response.error === 1) {
        window.alert(response.msg);
      } else {
        const { data, token } = response;
        sign(data, token);
        window.alert(response.msg);
        navigate('/');
      }
    } catch (error) {
      console.log(error);
      window.alert(error.response.data.msg);
    }
  };

  return (
    <>
      <div className="mt-20 border-b-2 pb-10">
        <span className="text-5xl font-black justify-center guide">
          Developer
        </span>
      </div>

      <div className="mt-20 text-center">
        <span className="text-7xl main-color-nohover font-bold">COMING</span>
        &nbsp;&nbsp;&nbsp;
        <span className="text-7xl font-bold text-gray-400">SOON!</span>
        <br />
        <br />
        <span className="text-3xl main-color-nohover font-bold">65%</span>
      </div>
    </>
  );
}
