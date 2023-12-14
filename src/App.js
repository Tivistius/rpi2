import React from 'react';
import ArtistsList from "./pages/artistsList";
import Artist from "./pages/artist";
import {BrowserRouter, Route} from "react-router-dom";

function App() {
  return (
      <div>
          <ArtistsList/>
          <Artist/>
      </div>
  );
}
export default App;
