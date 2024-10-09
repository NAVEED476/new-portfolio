import React from "react";
import Navbar from "../components/Navbar";
import "./home.css";
import { Link } from "react-router-dom";

const Home = () => {
  console.log("Home");
  return (
    <>
      <Navbar />
      <div className="home-Cont">
        <div className="home-left">
          <h1 style={{ fontSize: "3rem" }}>HEY 👋, MY NAME IS NAVEED SHAIK</h1>
          <h2>I am a Full-Stack web Developer</h2>
          <h3>
            With more than 3 years of experience, I am a passionate web developer
            proficient in HTML, CSS, JavaScript, React for front-end
            development, along with Node.js, Express, and MongoDB for Back-end
            development .This comprehensive skill set enables me to create
            exceptional web experiences while staying up-to-date with industry
            trends.
          </h3>
          <div className="icons">
            <Link
              to="https://github.com/NAVEED476?tab=overview&from=2024-02-01&to=2024-02-03"
              target="_blank"
            >
              <div className="small-circle">
                <img
                  src="data:image/png;base64,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"
                  alt="GitHub"
                />
              </div>
            </Link>

            <Link
              to="https://www.linkedin.com/in/naveed-shaik-61b475223/"
              target="_blank"
            >
              <div className="small-circle">
                <img
                  src="data:image/png;base64,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"
                  alt="LinkedIn"
                />
              </div>
            </Link>

            <a href="mailto:snaveedn23@gmail.com">
              <div className="small-circle">
                <img
                  src="data:image/jpeg;base64,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"
                  alt="Mail"
                />
              </div>
            </a>
            <Link
              to="https://www.facebook.com/naveed.naveednvd/?show_switched_toast=0&show_invite_to_follow=0&show_switched_tooltip=0&show_podcast_settings=0&show_community_review_changes=0&show_community_rollback=0&show_follower_visibility_disclosure=0"
              target="_blank"
            >
              <div className="small-circle">
                <img
                  src="data:image/png;base64,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"
                  alt="Facebook"
                />
              </div>
            </Link>

            <Link to="https://www.instagram.com/iam_naveed23/" target="_blank">
              <div className="small-circle">
                <img
                  src="data:image/jpeg;base64,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"
                  alt="Instagram"
                />
              </div>
            </Link>
            <Link to="https://x.com/snaveedn23?t=mqz8MbkXfh9bYqxOrMjy8A&s=08" target="_blank">
              <div className="small-circle">
                <img
                  src="data:image/jpeg;base64,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"
                  alt="Twitter"
                />
              </div>
            </Link>
          </div>
        </div>
        <div className="home-right">
          <div className="img-cont"></div>
        </div>
      </div>
    </>
  );
};

export default Home;
