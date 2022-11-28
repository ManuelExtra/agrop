import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Header from './Header';

export default function InvalidLink() {
  const [urlData, setUrlData] = useState(
    JSON.parse(sessionStorage.getItem('_phish_details'))
  );
  console.log(urlData);
  return (
    <>
      <Header />
      <div className="m-auto w-50">
        <div className="mt-5 text-center text-white">
          <Link to="/">
            <img
              src="/close.png"
              alt="close"
              className="img-fluid"
              style={{ width: '10em' }}
            />
          </Link>
          <br />
          <p className="display-5">This is a phishing site!</p>
          <div>
            <p>Valid URL: {urlData.ValidURL ? 'True' : 'False'}</p>
            <p>Valid Domain: {urlData.Valid_Domain ? 'True' : 'False'}</p>
            <p>Valid Endpoint: {urlData.Valid_Endpoint ? 'True' : 'False'}</p>
            <p>Valid Syntax: {urlData.Valid_Syntax ? 'True' : 'False'}</p>
          </div>
          <div className="d-flex justify-content-center">
            <Link to="/" className="btn btn-dark">
              Go Back
            </Link>
            &nbsp;
            <Link to="/report" className="btn btn-success">
              Report
            </Link>
          </div>
        </div>
        {/* <div className="card mt-3 py-3">
          <div className="card-body">
            <h5>Sign in your account</h5>
            <form className="">
              <div className="form-group">
                <label htmlFor="username">Username:</label>
                <input type="text" className="form-control" />
              </div>
              <br />
              <div className="form-group">
                <label htmlFor="username">Password:</label>
                <input type="password" className="form-control" />
              </div>
              <br />
              <div className="text-right">
                <button className="btn btn-dark">Login</button>
                <br />
                <span>
                  Don't have an account?{' '}
                  <Link className="text-dark" to="/signup">
                    Register
                  </Link>
                </span>
              </div>
            </form>
          </div>
        </div> */}
      </div>
    </>
  );
}
