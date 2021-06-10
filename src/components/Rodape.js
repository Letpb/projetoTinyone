import React from 'react'

const Footer = props => {
    return (
    <div>
        <section className='area3' id='support'>
            <div className='wrapper'>
                <div className='supdesc'>
                    <h3 className='suptitle'>Keep in touch with us</h3>
                    <span className='suptext'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent vitae eros eget
                        tellus tristique
                        bibendum. Donec rutrum sed sem quis venenatris.</span>
                </div>
                <div className='busca'>
                    <input type='text' placeholder='Enter your email to update' />
                    <button>submit</button>
                </div>
                <div className='icon'>
                    <ul className='social'>
                        <li><a href='Facebook' className='social-item facebook'></a></li>
                        <li><a href='Twitter' className='social-item twitter'></a></li>
                        <li><a href='Google' className='social-item google'></a></li>
                        <li><a href='Pinterest' className='social-item pinterest'></a></li>
                    </ul>
                </div>
                    <footer className='footer'>
                    <div className='footer-first'>
                        <span className='address'><a href='https://goo.gl/maps/gd6VpXjsGJ15pisY7' target='_blank'>HALOVIETNAM
                                LTD<br/>66,
                                Dang Van ngu, Dong Da Hanoi, Vietnam</a><br/>
                            <a href='mailto:contact@halovietnam.com'>contact@halovietnam.com</a> <a
                                href='tel:84435149182'>+844
                                35149182</a>
                        </span>
                    </div>
                    <div className='footer-second'>
                        <ul className='second'>
                            <li><a href='Examples'>Examples</a></li>
                            <li><a href='Shop'>Shop</a></li>
                            <li><a href='License'>License</a></li>
                        </ul>
                        <ul className='second'>
                            <li><a href='Contact'>Contact</a></li>
                            <li><a href='About'>About</a></li>
                            <li><a href='Privacy'>Privacy</a></li>
                            <li><a href='Terms'>Terms</a></li>
                        </ul>
                        <ul className='second'>
                            <li><a href='Download'>Download</a></li>
                            <li><a href='Support'>Support</a></li>
                            <li><a href='Documents'>Documents</a></li>
                        </ul>
                        <ul className='second'>
                            <li><a href='Media'>Media</a></li>
                            <li><a href='Blog'>Blog</a></li>
                            <li><a href='Forums'>Forums</a></li>
                        </ul>
                    </div>
                    </footer>

            </div>
        </section>
            <a id="btn" href="#" className="scroll">^</a>
            
    </div>

    );
};

export default Footer