import React from 'react';
import ArtistsList from "./pages/artistsList";
import Artist from "./pages/artist";
import {BrowserRouter as Router, Navigate, Route, Routes} from "react-router-dom";
import Footer from "./components/footer";
import FullHeader from "./components/FullHeader";
import YandexMap from "./components/GoogleMap";
import {Switch} from "@mui/material";
import About from "./components/About";
import PageAbout from "./pages/PageAbout";

function App() {
  return (
      <div>

          <FullHeader/>
          <PageAbout/>

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
  );
}
export default App;
