import React from "react";
import "./about.css";

const About = () => {
  return (
    <div className="about-page">
      {/* Hero Section */}
      <section className="hero-section">
        <div className="container">
          <div className="row">
            <div className="col-md-6 mx-auto">
              <h1 className="text-center">About Us</h1>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla
                facilisi. Sed sit amet enim id ipsum imperdiet faucibus. In ac
                ligula ex. Aliquam tincidunt justo nec magna fringilla, ac
                lobortis ex accumsan.
              </p>
              <p>
                Nullam sit amet rhoncus est. Vivamus euismod erat vel metus
                finibus, sed lacinia lorem efficitur. Sed porta massa et lectus
                tincidunt, a tincidunt est fermentum.
              </p>
            </div>
          </div>
        </div>
        <div className="hero-background">
          <img
            src="https://images.unsplash.com/photo-1506748686214-e9df14d4d9d0"
            alt="Hero Background"
          />
        </div>
      </section>

      {/* Our Team Section */}
      <section className="our-team">
        <div className="container">
          <h2 className="text-center mb-4">Our Team</h2>
          <div className="row">
            {teamMembers.map((member, index) => (
              <div key={index} className="col-md-4">
                <div className="team-member">
                  <img src={member.image} alt={member.name} />
                  <h3>{member.name}</h3>
                  <p>{member.position}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Our Values Section */}
      <section className="our-values">
        <div className="container">
          <h2 className="text-center mb-4">Our Values</h2>
          <div className="row">
            {values.map((value, index) => (
              <div key={index} className="col-md-4">
                <div className="value">
                  <h3>{value.title}</h3>
                  <p>{value.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

const teamMembers = [
  {
    image: "https://via.placeholder.com/300",
    name: "John Doe",
    position: "CEO",
  },
  {
    image: "https://via.placeholder.com/300",
    name: "Jane Doe",
    position: "COO",
  },
  {
    image: "https://via.placeholder.com/300",
    name: "James Smith",
    position: "CTO",
  },
];

const values = [
  {
    title: "Quality",
    description: "We strive for excellence in everything we do.",
    color: "#f44336",
  },
  {
    title: "Innovation",
    description: "We embrace innovation to stay ahead of the curve.",
    color: "#2196f3",
  },
  {
    title: "Integrity",
    description: "We believe in honesty, transparency, and ethical behavior.",
    color: "#4caf50",
  },
];

export default About;
