import React, {useState} from 'react';
import artistArray from '../test_data/test_data.js'; // Путь к файлу test_data.js
import '../styles/artist.css'
import ArtistAllInfo from "../components/artistAllInfo";
import {readFile} from "fs";


const Artist = () => {
    const [artists, setArtists] = useState([data[0]]);
    return (

        <div>
            <ArtistAllInfo artist={artists.pop()}/>
        </div>
    );
};

export default Artist;