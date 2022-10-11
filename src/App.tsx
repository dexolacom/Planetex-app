import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Header from './components/Header/Header';
import PreSalePage from './pages/PreSalePage/PreSalePage';


function App() {
  return (
    <>
      <Header/>
      <Routes>
        <Route path='/presale' element={<PreSalePage/>}/>
      </Routes>
    </>
  );
}

export default App;
