import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import HomeNavbar from "./HomeNavbar";

const Quote = (props) => {
  const [job, setJob] = useState([]);
  const [price, setPrice] = useState("");
  const [message, setMessage] = useState("");
  const [redirectHome, setredirectHome] = useState(false);

  console.log(props);

  const fetchJob = (id) => {
    axios
      .get(`/jobs/${id}`)
      .then((res) => {
        setJob(res.data);
        console.log(res.data);
      })
      .catch((err) => console.log(err));
  };

  useEffect(() => {
    fetchJob(props.match.params.id);
    console.log(props.match.params.id);
  }, [props.match.params.id]);

  useEffect(() => {});

  const changeOnClick = (e) => {
    e.preventDefault();

    setPrice("");

    axios
      .put(`/jobs/update/${job._id}`, { ...job, price })
      .then((res) => {
        setMessage(res.data);
        props.history.push("/home");
      })
      .catch((err) => console.log(err));
  };

  return (
    <>
      <HomeNavbar></HomeNavbar>
      <JobContainer>
        <h2>{job.job}</h2>
        <p>Quantity: {job.quantity}</p>
        <p>Materials: {job.materials}</p>
        <p>
          Parts:{" "}
          <Link
            to={{
              pathname: "https://" + job.parts,
            }}
            target="_blank"
          >
            {job.parts}
          </Link>
        </p>
        {job.remarks && <p>Remarks: {job.remarks}</p>}
        <span className="badge badge-secondary p-2">{job.stakeholder}</span>
        <hr />
      </JobContainer>
      <QuoteContainer>
        <div className="container">
          <h1>Post Job Quotation</h1>
          <span className="message">{message}</span>
          <form onSubmit={changeOnClick} encType="multipart/form-data">
            <div className="form-group">
              <label htmlFor="parts">Price ($)</label>
              <input
                type="number"
                value={price}
                onChange={(e) => setPrice(e.target.value)}
                className="form-control"
                placeholder="Price"
              />
            </div>
            <button type="submit" className="btn btn-primary">
              Post Quotation
            </button>
          </form>
        </div>
      </QuoteContainer>
    </>
  );
};

export default Quote;

const JobContainer = styled.div`
  margin: auto;
  margin-bottom: 1rem;
  display: grid;
  max-width: 70rem;
  grid-gap: 1rem;
  border: 1px light grey;
  padding: 4rem;
  width: 30rem;

  h2 {
    margin: 0 0 5px;
  }
`;

const QuoteContainer = styled.div`
  margin: 1rem auto;
  padding: 2rem;
  width: 30rem;

  h1 {
    font-weight: 400;
  }

  .btn-primary {
    margin-top: 2rem;
    background: var(--dark-green);
    border: none;
    &:hover {
      background: var(--light-green);
    }
  }

  .message {
    font-weight: 900;
    color: tomato;
    padding: 1rem 1rem 1rem 0;
  }
`;
