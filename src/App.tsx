/* eslint-disable import/no-extraneous-dependencies */
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import CONSTANT from './utils/constants/index';
// import Header from './components/shared/header/Header';
import { Home } from './pages/home/Home';
import Header from './components/shared/header/Header';
import Navbar from './components/shared/Navbar';
import Footer from './components/shared/footer/Footer';

function App() {
  console.log('[Env]', CONSTANT.API_URL);

  return (
    <div className="">
      <BrowserRouter>
        <Header />
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
