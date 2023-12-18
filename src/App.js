import React, {useEffect} from 'react';
import ArtistsList from "./pages/artistsList";
import Artist from "./pages/artist";
import {BrowserRouter as Router, Navigate, Route, Routes} from "react-router-dom";
import Footer from "./components/footer";
import FullHeader from "./components/FullHeader";
import YandexMap from "./components/GoogleMap";
import {Switch} from "@mui/material";
import About from "./components/About";
import PageAbout from "./pages/PageAbout";
import {I18nextProvider} from "react-i18next";
import i18next from './i18n'

function App() {
    useEffect(() => {
        const savedLanguage = localStorage.getItem('language');
        if (savedLanguage) {
            i18next.changeLanguage(savedLanguage);
        }
    }, []);

  return (
      <I18nextProvider i18n={i18next}>
      <div>
          <FullHeader/>
          <Router>
              <Routes>
                  <Route path={"/musicians/about"} element={<PageAbout/>} />
                  <Route path="/musicians/artist/:id" element={<Artist />} />
                  <Route path="/musicians/artistsList" element={<ArtistsList />} />
                  <Route path="*" element={<Navigate to="/musicians/about" />} />
              </Routes>
          </Router>
          {/*<ArtistsList/>*/}

          <Footer/>
      </div>
      </I18nextProvider>
  );
}
export default App;
