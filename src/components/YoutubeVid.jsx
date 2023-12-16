import React from 'react';

const YouTubeVideo = (props) => {
    return (
        <div style={{height: "80%", width:"70%"}}>
            {/* Ваш скопированный код с YouTube */}
            <iframe
                height="100%"
                width="100%"
                src={props.src}
                title="YouTube video player"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                allowFullScreen>
            </iframe>
        </div>
    );
};

export default YouTubeVideo;
