import React from 'react';
import '../styles/BestOfTheDay.css';
import {Button, ThemeProvider} from "@mui/material";

const BestOfTheDay = (props) => {
   console.log(props);
    const { fio, bornDate, deathDate, gallery, history, photo, place, shortInfo, youtube } = props.toShow;
    const photoPath = `../images/${photo}`;

    return (
        <div>
            <div className = 'fullInfo'>
                <h3 className = 'Title'>
                    Деятель дня
                </h3>
                <h3 className = 'Name'>
                    {fio}
                </h3>
                <div className = 'PhotoPart'>
                    <img src={photoPath} alt=":(" className = 'ImageStyle'/>
                    <div className = 'Date'>
                        {bornDate} — {deathDate}
                    </div>
                    <p className={"shortDescription"}>{shortInfo}</p>
                    <div className={"buttonMore"}>
                        <Button variant="contained" color="secondary" className ='Button'>
                            <h1 style={{margin: '0px',fontSize: '2vw'}}>ПОДРОБНЕЕ</h1>
                        </Button>

                    </div>
                </div>



            </div>
        </div>
    );
};

export default BestOfTheDay;