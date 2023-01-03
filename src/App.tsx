/* eslint-disable jsx-quotes */
import React, { useState } from 'react';
import { Route, Routes, Navigate } from 'react-router-dom';
import Header from './components/Header/Header';
import PreSalePage from './pages/PreSalePage/PreSalePage';
import NFTSalePage from './pages/NFTSalePage/NFTSalePage';
import { Line, Content } from './theme';
import Footer from './components/Footer/Footer';
import BurgerMenu from './components/Header/BurgerMenu/BurgerMenu';

function App() {
  const [isBurgerMenu, setIsBurgerMenu] = useState(false);

  return (
    <>
      <Header isBurgerMenu={isBurgerMenu} setIsBurgerMenu={setIsBurgerMenu} />
      {isBurgerMenu && <BurgerMenu />}
      <Routes>
        <Route
          path="/"
          element={
            <Content>
              <Navigate replace to="/main-sale" />
            </Content>
          }
        />
        <Route
          path="/main-sale"
          element={
            <Content>
              <PreSalePage />
            </Content>
          }
        />
        <Route path="/nft-sale" element={<NFTSalePage />} />
      </Routes>
      <Line />
      <Footer />
    </>
  );
}

export default App;
