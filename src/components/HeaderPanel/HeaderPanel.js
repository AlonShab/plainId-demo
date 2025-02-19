import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import logo from '../../assets/images/plainid-logo-white.png';
import {headerPanelHeight} from '../../styles/commonStyles';
import { useTranslation } from 'react-i18next';

const ChangeLanguageButton = styled.button`
    margin: 2px;
    padding: 5px;
    font-size: 16px;
    cursor: pointer;
`;

const HeaderPanelContainer = styled.header`
  display: flex;
  background-color: #4b555f;
  justify-content: space-between;
  top: 0;
  left: 0;
  right: 0;
  position: fixed;
  height: ${headerPanelHeight};
  align-items: center;
  z-index: 1;
`;

const Logo = styled.img`
  width: auto;
  height: 100%;
  padding: 7px;
`;

export default function HeaderPanel() {
    const { i18n } = useTranslation();

    const [currentLang, setCurrentLang] = useState(localStorage.getItem('language') || 'en-US');

    useEffect(() => {
        i18n.changeLanguage(currentLang);
        localStorage.setItem('language', currentLang);
    }, [currentLang, i18n]);

    const toggleLanguage = () => {
        const newLang = currentLang === 'en-US' ? 'es-ES' : 'en-US';
        i18n.changeLanguage(newLang);
        setCurrentLang(newLang);
    };

    return (
        <HeaderPanelContainer>
            <Logo {...{
                src: logo,
                alt: 'Logo'
            }} />

            <ChangeLanguageButton onClick={toggleLanguage} style={{padding: '5px', fontSize: '16px', cursor: 'pointer'}}>
                {currentLang === 'en-US' ? '🇪🇸 Switch to Spanish' : '🇺🇸 Switch to English'}
            </ChangeLanguageButton>
        </HeaderPanelContainer>
    );
}
