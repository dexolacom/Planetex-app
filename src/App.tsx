import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Header from './components/Header/Header';
import PreSalePage from './pages/PreSalePage/PreSalePage';
import { Line } from './theme';
import Footer from './components/Footer/Footer';


function App() {
  return (
    <>
      <Header/>
      <Routes>
        <Route path='/presale' element={<PreSalePage/>}/>
      </Routes>
      <Line/>
      {/*<Footer/>*/}
    </>
  );
}

export default App;
