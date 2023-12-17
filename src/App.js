import React from 'react';
import ArtistsList from "./pages/artistsList";
import Artist from "./pages/artist";
import {BrowserRouter, Route} from "react-router-dom";
import FullHeader from "./components/FullHeader";
import Footer from "./components/footer";
import PageAbout from "./pages/PageAbout";
import i18n from './i18n';

function App() {
  return (
    <div className= "App">
        <FullHeader/>
        <Artist/>
        <Footer/>
    </div>

  );
}
export default App;
