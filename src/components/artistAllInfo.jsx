import React, {useState} from 'react';
import {Avatar, Box, Chip, Divider, ImageList, ImageListItem, Stack} from "@mui/material";
import { Timeline, TimelineItem }  from 'vertical-timeline-component-for-react';
import TlItem from "./timelineItem";
import ImageSlider from "./ImageSlider";
import YouTubeVideo from "./YoutubeVid";
import GoogleMapComponent from "./GoogleMap";
import GoogleMap from "./GoogleMap";
import * as PropTypes from "prop-types";


function Sheet(props) {
    return null;
}

Sheet.propTypes = {
    sx: PropTypes.shape({borderRadius: PropTypes.string, height: PropTypes.number}),
    variant: PropTypes.string
};
const ArtistAllInfo = (props) => {
    console.log('props = ',props.artist);
    //const history1 = [["1", 2, 3], ["1", 2, 4]];
    const history1 = JSON.parse(props.artist.history);
    console.log("history = ", history1);
    console.log("ARRAY??? - ",Array.isArray(history1));
    const [artist, setArtists] = useState(props.artist.history);

    const boxWithBorder = {
        marginTop:'4vw',
        border: '0.6vw solid #12868a',
        borderRadius: '5vw',
        width:'100%',
        height:'100%',
        display:'flex',
        flexDirection:'column',
        alignItems:'center',
    };

    return (

        <div>

            <div className={"bigContainer"}>  {/* All infoL */}
                {/* Box с обводкой */}

                <Box style={boxWithBorder}>
                    <div className={"photo_short"}>
                        <Avatar className={"small_photo"} src={`../images/${props.artist.photo}`} alt={props.artist.fio} />
                        <div className={"short_info"}>
                            <div className={"head"}>
                                <h1 className={"thin_text"}>{props.artist.fio}</h1>
                                <h1 className={"thin_text"}>({props.artist.bornDate}-{props.artist.deathDate})</h1>
                            </div>
                            <p className={"short_description"}>{props.artist.shortInfo}</p>
                        </div>
                    </div>
                </Box>



                <div className={"chronology"}> {/*  chronology  */}
                    <Timeline style={{paddingRight:'-200px'}} lineColor={'#ddd'}>
                        {history1.map(artist =>
                            <TlItem artist={artist}/>
                        )}
                    </Timeline>

                </div>
                <Box style={boxWithBorder}>
                    <div style={{display:"flex", justifyContent:"center", flexDirection:"column", alignItems:"center"}} className={"gallery"}> {/* gallery */}
                        <h1 style={{margin:'5px', fontSize:'4.5vw'}}> Галерея </h1>
                        <div>
                            <ImageSlider images={JSON.parse(props.artist.gallery)}/>
                        </div>
                    </div>
                </Box>
                <div className={"youtube_map"}> {/* youtube + map */}
                    <Box style={boxWithBorder}>
                        <h1 style={{margin:'5px', fontSize:'4.5vw'}}> Youtube-видео </h1>
                        <YouTubeVideo src={props.artist.youtube}/>
                    </Box>

                    <Box style={boxWithBorder}>
                        <h1 style={{margin:'5px', fontSize:'4.5vw'}}> Карты </h1>
                        <GoogleMap link="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d11207.174063609385!2d23.90389814009209!3d53.806961208218624!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sru!2sby!4v1702727647039!5m2!1sru!2sby"/>

                    </Box>



                </div>


            </div>

        </div>
    );
};

export default ArtistAllInfo;