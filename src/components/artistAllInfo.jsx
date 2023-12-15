import React, {useState} from 'react';
import {Avatar, ImageList, ImageListItem} from "@mui/material";
import { Timeline, TimelineItem }  from 'vertical-timeline-component-for-react';
import TlItem from "./timelineItem";
import ImageSlider from "./ImageSlider";
import YouTubeVideo from "./YoutubeVid";
import GoogleMapComponent from "./GoogleMap";


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
                        <ImageSlider images={props.artist.gallery}/>
                    </div>
                </div>
                <div className={"youtube_map"}> {/* youtube + map */}
                    <YouTubeVideo/>


                </div>


            </div>

        </div>
    );
};

export default ArtistAllInfo;