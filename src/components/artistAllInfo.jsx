import React from 'react';
import {Avatar} from "@mui/material";

const ArtistAllInfo = (props) => {
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

                </div>
                <div className={"gallery"}> {/* gallery */}

                </div>
                <div className={"youtube_map"}> {/* youtube + map */}

                </div>

            </div>

        </div>
    );
};

export default ArtistAllInfo;