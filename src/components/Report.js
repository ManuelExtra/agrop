import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import Header from './Header';

import axios from 'axios';

import { BASE_URL } from '../utils/data';
import { view } from '../utils/auth';

export default function Report() {
  const navigate = useNavigate();
  const [report, setReport] = useState('');
  const [urlData, setUrlData] = useState(
    JSON.parse(sessionStorage.getItem('_phish_details'))
  );
  const [reportData, setReportData] = useState({
    report: '',
    link: '',
  });

  const handleSubmitReport = async (e) => {
    e.preventDefault();

    const { user } = view();
    const response = await axios.post(
      `${BASE_URL}user/report/create`,
      { user_id: user.name, report, link: urlData.WellFormedURL },
      {
        headers: {
          Authorization: `Bearer ${view()._token}`,
        },
      }
    );
    console.log(response);
    if (response.data.error === 0) {
      alert(response.data.msg);
      navigate('/');
    }
  };
  return (
    <>
      <Header />
      <div className="m-auto w-50">
        <div className="mt-5 d-flex text-white">
          <Link to="/">
            <img
              src="/angle-left.png"
              alt="logo"
              className="img-fluid"
              style={{ width: '1em' }}
            />
          </Link>
          &nbsp;&nbsp; <b>Report</b>
        </div>
        <div className="mt-3 py-3">
          <form onSubmit={handleSubmitReport}>
            <div className="form-group">
              <label htmlFor="username" className="text-white">
                Write a report:
              </label>
              <textarea
                className="form-control form-control-lg"
                onChange={(e) => setReport(e.target.value)}
              ></textarea>
            </div>
            <br />

            <div className="d-flex justify-content-end">
              <button className="btn btn-dark">Submit</button>
            </div>
          </form>
        </div>
      </div>
    </>
  );
}
