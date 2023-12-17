import React from 'react';
import { BsFillStarFill } from 'react-icons/bs';
import '../styles/Header.css';
import { Button, ButtonGroup } from '@mui/material';

const Header = () => {
    return (
        <header>
            <nav>

                <ButtonGroup variant="contained" aria-label="outlined primary button group" className="roundedButtonGroup">
                    <Button href={"/musicians/about"} id = 'ButtonStyle'>Главная</Button>
                    <Button href={"/musicians/about#bestOfTheDay"} id = 'ButtonStyle'>Деятель дня</Button>
                    <Button href={"/musicians/artistsList"} id = 'ButtonStyle'>Деятели</Button>
                    <Button href={"/musicians/about#about"} id = 'ButtonStyle'>О нас</Button>
                </ButtonGroup>

            </nav>
        </header>
    );
};

export default Header;