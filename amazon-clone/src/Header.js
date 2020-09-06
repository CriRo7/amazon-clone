import React, {Component} from 'react';
import './Header.css';
import {Link} from "react-router-dom";
import SearchIcon from '@material-ui/icons/Search'
import ShoppingBasketIcon from '@material-ui/icons/ShoppingBasket'

class Header extends Component {
    render() {
        return (
            <nav className='header'>
                {/*logo*/}
                <Link to='/'>
                    <img className='header__logo' src="http://pngimg.com/uploads/amazon/amazon_PNG11.png" alt=""/>
                </Link>
                {/*search bar*/}
                <div className="header__search">
                    <input type="text" className="header__searchInput"/>
                    <SearchIcon className='header__searchIcon'/>
                </div>
                {/*links*/}
                <div className="header__nav">
                    {/*1st link*/}
                    <Link to="/login" className='header__link'>
                        <div className="header__option">
                            <span className='header__optionLine1'>Hello Alex</span>
                            <span className='header__optionLine2'>Sign in</span>
                        </div>
                    </Link>
                    {/*2st link*/}
                    <Link to="/" className='header__link'>
                        <div className="header__option">
                            <span className='header__optionLine1'>Returns</span>
                            <span className='header__optionLine2'>& Orders</span>
                        </div>
                    </Link>
                    {/*3st link*/}
                    <Link to="/" className='header__link'>
                        <div className="header__option">
                            <span className='header__optionLine1'>Your</span>
                            <span className='header__optionLine2'>Prime</span>
                        </div>
                    </Link>
                    {/*basket*/}
                    <Link to="/checkout">
                        <div className="header__optionBasket">
                            {/*Basket icon*/}
                            <ShoppingBasketIcon/>
                            {/*Count of items in the basket*/}
                            <span>0</span>
                        </div>
                    </Link>
                </div>
            </nav>
        );
    }
}

export default Header;