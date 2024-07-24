import React from "react";
import Container from "react-bootstrap/Container";
import AppNavbar from "./AppNavbar";

function About() {
  return (
    <>
      <Container
        style={{
          marginTop: "40px",
          marginBottom: "40px",
          borderRadius: "13px",
          boxShadow: "0 5px 15px 0 rgba(0, 0, 0, 0.25)",
          padding: "10px",
        }}
      >
        <h2>Reader's Digest</h2>
        <p style={{ width: "100%", padding: "15px", fontWeight: "bold" }}>
          Reader's Digest is an American general-interest family magazine,
          published ten times a year. Formerly based in Chappaqua, New York, it
          is now headquartered in midtown Manhattan. The magazine was founded in
          1922 by DeWitt Wallace and his wife Lila Bell Wallace.
        </p>

        <div className="row d-flex align-items-center">
          <div className="col-lg-6">
            <img
              src="https://d1csarkz8obe9u.cloudfront.net/posterpreviews/magazine-cover-flyer-template-2526f94e685554a3b90aabf07d713f27_screen.jpg?ts=1636969354"
              alt="Campaign Target"
              style={{
                maxHeight: "70%",
                borderRadius: "15px 0 0 0",
                width: "50%",
                marginLeft: "160px", // Add this line to move the image to the right
              }}
            />
          </div>
          <div className="col-lg-6" style={{ textAlign: "justify" }}>
            <p style={{ width: "80%" }}>
              Reader's Digest is an American general-interest family magazine
              published ten times a year. Originally based in Chappaqua, New
              York, it is now headquartered in midtown Manhattan. The magazine
              was founded in 1922 by DeWitt Wallace and his wife Lila Bell
              Wallace. It offers a variety of articles on health, travel, and
              human interest stories. Readers appreciate its concise and
              engaging format. Over the years, it has become one of the most
              widely read magazines in the world. Its articles often feature
              practical advice and real-life experiences, making it a beloved
              publication for many families.
            </p>
          </div>
        </div>

        {/* New Card */}
        <div
          className="row d-flex align-items-center"
          style={{ marginTop: "40px" }}
        >
          <div className="col-lg-6">
            <img
              src="https://images.newscientist.com/wp-content/uploads/2024/06/19171211/SEI_209282181.jpg"
              alt="New Campaign"
              style={{
                maxHeight: "100%",
                borderRadius: "20px 0 0 0",
                width: "50%",
                marginLeft: "160px", // Add this line to move the image to the right
              }}
            />
          </div>
          <div className="col-lg-6" style={{ textAlign: "justify" }}>
            <p style={{ width: "80%" }}>
              Reader's Digest is an American general-interest family magazine
              published ten times a year. Originally based in Chappaqua, New
              York, it is now headquartered in midtown Manhattan. The magazine
              was founded in 1922 by DeWitt Wallace and his wife Lila Bell
              Wallace. It offers a variety of articles on health, travel, and
              human interest stories. Readers appreciate its concise and
              engaging format. Over the years, it has become one of the most
              widely read magazines in the world. Its articles often feature
              practical advice and real-life experiences, making it a beloved
              publication for many families.
            </p>
          </div>
        </div>
      </Container>
    </>
  );
}

export default About;
