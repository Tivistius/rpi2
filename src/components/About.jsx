import React from 'react';
import '../styles/About.css';
import { useTranslation } from 'react-i18next';

const About = () => {
    const { t } = useTranslation();
    return (
        <div className="about-container">
            <div className="about-content">
                <h2>{t('aboutUs')}</h2>
                <p>
                    Данный портал посвящен известным исполнителям. Бла бла бла Бла бла блаБла бла блаБла бла блаБла бла
                    блаБла бла блаБла бла блаБла бла блаБла бла бла Бла бла блаБла бла блаБла бла бла
                </p>
            </div>
        </div>
    );
};

export default About;
