import React from "react";
import { Display } from "./components/Display";
import { PhotoGroup } from './components/PhotoGroup';
import './styles/Home.scss';

const Home = () => {
  return (
    <React.Fragment>
      <Display />
      <div className="b-show-box">
        <h1>Delicious</h1>
        <PhotoGroup />
      </div>
    </React.Fragment>
  );
}

export default Home;
