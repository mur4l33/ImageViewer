// src/App.js
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import ImageGallery from './ImageGallery';
import Home from './Home';
import Onehundread from './img/Onehundread';
import OneHundreadOne from './img/Onehundreadone';
import Onehundreadone from './img/Onehundreadone';
import Twoaeight from './img/Twoaeight';
import Twob from './img/Twob';
import Twobmisc from './img/Twobmisc';
import Twoc from './img/Twoc';
import Twod from './img/Twod';
import Twoe from './img/Twoe';



const App = () => {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/OneHundread" element={<Onehundread />} />
          <Route path="/OneHundreadOne" element={<Onehundreadone />} />
          <Route to='/twoASeven'element={<Twoaeight/>}/>	
        <Route to='/twoAEight'element={<Twoaeight/>}/>
        <Route to='/twoB'element={<Twob/>}/>
        <Route to='/twoBMISC'element={<Twobmisc/>}/>
        <Route to='/twoC'element={<Twoc/>}/>
        <Route to='/twoD'element={<Twod/>}/>
        <Route to='/twoE'element={<Twoe/>}/>

        </Routes>
      </div>
    </Router>
  );
};

export default App;
