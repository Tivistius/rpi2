import React from 'react';

const YouTubeVideo = (props) => {
    return (
        <div>
            {/* Ваш скопированный код с YouTube */}
            <iframe
                width="560"
                height="315"
                src="https://www.youtube.com/embed/7RWERLR2znU?si=v83g-4K2bX5hQ5nm"
                title="YouTube video player"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                allowFullScreen>
            </iframe>
        </div>
    );
};

export default YouTubeVideo;
