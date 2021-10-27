import React from "react";
import HeaderCardButton from "./HeaderCardButton";
import mealsImage from '../../assets/meals.jpg';
import classes from './Header.module.css';

const Header = props => {
    return <React.Fragment>
        <header className={classes.header}>
            <h1>Foodies</h1>
            <HeaderCardButton onClick={props.onShowCart}/>
        </header>
        <div className={classes['main-image']}>
            <img src={mealsImage} alt="A table full of delicious food!" />
        </div>
    </React.Fragment>
};

export default Header;