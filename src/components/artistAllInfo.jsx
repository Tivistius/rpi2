import React, {useState} from 'react';
import {Avatar, ImageList, ImageListItem} from "@mui/material";
import { Timeline, TimelineItem }  from 'vertical-timeline-component-for-react';
import artistArray from "../test_data/test_data";
import ArtistItem from "./artistItem";
import TlItem from "./timelineItem";
import Gallery from "./gallery";


const ArtistAllInfo = (props) => {
    const [artist, setArtists] = useState(props.artist.chronology);
    return (

        <div>

            <div className={"bigContainer"}>  {/* All infoL */}

                <div className={"photo_short"}>
                    <Avatar className={"small_photo"} src={`../images/${props.artist.photo}`} alt={props.artist.name} />
                    <div className={"short_info"}>
                        <div className={"head"}>
                            <h1 className={"thin_text"}>{props.artist.name}</h1>
                            <h1 className={"thin_text"}>({props.artist.lifetime})</h1>
                        </div>
                        <p className={"short_description"}>{props.artist.description}</p>
                    </div>
                </div>


                <div className={"chronology"}> {/*  chronology  */}

                    <Timeline lineColor={'#ddd'}>
                        {artist.map(artist =>
                            <TlItem artist={artist}/>
                        )}
                    </Timeline>
                </div>
                <div style={{display:"flex", justifyContent:"center", flexDirection:"column", alignItems:"center"}} className={"gallery"}> {/* gallery */}
                    <h1> GALLERY </h1>
                    <div>
                        <Gallery artists={props.artist.gallery}/>
                    </div>
                </div>
                <div className={"youtube_map"}> {/* youtube + map */}

                </div>

            </div>

        </div>
    );
};

export default ArtistAllInfo;