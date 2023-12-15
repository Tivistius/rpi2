import React from 'react';
import { BsFillStarFill } from 'react-icons/bs';
import '../styles/Header.css';
import { Button, ButtonGroup } from '@mui/material';

const Header = () => {
    return (
        <header>
            <nav>

                <ButtonGroup variant="contained" aria-label="outlined primary button group" className="roundedButtonGroup">
                    <Button id = 'ButtonStyle'>Главная</Button>
                    <Button id = 'ButtonStyle'>Деятель дня</Button>
                    <Button id = 'ButtonStyle'>Деятели</Button>
                    <Button id = 'ButtonStyle'>О нас</Button>
                </ButtonGroup>

            </nav>
        </header>
    );
};

export default Header;