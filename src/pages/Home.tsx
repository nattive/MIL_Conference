import React from "react";
import { Link } from "react-router-dom";

export const Home: React.FC = () => (
  <div className="py-20">
    <h1>loading.. Other routes are working</h1>
    <Link to="./testimonies"> testimonies</Link>
  </div>
);
