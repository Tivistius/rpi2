import React from 'react';
import '../styles/SearchSection.css';
import Button from '@mui/material/Button';
import Search from './Search';

const SearchSection = () => {
    return (
        <div className= 'SearchSection'>
            <img className= 'Logo'
                src="/images/Logo2.svg.png"
                alt=":("
            />
            <div className= 'SearchContainer'>
                <div className= 'LanguageChanger'>
                    <Button variant="contained" style={{ width: '22%', height: '70%', fontSize: '2.5vh', padding: '0', minWidth: '0', minHeight: '0', borderRadius: '2vw' }}>Eng</Button>
                    <Button variant="contained" style={{ width: '22%', height: '70%', fontSize: '2.5vh', padding: '0', minWidth: '0', minHeight: '0', borderRadius: '2vw'}}>Рус</Button>
                </div>

                <Search>
                </Search>
            </div>
        </div>

    );
};

export default SearchSection;