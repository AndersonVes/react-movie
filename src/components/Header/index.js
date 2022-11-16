import React, { useContext } from 'react';

import { Link } from 'react-router-dom';

import RMDBLogo from '../../images/react-movie-logo.svg';
import TMDBLogo from '../../images/tmdb_logo.svg';

import { Wrapper, Content, LogoImg, TMDBLogoImg } from './Header.styles';

//Context
import { Context } from '../../context';

const Header = () => {
    const [user] = useContext(Context)
    console.log(user);

    return (
        <Wrapper>
            <Content>
                <Link to='/'>
                    <LogoImg src={RMDBLogo} alt='Rmdb logo' />
                </Link>
                {user ? (
                    <span>Loggedin as {user.username}</span>)
                    : (
                        <Link to='/login'>
                            <span>Login</span>
                        </Link>
                    )
                }
                <TMDBLogoImg src={TMDBLogo} alt='Tmdb logo' />
            </Content>
        </Wrapper>
    );
}

export default Header;