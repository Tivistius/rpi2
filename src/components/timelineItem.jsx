import React from 'react';

import {TimelineItem} from "vertical-timeline-component-for-react";

const TlItem = (props) => {
    return (
        <TimelineItem
            key="002"
            dateText={props.artist[0]}
            dateInnerStyle={{ fontStyle:'italic', fontSize:'2vw', background: '#61b8ff', color: '#000' }}
            bodyContainerStyle={{
                background: '#ddd',
                padding: '20px',
                borderRadius: '8px',
                boxShadow: '0.5rem 0.5rem 2rem 0 rgba(0, 0, 0, 0.2)',
            }}
        >
            <h3 style={{ fontStyle:'italic', fontWeight:'bold', fontSize:'2.7vw', color: '#61b8ff' }}>{props.artist[1]}</h3>
            <p style={{fontStyle:'italic', fontSize:'1.35vw'}}>
                {props.artist[2]}
            </p>
        </TimelineItem>
    );
};

export default TlItem;