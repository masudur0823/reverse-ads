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


function Router() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/keywordcohort" element={<KeywordCohort />} />
        <Route path="/googlekeyword" element={<GoogleKeyword />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  )
}

export default Router