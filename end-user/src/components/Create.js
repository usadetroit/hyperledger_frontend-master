import axios from "axios";
import React, { useState } from "react";
import styled from "styled-components";
import HomeNavbar from "./HomeNavbar";

const Create = () => {
  const [job, setJob] = useState("");
  const [quantity, setQuantity] = useState("");
  const [parts, setParts] = useState("");
  const [materials, setMaterials] = useState("ABS");
  const [remarks, setRemarks] = useState("");
  const [message, setMessage] = useState("");

  const changeOnClick = (e) => {
    e.preventDefault();

    const jobs = {
      job,
      quantity,
      parts,
      materials,
      remarks,
    };

    if (!jobs.parts.startsWith("https://")) {
      jobs.parts = "https://" + jobs.parts;
    }

    setJob("");
    setQuantity("");
    setParts("");
    setMaterials("");
    setRemarks("");

    axios
      .post("/jobs/add", jobs)
      .then((res) => setMessage(res.data))
      .catch((err) => console.log(err));
  };

  return (
    <>
      <HomeNavbar></HomeNavbar>
      <CreateContainer>
        <div className="container">
          <h1>Create Job</h1>
          <span className="message">{message}</span>
          <form onSubmit={changeOnClick} encType="multipart/form-data">
            <div className="form-group">
              <label htmlFor="job">Job Name</label>
              <input
                type="text"
                value={job}
                onChange={(e) => setJob(e.target.value)}
                className="form-control"
                placeholder="Job Name"
              />
            </div>
            <div className="form-group">
              <label htmlFor="materials">Materials</label>
              <select
                value={materials}
                onChange={(e) => setMaterials(e.target.value)}
                className="form-control"
                placeholder="Materials"
              >
                <option selected value="ABS">
                  ABS
                </option>
                <option value="Nylon (Polyamide)">Nylon (Polyamide)</option>
                <option value="PET">PET</option>
                <option value="Alumium">Aluminum</option>
                <option value="Inconel">Inconel</option>
                <option value="Nickel">Nickel</option>
                <option value="Stainless Steel">Stainless Steel</option>
                <option value="Titanium">Titanium</option>
                <option value="SLA Resins">SLA Resins</option>
                <option value="PolyJet Resins">PolyJet Resins</option>
              </select>
            </div>
            <div className="form-group">
              <label htmlFor="quantity">Quantity</label>
              <input
                type="number"
                value={quantity}
                onChange={(e) => setQuantity(e.target.value)}
                className="form-control"
                placeholder="Quantity"
              />
            </div>
            <div className="form-group">
              <label htmlFor="parts">Link for Parts</label>
              <input
                type="text"
                value={parts}
                onChange={(e) => setParts(e.target.value)}
                className="form-control"
                placeholder="Link"
              />
            </div>
            <div className="form-group">
              <label htmlFor="remarks">Remarks</label>
              <input
                type="text"
                value={remarks}
                onChange={(e) => setRemarks(e.target.value)}
                className="form-control"
                placeholder="Remarks"
              />
            </div>
            <button type="submit" className="btn btn-primary">
              Post Job
            </button>
          </form>
        </div>
      </CreateContainer>
    </>
  );
};

export default Create;

const CreateContainer = styled.div`
  margin: 3rem auto;
  padding: 4rem;
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
