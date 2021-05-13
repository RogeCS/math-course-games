import React from "react";
import { Link } from "react-router-dom";

import "../assets/styles/containers/Home.scss";
const Home = () => {
  return (
    <div className="home">
      <div className="grid__container">
        <h1>Esta es la aplicación yaya</h1>
        <Link to="/course">
          <button>ir a course</button>
        </Link>
      </div>
    </div>
  );
};

export default Home;
