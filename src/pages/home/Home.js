import React from "react";
import { Link } from "react-router-dom";
import "./home.css";

const Home = () => {
  return (
    <div>
      {/* Hero Section */}
      <section className="hero-section">
        <div className="video-background">
          <video autoPlay loop muted>
            <source
              src="https://www.w3schools.com/html/mov_bbb.mp4"
              type="video/mp4"
            />
            Your browser does not support the video tag.
          </video>
        </div>
        <div className="hero-content">
          <h1>Welcome to IT & Economy App</h1>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla
            facilisi.
          </p>
        </div>
      </section>

      {/* Features Section */}
      <section className="features-section">
        <div className="container">
          <div className="row">
            <div className="col-md-4">
              <div className="card feature-card bg-success">
                <div className="card-body">
                  <h5 className="card-title">Feature 1</h5>
                  <p className="card-text">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  </p>
                </div>
              </div>
            </div>
            <div className="col-md-4">
              <div className="card feature-card bg-success">
                <div className="card-body">
                  <h5 className="card-title">Feature 2</h5>
                  <p className="card-text">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  </p>
                </div>
              </div>
            </div>
            <div className="col-md-4">
              <div className="card feature-card bg-success">
                <div className="card-body">
                  <h5 className="card-title">Feature 3</h5>
                  <p className="card-text">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  </p>
                </div>
              </div>
            </div>
            <div className="col-md-4">
              <div className="card feature-card bg-success">
                <div className="card-body">
                  <h5 className="card-title">Feature 4</h5>
                  <p className="card-text">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  </p>
                </div>
              </div>
            </div>
            <div className="col-md-4">
              <div className="card feature-card bg-success">
                <div className="card-body">
                  <h5 className="card-title">Feature 5</h5>
                  <p className="card-text">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  </p>
                </div>
              </div>
            </div>
            <div className="col-md-4">
              <div className="card feature-card bg-success">
                <div className="card-body">
                  <h5 className="card-title">Feature 6</h5>
                  <p className="card-text">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Photo Gallery Section */}
      <section className="photo-gallery-section">
        <div className="container">
          <h2 className="section-title">Photo Gallery</h2>
          <div className="row">
            <div className="col-md-4">
              <div className="gallery-item">
                <img src="https://via.placeholder.com/350" alt="Gallery Item" />
              </div>
            </div>
            <div className="col-md-4">
              <div className="gallery-item">
                <img src="https://via.placeholder.com/350" alt="Gallery Item" />
              </div>
            </div>
            <div className="col-md-4">
              <div className="gallery-item">
                <img src="https://via.placeholder.com/350" alt="Gallery Item" />
              </div>
            </div>
            <div className="col-md-4">
              <div className="gallery-item">
                <img src="https://via.placeholder.com/350" alt="Gallery Item" />
              </div>
            </div>
            <div className="col-md-4">
              <div className="gallery-item">
                <img src="https://via.placeholder.com/350" alt="Gallery Item" />
              </div>
            </div>
            <div className="col-md-4">
              <div className="gallery-item">
                <img src="https://via.placeholder.com/350" alt="Gallery Item" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* About Us Section */}
      <section className="about-us-section">
        <div className="container">
          <div className="row">
            <div
              className="col-md-6 about-image"
              style={{
                backgroundImage: `url('https://via.placeholder.com/600x400')`,
              }}
            ></div>
            <div className="col-md-6">
              <div className="about-text">
                <h2>About Us</h2>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla
                  facilisi. Sed sit amet enim id ipsum imperdiet faucibus. In ac
                  ligula ex. Aliquam tincidunt justo nec magna fringilla, ac
                  lobortis ex accumsan.
                </p>
                <p>
                  Nullam sit amet rhoncus est. Vivamus euismod erat vel metus
                  finibus, sed lacinia lorem efficitur. Sed porta massa et
                  lectus tincidunt, a tincidunt est fermentum.
                </p>
                <Link to="/about" className="btn">
                  Read More
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
