import React from "react";

const Porfolio = () => {
  return (
    <div className="portfolio">
      <h1>Gallery</h1>
      <div className="cards">
        {/* card start */}
        <div className="card card_1">
          <div className="detail">
            <p>BOOKMARK</p>
            <p>A landing page built using HTML, CSS and JAVASCRIPT</p>
            <div className="btn">
              <a
                href="https://github.com/iamtridwan/bookmark"
                target="_blank noreferrer"
              >
                View Source
              </a>
              <a href="https://bookmark.netlify.app" target="_blank noreferrer">
                See Live
              </a>
            </div>
          </div>
        </div>
        {/* card start */}
        <div className="card card_2">
          <div className="detail">
            <p>SPACE TOUR</p>
            <p>A multi page app built using HTML, SCSS and JAVASCRIPT</p>
            <div className="btn">
              <a
                href="https://github.com/iamtridwan/space_tour"
                target="_blank noreferrer"
              >
                View Source
              </a>
              <a
                href="https://myspacetour.netlify.app"
                target="_blank noreferrer"
              >
                See Live
              </a>
            </div>
          </div>
        </div>
        {/* card start */}
        <div className="card card_3">
          <div className="detail">
            <p>ROCK PAPER SCISSOR</p>
            <p>Rock paper scissors game built with vanilla js, HTML and CSS</p>
            <div className="btn">
              <a
                href="https://github.com/iamtridwan/bookmark"
                target="_blank noreferrer"
              >
                View Source
              </a>
              <a href="https://bookmark.netlify.app" target="_blank noreferrer">
                See Live
              </a>
            </div>
          </div>
        </div>
        {/* card start */}
        <div className="card card_4">
          <div className="detail">
            <p> WORLD COUNTRIES</p>
            <p>
              A web app listing countries of the world. Built using Angular and
              REST API
            </p>
            <div className="btn">
              <a
                href="https://github.com/iamtridwan/bookmark"
                target="_blank noreferrer"
              >
                View Source
              </a>
              <a href="https://bookmark.netlify.app" target="_blank noreferrer">
                See Live
              </a>
            </div>
          </div>
        </div>
        {/* card start */}
        <div className="card card_5">
          <div className="detail">
            <p>SHORTLY</p>
            <p>
              A landing page that shortens long url links. Built using HTML, CSS
              , JAVASCRIPT and REST API
            </p>
            <div className="btn">
              <a
                href="https://github.com/iamtridwan/shortly"
                target="_blank noreferrer"
              >
                View Source
              </a>
              <a
                href="https://shortlinks.netlify.app"
                target="_blank noreferrer"
              >
                See Live
              </a>
            </div>
          </div>
        </div>
        {/* card start */}
        <div className="card card_6">
          <div className="detail">
            <p>E-COMMERCE PAGE</p>
            <p>
              An e-commerce detail page built using HTML, CSS and JAVASCRIPT
            </p>
            <div className="btn">
              <a
                href="https://github.com/iamtridwan/commerce"
                target="_blank noreferrer"
              >
                View Source
              </a>
              <a
                href="https://ecommercepage.netlify.app"
                target="_blank noreferrer"
              >
                See Live
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Porfolio;
