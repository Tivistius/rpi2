import React from 'react';

import {TimelineItem} from "vertical-timeline-component-for-react";

const TlItem = (props) => {
    return (
        <TimelineItem
            key="002"
            dateText={props.artist[0]}
            dateInnerStyle={{ background: '#61b8ff', color: '#000' }}
            bodyContainerStyle={{
                background: '#ddd',
                padding: '20px',
                borderRadius: '8px',
                boxShadow: '0.5rem 0.5rem 2rem 0 rgba(0, 0, 0, 0.2)',
            }}
        >
            <h3 style={{ color: '#61b8ff' }}>{props.artist[1]}</h3>
            <p>
                {props.artist[2]}
            </p>
        </TimelineItem>
    );
};

export default TlItem;