import React, {useState} from 'react';
import artistArray from '../test_data/test_data.js'; // Путь к файлу test_data.js
import '../styles/artist.css'
import ArtistAllInfo from "../components/artistAllInfo";
import axios from 'axios';

const Artist = () => {

    const путьКФайлу = '../images/info.json';

    axios.get(путьКФайлу)
        .then(response => {
            const jsonОбъект = response.data;
            console.log(jsonОбъект);
        })
        .catch(ошибка => {
            console.error('Ошибка чтения файла:', ошибка);
        });

    const [artists, setArtists] = useState([artistArray[0]]);
    return (

        <div>
            <ArtistAllInfo artist={artists.pop()}/>
        </div>
    );
};

export default Artist;