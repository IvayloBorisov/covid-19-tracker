import React from 'react';

import styles from './Header.module.css';
import imageHeader from '../../assets/covid.png';

const Header = () => {
    return(
        <header className={ styles.container }>
            <img src={ imageHeader } className={ styles.image } alt="covid-19"/>
        </header>
    )
}

export default Header;