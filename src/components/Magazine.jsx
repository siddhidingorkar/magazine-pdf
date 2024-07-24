// Magazine.jsx

import React, { useEffect, useState } from "react";
import Container from "react-bootstrap/Container";
import Card from "react-bootstrap/Card";
import { Link } from "react-router-dom";

function Magazine() {
  const [magazines, setMagazines] = useState([]);

  useEffect(() => {
    // Fetch magazines or load from JSON
    fetch("/pdfs.json") // Adjust URL as per your data source
      .then((response) => response.json())
      .then((data) => setMagazines(data))
      .catch((error) => console.error("Error fetching magazines:", error));
  }, []);

  return (
    <Container style={{ padding: "20px" }}>
      <h1>Magazine</h1>
      <div
        style={{
          display: "flex",
          flexWrap: "wrap",
          gap: "20px",
          justifyContent: "flex-start",
        }}
      >
        {magazines.map((magazine, index) => (
          <Card
            key={index}
            style={{
              width: "calc(20% - 20px)",
              flex: "1 0 calc(20% - 20px)",
              margin: "10px",
            }}
          >
            <Card.Img
              variant="top"
              src={magazine.image}
              alt={`${magazine.name} cover`}
              style={{ height: "500px", objectFit: "cover" }}
            />
            <Card.Body>
              <Card.Title
                style={{ fontFamily: "Arial, sans-serif", fontSize: "1.5rem" }}
              >
                {magazine.name}
              </Card.Title>
              <Card.Link
                as={Link}
                to={`/view/${encodeURIComponent(magazine.path)}`}
                style={{ fontFamily: "Arial, sans-serif", fontSize: "1.2rem" }}
              >
                View PDF
              </Card.Link>
            </Card.Body>
          </Card>
        ))}
      </div>
    </Container>
  );
}

export default Magazine;
