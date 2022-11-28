import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';

import axios from 'axios';
import Header from './Header';

import { BASE_URL } from '../utils/data';

export default function Signup() {
  const navigate = useNavigate();
  const [user, setUser] = useState({
    name: '',
    password: '',
  });
  const [msg, setMsg] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      let response = await axios.post(`${BASE_URL}user/signup`, user);
      console.log(response.data.error);
      response = response.data;
      if (response.error === 1) {
        window.alert(response.msg);
      } else {
        window.alert(response.msg);
        navigate('/signin');
      }
    } catch (error) {
      console.log(error);
      window.alert(error.response.data.msg);
    }
  };

  return (
    <>
      <Header />
      <div className="m-auto w-50">
        <div className="mt-5 text-center ">
          <Link to="/">
            <img
              src="/logo.png"
              alt="logo"
              className="img-fluid"
              style={{ width: '5em' }}
            />
          </Link>
        </div>
        <div className="card mt-3 py-3">
          <div className="card-body">
            <h5>Register your account</h5>
            <form onSubmit={handleSubmit}>
              <div className="form-group">
                <label htmlFor="username">Username:</label>
                <input
                  type="text"
                  className="form-control"
                  onChange={(e) => setUser({ ...user, name: e.target.value })}
                />
              </div>
              <br />
              <div className="form-group">
                <label htmlFor="username">Password:</label>
                <input
                  type="password"
                  className="form-control"
                  onChange={(e) =>
                    setUser({ ...user, password: e.target.value })
                  }
                />
              </div>
              <br />
              <div className="text-right">
                <button type="submit" className="btn btn-dark">
                  Register
                </button>
                <br />
                <span>
                  Already have an account?{' '}
                  <Link className="text-dark" to="/signin">
                    Login
                  </Link>
                </span>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
}
