import React from 'react';
import '../styles/About.css';
import { useTranslation } from 'react-i18next';

const About = () => {
    const { t } = useTranslation();
    return (
        <div id="about" className="about-container">
            <div className="about-content">
                <h2>{t('aboutUs')}</h2>
                <p>
                    Добро пожаловать в наш виртуальный музыкальный архив! Мы - команда энтузиастов, преданная любви к классической музыке. Здесь вы найдете истории о великих композиторах 18-19 веков.

                    Присоединяйтесь к нашему музыкальному путешествию, где каждая нота – шедевр, а каждый композитор – вечный гений. Добро пожаловать в мир, где звуки переносят вас в волнующее прошлое и вдохновляют на будущее.
                </p>
            </div>
        </div>
    );
};

export default About;
