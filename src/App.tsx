/* eslint-disable no-console */
/* eslint-disable import/no-extraneous-dependencies */
import { useState, useEffect } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Lottie from 'lottie-react';
import CONSTANT from './utils/constants/index';
import { Home } from './pages/home/Home';
import Header from './components/shared/header/Header';
import Footer from './components/shared/footer/Footer';
import WebDevelopment from './components/domains/development-page/WebDevelopment';
import about from './assests/animation.json';

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
  const [isLoading, setIsLoading] = useState(true);

  // Simulating loading effect with useEffect
  useEffect(() => {
    // Simulate a delay to show loading effect
    const delay = setTimeout(() => {
      setIsLoading(false);
    }, 2000); // Adjust the delay as needed

    // Clear the timeout to avoid memory leaks
    return () => clearTimeout(delay);
  }, []);

  console.log('[Env]', CONSTANT.API_URL);

  return (
    <div className="">
      {isLoading ? (
        <Lottie
          animationData={about}
          style={{
            width: '50%',
            display: 'flex',
            justifyContent: 'center',
          }}
          download="lazy"
          className="mx-[5rem] my-[15rem]  sm:mx-[10rem] sm:my-[10rem] md:mx-[10rem] md:my-[7rem] lg:mx-[15rem] lg:my-[5rem] xl:mx-[20rem] xl:my-[5rem]"
        />
      ) : (
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
      )}
    </div>
  );
}

export default App;
