import React, { useState } from "react";
import { Link } from "react-router-dom";
import Header from "./Header";

export default function ValidLink() {
    const [urlData, setUrlData] = useState(
        JSON.parse(sessionStorage.getItem("_phish_details"))
    );
    console.log(urlData);
    return (
        <>
            <Header />
            <div className="m-auto w-50">
                <div className="mt-5 text-center ">
                    <Link to="/">
                        <img
                            src="/check.png"
                            alt="close"
                            className="img-fluid"
                            style={{ width: "10em" }}
                        />
                    </Link>
                    <br />
                    <p className="display-5 text-white">Link is valid</p>

                    {urlData.ValidURL && (
                        <div class="embed-responsive embed-responsive-16by9">
                            <iframe
                                class="embed-responsive-item"
                                src={urlData.WellFormedURL}
                                allowfullscreen
                                style={{ width: "40em", height: "20em" }}
                            ></iframe>
                        </div>
                    )}
                    <div className="text-center">
                        <Link to="/" className="btn btn-dark">
                            Go Back
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
