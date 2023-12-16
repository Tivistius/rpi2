import React, { useState } from 'react';
import { Slider, Box, IconButton, Typography, Slide } from '@mui/material';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';

const ImageSlider = ({ images }) => {
    const [currentIndex, setCurrentIndex] = useState(0);
    const [slideDirection, setSlideDirection] = useState('left');
    const [key, setKey] = useState(0);

    const handleSlideChange = (event, newIndex) => {
        setCurrentIndex(newIndex);
    };

    const handleNextSlide = () => {
        setCurrentIndex((prevIndex) => (prevIndex === images.length - 1 ? 0 : prevIndex + 1));
        setSlideDirection('right');
        setKey((prevKey) => prevKey + 1);
    };

    const handlePrevSlide = () => {
        setCurrentIndex((prevIndex) => (prevIndex === 0 ? images.length - 1 : prevIndex - 1));
        setSlideDirection('left');
        setKey((prevKey) => prevKey + 1);
    };

    return (
        <Box>

            <Box display="flex" justifyContent="center" alignItems="center" mt={2}>
                <Slide key={key} direction={slideDirection} in={true} mountOnEnter unmountOnExit>
                    <img
                        src={`../images/${images[currentIndex]}`}
                        alt={images[currentIndex].alt}
                        style={{ maxWidth: '100%', height: '45vw', objectFit: 'contain' }}
                    />
                </Slide>
            </Box>
            <Box display="flex" justifyContent="center" alignItems="center" mt={2}>
                <IconButton onClick={handlePrevSlide}>
                    <ArrowBackIcon style={{margin:'5px', fontSize:"6.5vw"}} />
                </IconButton>
                <Typography style={{fontSize:"4vw"}} variant="h6">{currentIndex + 1}/{images.length}</Typography>
                <IconButton onClick={handleNextSlide}>
                    <ArrowForwardIcon style={{fontSize:"6.5vw"}}/>
                </IconButton>
            </Box>
            {/* Отображение текущего изображения */}

        </Box>
    );
};

export default ImageSlider;
