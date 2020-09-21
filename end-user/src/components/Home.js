import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import HomeNavbar from "./HomeNavbar";

const Home = () => {
  const [posts, setPosts] = useState([]);

  const fetchPosts = () => {
    axios
      .get("/jobs")
      .then((res) => setPosts(res.data))
      .catch((err) => console.log(err));
  };

  useEffect(() => {
    fetchPosts();
  }, []);

  const deleteArticle = (id) => {
    axios
      .delete(`/jobs/${id}`)
      .then((res) => {
        fetchPosts();
        alert(res.data);
      })
      .catch((err) => console.log(err));
  };

  return (
    <>
      <HomeNavbar></HomeNavbar>
      <MainContainer>
        {posts.map((job, key) => (
          <div className="container" key={key}>
            <h2>{job.job}</h2>
            <p>Quantity: {job.quantity}</p>
            <p>Materials: {job.materials}</p>
            <p>
              Parts:{" "}
              <Link
                to={{
                  pathname: job.parts,
                }}
                target="_blank"
              >
                {job.parts}
              </Link>
            </p>
            {job.remarks && <p>Remarks: {job.remarks}</p>}
            {job.price && <p>Price ($): {job.price}</p>}
            <span className="badge badge-secondary p-2">{job.stakeholder}</span>
            <div className="row my-4">
              <div className="col-sm-4">
                <Link
                  to={{
                    pathname: `/quote/${job._id}`,
                  }}
                  params={{ id: job._id }}
                  className="btn btn-outline-success"
                >
                  Accept
                </Link>
              </div>
              <div className="col-sm-4">
                <button
                  onClick={() => deleteArticle(job._id)}
                  className="btn btn-outline-danger"
                >
                  Decline
                </button>
              </div>
            </div>
            <hr />
          </div>
        ))}
      </MainContainer>
    </>
  );
};

export default Home;

const MainContainer = styled.div`
  margin: 5rem auto;
  display: grid;
  max-width: 70rem;
  grid-gap: 1rem;

  @media (min-width: 36rem) {
     {
      grid-template-columns: repeat(2, 1fr);
    }
  }

  @media (min-width: 55rem) {
     {
      grid-template-columns: repeat(3, 1fr);
    }
  }

  h2 {
    margin: 0 0 2rem;
  }
`;
