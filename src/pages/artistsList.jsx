import React, {useEffect, useState} from 'react';
import ArtistItem from "../components/artistItem";
import artistArray from "../test_data/test_data";
import '../styles/artistList.css'
import axios from "axios";

const ArtistsList = () => {
    const fetchData = async () => {
        try {
            const response = await axios.get('../info.json');
            const temp = response.data;

            return temp;
        } catch (error) {
            console.error('Error fetching data:', error);
            return null;
        }
    };


    const [artists, setArtists] = useState(artistArray);

    useEffect(() => {
        fetchData().then(result => {
            setArtists(result);
        });
    }, []);
    return (
        <div style={{ backgroundColor: '#fbfaf2'}}>
            <div className={"bigContainerr"}>  {/* All infoL */}
                <ul style={{listStyleType: 'none', padding:'0px', margin:'0px'}}>
                    {artists.map((artist) =>
                        <ArtistItem artist={artist} />
                    )}
                </ul>
            </div>
        </div>
    );
};

export default ArtistsList;