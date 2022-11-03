// @ts-nocheck
/* eslint-disable jsx-quotes */
/* eslint-disable max-lines-per-function */
import React, { useEffect, useState } from 'react';
import { useWeb3React } from '@web3-react/core';
import { Route, Routes, Navigate } from 'react-router-dom';
import Header from './components/Header/Header';
import PreSalePage from './pages/PreSalePage/PreSalePage';
import NFTSalePage from './pages/NFTSalePage/NFTSalePage';
import { Line, Content } from './theme';
import Footer from './components/Footer/Footer';
import BurgerMenu from './components/Header/BurgerMenu/BurgerMenu';
import MyNFTContent from './components/SaleSection/MyNFTContent/MyNFTContent';
import SaleNFTContext from './components/SaleSection/SaleNFTContext';
import { getPlanetexTokenContract } from './utils/contracts';

function App() {
  const [isBurgerMenu, setIsBurgerMenu] = useState(false);
  const [collection, setCollection] = useState([]);
  const [tokens, setTokens] = useState(null);
  const [ids_, setIds_] = useState(null);

  const { chainId, account } = useWeb3React();

  const NFTContract = chainId && getPlanetexTokenContract(chainId);

  useEffect(() => {
    account === undefined && setIds_(null);
    account !== undefined && checkUserTokens();
  }, [account]);

  const checkUserTokens = async () => {
    ids_ === null &&
      setIds_(await NFTContract.methods.userTokens(account).call());
  };

  return (
    <>
      <Header isBurgerMenu={isBurgerMenu} setIsBurgerMenu={setIsBurgerMenu} />
      {isBurgerMenu && <BurgerMenu />}
      <SaleNFTContext.Provider
        value={{
          ids_,
          collection,
          tokens,
          setIds_,
          setCollection,
          setTokens,
        }}
      >
        <Content>
          <Routes>
            <Route path="/" element={<Navigate replace to="/presale" />} />
            <Route path="/presale" element={<PreSalePage />} />
            <Route path="/nft-sale" element={<NFTSalePage />} />
          </Routes>
        </Content>
        {window.location.pathname === '/nft-sale' && <MyNFTContent />}
      </SaleNFTContext.Provider>
      <Line />
      <Footer />
    </>
  );
}

export default App;
