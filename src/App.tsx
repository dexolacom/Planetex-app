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
      {/* <Content> */}
      <Routes>
        <Route
          path="/"
          element={
            <Content>
              <Navigate replace to="/presale" />
            </Content>
          }
        />
        <Route
          path="/presale"
          element={
            <Content>
              <PreSalePage />
            </Content>
          }
        />
        <Route path="/nft-sale" element={<NFTSalePage />} />
      </Routes>
      {/* </Content> */}
      <Line />
      <Footer />
    </>
  );
}

export default App;
