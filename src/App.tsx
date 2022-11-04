// @ts-nocheck
/* eslint-disable jsx-quotes */
/* eslint-disable max-lines-per-function */
import React, { useEffect, useState, Suspense, lazy } from 'react';
import { useWeb3React } from '@web3-react/core';
import { Route, Routes, Navigate, useResolvedPath } from 'react-router-dom';
import Header from './components/Header/Header';
import { Line, Content } from './theme';
import Footer from './components/Footer/Footer';
import BurgerMenu from './components/Header/BurgerMenu/BurgerMenu';
import SaleNFTContext from './components/SaleSection/SaleNFTContext';
import { getPlanetexTokenContract } from './utils/contracts';

const PreSalePage = lazy(() => import('./pages/PreSalePage/PreSalePage'));
const NFTSalePage = lazy(() => import('./pages/NFTSalePage/NFTSalePage'));
const MyNFTContent = lazy(
  () => import('./components/SaleSection/MyNFTContent/MyNFTContent'),
);

function App() {
  const [isBurgerMenu, setIsBurgerMenu] = useState(false);
  const [collection, setCollection] = useState([]);
  const [tokens, setTokens] = useState(null);
  const [ids_, setIds_] = useState(null);

  const { chainId, account } = useWeb3React();

  const NFTContract = chainId && getPlanetexTokenContract(chainId);

  const { pathname } = useResolvedPath();

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
            <Route
              path="/presale"
              element={
                <Suspense>
                  <PreSalePage />
                </Suspense>
              }
            />
            <Route
              path="/nft-sale"
              element={
                <Suspense>
                  <NFTSalePage />
                </Suspense>
              }
            />
          </Routes>
        </Content>
        {ids_?.length > 0 && pathname === '/nft-sale' && (
          <Suspense>
            <MyNFTContent />
          </Suspense>
        )}
      </SaleNFTContext.Provider>
      <Line />
      <Footer />
    </>
  );
}

export default App;
