import React, {useEffect, useState} from 'react';
import ArtistItem from "../components/artistItem";
import artistArray from "../test_data/test_data";
import '../styles/artistList.css'
import axios from "axios";
import Search from "../functions"
import {useParams} from "react-router-dom";
import async from "async";

const ArtistsList = () => {
    const { id } = useParams();

    const fetchData = async () => {
        try {
            const response = await axios.get('../../info.json');
            const temp = response.data;
            console.log('id = ',id);
            if (id === undefined){
                console.log('temp = ',temp);
                return temp;

            }
            let toShow;
            let res=[];
            let j=0;
            for (let i of temp){
                if (i["fio"].toLowerCase().includes(id.toLowerCase()) || i["attribute"].toLowerCase().includes(id.toLowerCase())){
                    res[j]=i;
                    j++;
                }
            };
            toShow = res;
            console.log('res = ',toShow);

            return toShow;
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
            <div className={"bigContainer"}>  {/* All infoL */}
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