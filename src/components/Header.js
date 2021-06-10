import React from 'react'

const Header = props => {
    return (

        <header className='barra clearfix'>
            <div className='wrapper'>
                <span className='barralogo'>
                    <img src='/images/fingerprint.png' alt='logotipo digital' />
                    <span><a href='index.html'>tinyone</a></span>
                </span>
                <ul className='barramenu'>
                    <li><a href='#features'>Features</a></li>
                    <li><a href='#support'>Support</a></li>
                    <li><a href='#blog'>Blog</a></li>
                </ul>
            </div>
        </header>

    );

};

export default Header