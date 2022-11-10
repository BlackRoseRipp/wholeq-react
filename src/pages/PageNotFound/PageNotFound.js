import { Fragment } from "react";
import "./PageNotFound.css";

const PageNotFound = () => {
  return (
    <Fragment>
      <div className="banner">
        <h1 className="title-404 heading">404</h1>
      </div>
      <div className="container-lg text-center mb-5 pb-5">
        <img
          src="assets/img/404/animation_640_labah5mk.gif"
          className="img-404"
        />
        <h2>It seems this page hasn't been made yet!</h2>
        <h4 className="message-404">
          Return to the homepage to learn more about WholeQ from our current
          information provided.
        </h4>
        <a href="/" className="btn btn-return">
          Return to Home
        </a>
      </div>
    </Fragment>
  );
};

export default PageNotFound;
