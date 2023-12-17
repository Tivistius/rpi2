import React from 'react';
import '../styles/SearchSection.css';
import Button from '@mui/material/Button';
import Search from './Search';
import { useTranslation} from 'react-i18next';
import i18n from '../i18n';

const LanguageSelector = () => {
    const {i18n} = useTranslation();
}
const SearchSection = () => {
    return (
        <div className= 'SearchSection'>
            <img className= 'Logo'
                src="/images/postav_logo.png"
                alt=":("
            />
            <div className= 'SearchContainer'>
                <div className= 'LanguageChanger'>
                    <Button onClick={() => i18n.changeLanguage('en')} variant="contained" style={{ width: '22%', height: '90%', fontSize: '2.1vw', padding: '0', minWidth: '0', minHeight: '0', borderRadius: '2vw' }}>Eng</Button>
                    <Button onClick={() => i18n.changeLanguage('ru')} variant="contained" style={{ width: '22%', height: '90%', fontSize: '2.1vw', padding: '0', minWidth: '0', minHeight: '0', borderRadius: '2vw'}}>Рус</Button>
                </div>

                <Search>
                </Search>
            </div>
        </div>

    );
};

export default SearchSection;