/**
 * @copyright Krishan Rajapaksha
 * @license Apache-2.0
 */

import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Header from "./components/Header";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Work from "./pages/Work";
import WorkDetail from "./pages/WorkDetail";

const App = () => {
  return (
    <Router>
      <Header />
      <main className="pt-20">
        <Routes>
          <Route path="/" element={<Work />} />
          <Route path="/work/:slug" element={<WorkDetail />} />
          <Route path="/about" element={<About />} />          
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </main>
    </Router>
  );
};

export default App;
