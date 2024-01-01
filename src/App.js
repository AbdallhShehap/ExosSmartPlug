import React from "react";
import Home from "./pages/Home"
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import OurStory from "./pages/OurStory";
import Aboutus from "./pages/Aboutus";
import FirstProduct from "./pages/FirstProduct";
import SecoundProduct from "./pages/SecoundProduct";
import Faqs from "./pages/Faqs";
import Contactus from "./pages/Contactus";
import PrivacyPolicy from "./pages/PrivacyPolicy";
import TermOfUse from "./pages/TermOfUse";

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/ourstory" element={<OurStory />} />
          <Route path="/aboutus" element={<Aboutus />} />
          <Route path="/firstproduct" element={<FirstProduct />} />
          <Route path="/secoundproduct" element={<SecoundProduct />} />
          <Route path="/faqs" element={<Faqs />} />
          <Route path="/contactus" element={<Contactus />} />
          <Route path="/privacypolicy" element={<PrivacyPolicy />} />
          <Route path="/termOfuse" element={<TermOfUse />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;

