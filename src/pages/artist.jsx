import React, {useEffect, useState} from 'react';
import artistArray from '../test_data/test_data.js'; // Путь к файлу test_data.js
import '../styles/artist.css'
import ArtistAllInfo from "../components/artistAllInfo";
import axios from 'axios';
import {useParams} from "react-router-dom";

const Artist = () => {


    const { id } = useParams();

    const fetchData = async () => {
        try {
            const response = await axios.get('../../info.json');
            const temp = response.data;
            const toShow = temp[id];
            console.log(temp[id]);

            return toShow;
        } catch (error) {
            console.error('Error fetching data:', error);
            return null;
        }
    };

    const [dataToShow, setDataToShow] = useState(null);

    useEffect(() => {
        fetchData().then(result => {
            setDataToShow(result);
        });
    }, []);
    console.log(dataToShow);





    //const [artists, setArtists] = useState([artistArray[0]]);
    return (

        <div  style={{ backgroundColor: '#fbfaf2'}}>


            {dataToShow && <ArtistAllInfo artist={dataToShow} />}
            {/*<ArtistAllInfo artist={dataToShow}/>*/}
        </div>
    );
};

export default Artist;