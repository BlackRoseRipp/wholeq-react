import React from "react";
import {
  FaClipboardCheck,
  FaDumbbell,
  FaMedkit,
  FaTabletAlt,
} from "react-icons/fa";
import "./Home.css";

const Home = () => {
  return (
    <>
      <div className="home-banner">
        <div className="hero-container container">
          <div className="row w-100 mx-0 g-4">
            <div className="col-lg-7 d-flex flex-column justify-content-center text-center text-lg-start">
              <h1 className="fw-bold mb-4" style={{ marginTop: "55px" }}>
                WholeQ - Setting The Foundation For A Healthier Future.
              </h1>
              <p className="fw-lighter" style={{ fontSize: "20px" }}>
                Organically grow the holistic world view of disruptive
                innovation via workplace diversity and empowerment. Bring to the
                table win-win survival strategies to ensure proactive
                domination.
              </p>
              <div className="mt-4">
                <a href="/about" className="btn btn-blue">
                  Learn More
                </a>
              </div>
            </div>
            <div className="col-lg-5 d-flex align-items-center">
              <img
                src="assets/img/pexels-evg-kowalievska-1170979.jpg"
                className="hero-img"
              />
            </div>
          </div>
        </div>
      </div>
      <div className="white-container container">
        <h2 className="body-header text-center fw-bold">Comprehensive Care</h2>
        <p className="comp-care-text text-center mx-auto">
          To fully understand how to properly treat your body, you must be
          willing to take the steps necessary to understand each individual part
          of it. At WholeQ, our comprehensive care provides you with the
          opportunity to learn about your body. Then, through our WholeQ family
          of services, we can create a treatment plan catered to you, to keep
          you living the happy and healthy life you deserve.
        </p>
        <div className="row w-100 mx-0 mt-5">
          <div className="col-lg-3">
            <div className="px-2 d-flex flex-column justify-content-center align-items-center">
              <div className="icon-container">
                <FaTabletAlt className="icon" />
              </div>
              <h4 className="comp-care-card fw-normal">Telehealth</h4>
              <p className="comp-care-card text-center">
                Our convenient telemedicine team of board-certified doctors are
                on standby, ready to diagnose your illness and get you proper
                treatment.
              </p>
            </div>
          </div>
          <div className="col-lg-3">
            <div className="px-2 d-flex flex-column justify-content-center align-items-center">
              <div className="icon-container">
                <FaClipboardCheck className="icon" />
              </div>
              <h4 className="comp-care-card fw-normal">Rapid Lab Results</h4>
              <p className="comp-care-card text-center">
                The key to getting patients feeling like themselves again is
                being able to quickly diagnose their illness. This is why our
                lab prioritizes quick turnaround times.
              </p>
            </div>
          </div>
          <div className="col-lg-3">
            <div className="px-2 d-flex flex-column justify-content-center align-items-center">
              <div className="icon-container">
                <FaDumbbell className="icon" />
              </div>
              <h4 className="comp-care-card fw-normal">Fitness & Wellness</h4>
              <p className="comp-care-card text-center">
                Living an active lifestyle promotes good body health and gives
                your body the fuel it needs to combat diseases.
              </p>
            </div>
          </div>
          <div className="col-lg-3">
            <div className="px-2 d-flex flex-column justify-content-center align-items-center">
              <div className="icon-container">
                <FaMedkit className="icon" />
              </div>
              <h4 className="comp-care-card fw-normal">At-Home Test Kits</h4>
              <p className="comp-care-card text-center">
                Driving to the doctor can be a hassle for many families. With
                our line of at home testing kits, you can get the same lab
                quality results, without having to leave home.
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="container my-lg-5">
        <div className="mission-card">
          <div className="row w-100 mx-0 g-4">
            <div className="col-lg-6 d-flex align-items-center">
              <div className="row mx-2 g-4 w-100">
                <div className="col-md-6">
                  <img
                    src="assets/img/pexels-emmy-e-2381069.jpg"
                    className="w-100"
                  />
                </div>
                <div className="col-md-6">
                  <img
                    src="assets/img/pexels-helena-lopes-708440.jpg"
                    className="w-100"
                  />
                </div>
                <div className="col-md-6">
                  <img
                    src="assets/img/pexels-miguel-arcanjo-saddi-972217.jpg"
                    className="w-100"
                  />
                </div>
                <div className="col-md-6">
                  <img
                    src="assets/img/pexels-hannah-nelson-1065084.jpg"
                    className="w-100"
                  />
                </div>
              </div>
            </div>
            <div className="col-lg-6 d-flex flex-column justify-content-center text-lg-start text-center">
              <h2 className="body-header fw-bold">Our Mission.</h2>
              <p>
                Our program is designed to be able to meet your needs regardless
                of the situation. Whether it’s a common sickness such as the flu
                or a more intense diagnosis, WholeQ will offer services that can
                help get you back on track. Concerned about a common health
                condition that runs in the family or want access to speak to a
                mental health specialist? Along with our available services, we
                regularly take blood samples to monitor any changes in your
                body. From these changes, we can better predict your future
                potential health risks and begin the treatment of your condition
                before you begin to feel symptoms. This form of care is
                extremely cost effective for our patients. The cost of care to
                prevent an illness with our services is significantly less than
                the cost of a treatment diagnosis in the future. Our patients
                will have a greater ease of mind knowing that their health is
                regularly monitored. Life can get busy, but WholeQ will always
                be there for you and your health. We’re dedicated to providing
                high quality and innovative healthcare services.
              </p>
              <div className="mt-2">
                <a href="/about" className="btn btn-blue">
                  Learn More
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="white-container container">
        <h2 className="body-header fw-bold text-center">
          Affiliated Companies
        </h2>
        <div className="row w-100 mx-0 g-5 mt-4">
          <div className="col-lg-3 col-md-6 text-center">
            <a href="http://qsure.com/" className="logo-btn">
              <img
                src="assets/img/logos/QSure_logo_Capital S copy.png"
                className="w-75"
              />
            </a>
          </div>
          <div className="col-lg-3 col-md-6 text-center">
            <a href="http://www.labq.com/" className="logo-btn">
              <img src="assets/img/logos/labq-logo.png" className="w-75" />
            </a>
          </div>
          <div className="col-lg-3 col-md-6 text-center">
            <a href="https://qpharmacy.com/" className="logo-btn">
              <img
                src="assets/img/logos/Qpharmacy-_Logo-300x59.png"
                className="w-75"
              />
            </a>
          </div>
          <div className="col-lg-3 col-md-6 text-center">
            <a href="https://qcare.com/" className="logo-btn">
              <img src="assets/img/logos/qcare-logo.png" className="w-75" />
            </a>
          </div>
          <div className="col-lg-3 col-md-6 text-center">
            <a href="https://rapidlabq.com/" className="logo-btn">
              <img src="assets/img/logos/rapidq-logo.png" className="w-75" />
            </a>
          </div>
          <div className="col-lg-3 col-md-6 text-center">
            <a href="#" className="logo-btn">
              <img src="assets/img/logos/tela-q.png" className="w-75" />
            </a>
          </div>
        </div>
        {/* <div className="lorem-container">
          <div className="row w-100 mx-0">
            <div className="col-lg-6 d-flex flex-column justify-content-center">
              <p className="sub-heading mb-0 text-lg-start text-center">
                Donec ornare felis quis ipsum bibendum
              </p>
              <h2 className="body-header fw-bold text-lg-start text-center">
                Ut eget urna eu neque
              </h2>
              <p className="text-lg-start text-center">
                Aliquam tincidunt elementum faucibus. Maecenas interdum erat non
                suscipit efficitur. Pellentesque varius tortor ac justo feugiat
                gravida. Donec vel metus commodo enim pellentesque feugiat non
                at nisl. Nullam ac pulvinar lacus. Nullam facilisis nunc non
                pretium auctor. Vivamus enim risus, scelerisque id vulputate id,
                laoreet sed sem. Maecenas feugiat aliquam ligula. Nulla quis
                maximus metus, ac eleifend leo.
              </p>
              <ul>
                <li>
                  <p className="mb-0">Venenatis auctor turpis volutpat.</p>
                </li>
                <li>
                  <p className="mb-0">
                    Aenean pulvinar mauris in congue finibus.
                  </p>
                </li>
                <li>
                  <p className="mb-0">
                    Maecenas euismod eu ligula quis sodales.
                  </p>
                </li>
                <li>
                  <p className="mb-0">
                    Vivamus ullamcorper bibendum libero in mattis.
                  </p>
                </li>
              </ul>
            </div>
            <div className="col-lg-6 text-center">
              <img
                src="assets/img/pexels-jeff-denlea-3714743.jpg"
                className="lorem-img"
              />
            </div>
          </div>
        </div> */}
        <div className="w-100 mx-0" style={{ marginTop: "7rem" }}>
          <h2 className="body-header fw-bold text-center">Our Blog</h2>
          <div className="mx-auto">
            <section>
              <div className="container row" style={{ width: "fit-content" }}>
                <div className="col-lg-6 d-flex justify-content-center">
                  <figure className="snip1563">
                    <img
                      src="assets/img/cards/family-bubble.jpg"
                      alt="family-bubble"
                    />
                    <figcaption>
                      <h3>
                        Covid News: South Korea to End Virtually All
                        Restrictions
                      </h3>
                    </figcaption>
                    <a href="https://www.nytimes.com/live/2022/04/14/world/covid-19-mandates-cases-vaccine"></a>
                  </figure>
                </div>
                <div className="col-lg-6 d-flex justify-content-center">
                  <figure className="snip1563">
                    <img
                      src="assets/img/cards/covid-defense.jpg"
                      alt="sample110"
                    />
                    <figcaption>
                      <h3>
                        WHO says Covid still a global public health emergency
                        even as deaths fall to lowest level in two years
                      </h3>
                    </figcaption>
                    <a href="https://www.cnbc.com/2022/04/13/who-says-covid-still-global-health-emergency-even-as-deaths-fall-to-lowest-level-in-two-years.html"></a>
                  </figure>
                </div>
                <div className="col-lg-6 d-flex justify-content-center">
                  <figure className="snip1563">
                    <img src="assets/img/cards/telehealth.jpg" alt="sample86" />
                    <figcaption>
                      <h3>
                        With 32.1% CAGR, Telehealth Market Size worth USD 636.38
                        Billion in 2028
                      </h3>
                    </figcaption>
                    <a href="https://www.globenewswire.com/news-release/2022/04/14/2422499/0/en/With-32-1-CAGR-Telehealth-Market-Size-worth-USD-636-38-Billion-in-2028.html"></a>
                  </figure>
                </div>
                <div className="col-lg-6 d-flex justify-content-center">
                  <figure className="snip1563">
                    <img src="assets/img/cards/test-kits.jpg" alt="sample59" />
                    <figcaption>
                      <h3>
                        More People Are Using At-Home Tests to Diagnose
                        COVID—How Will We Know if There's Another Surge?
                      </h3>
                    </figcaption>
                    <a href="https://www.health.com/condition/infectious-diseases/coronavirus/how-will-we-know-next-covid-surge"></a>
                  </figure>
                </div>
              </div>
            </section>
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
