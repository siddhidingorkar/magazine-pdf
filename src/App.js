// App.js

import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Container from "react-bootstrap/Container";
import AppNavbar from "./components/AppNavbar"; // Adjusted path for AppNavbar

import About from "./components/About"; // Adjusted path for About
import Magazine from "./components/Magazine"; // Adjusted path for Magazine
import PdfViewer from "./components/PdfViewer"; // Adjusted path for PdfViewer

function App() {
  return (
    <Router>
      <div>
        <AppNavbar />
        <Container style={{ marginTop: "20px" }}>
          <Routes>
            <Route path="/" element={<Magazine />} />
            <Route path="/about" element={<About />} />
            <Route path="/view/:filename" element={<PdfViewer />} />
          </Routes>
        </Container>
      </div>
    </Router>
  );
}

export default App;
