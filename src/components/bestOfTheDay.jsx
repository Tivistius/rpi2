import React from 'react';
import '../styles/BestOfTheDay.css';

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
                <div className = 'PhotoPart'>
                    <img src={photoPath} alt=":(" className = 'ImageStyle'/>
                    <div className = 'Date'>
                        {bornDate} - {deathDate}
                    </div>
                </div>

            </div>
        </div>
    );
};

export default BestOfTheDay;