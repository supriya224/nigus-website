/* eslint-disable import/no-extraneous-dependencies */
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import CONSTANT from './utils/constants/index';
import { Home } from './pages/home/Home';
import Header from './components/shared/header/Header';
import Footer from './components/shared/footer/Footer';
import WebDevelopment from './components/domains/development-page/WebDevelopment';
import {
  AboutUs,
  AiDevelopment,
  ApplicationDevelopment,
  Contact,
  Industries,
  SoftwareDevelopment,
  Solution,
} from './components/domains';
import SystemDevelopment from './components/domains/development-page/SystemDevelopment';

function App() {
  console.log('[Env]', CONSTANT.API_URL);
  return (
    <div className="">
      <BrowserRouter>
        {/* <Header /> */}
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          {/* headerpage import here */}
          <Route path="/solution" element={<Solution />} />
          <Route path="/about" element={<AboutUs />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/industries" element={<Industries />} />

          {/* all navbar router page import here */}
          <Route path="/" element={<WebDevelopment />} />
          <Route
            path="/application-development"
            element={<ApplicationDevelopment />}
          />
          <Route
            path="/software-development"
            element={<SoftwareDevelopment />}
          />
          <Route path="/al-ml-development" element={<AiDevelopment />} />
          <Route path="/system-development" element={<SystemDevelopment />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
