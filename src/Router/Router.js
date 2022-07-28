import React from 'react'
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import Footer from '../components/Footer/Footer';
import Header from '../components/Header/Header';
import Home from '../pages/Home';
import KeywordCohort from '../pages/KeywordCohort';
import GoogleKeyword from '../pages/GoogleKeyword';
import Credibility from '../pages/Credibility';
import News from '../pages/News';
import NewsDetails from '../pages/NewsDetails';
import About from '../pages/About';
import TermsConditions from '../pages/TermsConditions';
import PrivacyPolicy from '../pages/PrivacyPolicy';
import Contact from '../pages/Contact';
import KeywordNetwork from '../pages/KeywordNetwork';
import KeywordDataCloud from '../pages/KeywordDataCloud';


function Router() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/keywordcohort" element={<KeywordCohort />} />
        <Route path="/googlekeyword" element={<GoogleKeyword />} />
        <Route path="/credibility" element={<Credibility />} />
        <Route path="/news" element={<News />} />
        <Route path="/newsdetails" element={<NewsDetails />} />
        <Route path="/about" element={<About />} />
        <Route path="/termsconditions" element={<TermsConditions />} />
        <Route path="/privacypolicy" element={<PrivacyPolicy />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/keywordnetwork" element={<KeywordNetwork />} />
        <Route path="/keyworddatacloud" element={<KeywordDataCloud />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  )
}

export default Router