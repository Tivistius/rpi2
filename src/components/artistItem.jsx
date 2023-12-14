import React from 'react';
import {Avatar, Button, createTheme, Paper, ThemeProvider} from "@mui/material";
import {lime, purple} from "@mui/material/colors";

const ArtistItem = (props) => {
    const theme = createTheme({
        palette: {
            primary: lime,
            secondary: purple,
        },
    });
    return (
        <Paper className={"shortInfoBox"}> {/* photo + short  desc */}
            <div className={"photo_short"}>
                <Avatar className={"small_photo"} src={`../images/${props.artist.photo}`} alt={props.artist.name} />
                <div className={"short_info"}>
                    <div className={"head"}>
                        <h1 className={"thin_text"}>{props.artist.name}</h1>
                        <h1 className={"thin_text"}>({props.artist.lifetime})</h1>
                    </div>
                    <p className={"shortDescription"}>{props.artist.workplace}</p>
                    <div className={"buttonMore"}>
                        <ThemeProvider theme={theme}>
                            <Button variant="contained" color="secondary">
                                <h1 style={{margin: '0px', fontSize: '1.3vw'}}>ПОДРОБНЕЕ</h1>
                            </Button>
                        </ThemeProvider>
                    </div>
                </div>
            </div>
        </Paper>
    );
};

export default ArtistItem;