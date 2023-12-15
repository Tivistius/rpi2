import React, {useState} from 'react';
import ArtistItem from "../components/artistItem";
import artistArray from "../test_data/test_data";
import '../styles/artistList.css'

const ArtistsList = () => {
    const [artists, setArtists] = useState(artistArray);
    return (
        <div>
            <header>

            </header>
            <div className={"bigContainer"}>  {/* All infoL */}
                <ul style={{listStyleType: 'none', padding:'0px', margin:'0px'}}>
                    {artists.map(artist =>
                        <ArtistItem artist={artist}/>
                    )}
                </ul>
            </div>
            <footer>

            </footer>
        </div>
    );
};

export default ArtistsList;