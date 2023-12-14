import React from 'react';
import { BsFillStarFill } from 'react-icons/bs';
import '../styles/Header.css';

const Header = () => {
    return (
        <header>
            <nav>
                <ul>
                    <li>
                        <BsFillStarFill />
                    </li>
                    <li><a href="/">Главная</a></li>
                    <li><a href="/about"> Деятель дня</a></li>
                    <li><a href="/contact"> Деятели</a></li>
                    <li><a href="/">О нас</a></li>
                </ul>
            </nav>
        </header>
    );
};

export default Header;