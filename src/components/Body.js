import React from 'react'

const Body = props => {
    return (
        
    <body>
        
        <section className='area1 '>
            <div className='wrapper'>
                <div className='clearfix'>
                    <div className='area1-item'>
                        <div className='left'>
                            <h3 className='title'>Inspire your inspiration</h3>
                            <span className='subtitle-one'>Simple to use for your app, products showcase and your
                                inspiration</span>
                            <span>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent vitae eros eget tellus
                                tristique
                                bibendum. Donec rutrum sed sem quis venenatis. Proin viverra risus a eros volutpat tempor.
                                In quis
                                arcu
                                et eros porta lobortis sit</span>
                            <div className='stores'>
                                <img src='/images/iconapple.png' alt='logo apple' />
                                <img src='/images/iconandroid.png' alt='logo android' />
                                <img src='/images/iconwindows.png' alt='logo windows' />
                            </div>
                        </div>
                        <div className='right'>
                            <img src='/images/ipadmini.png' alt='ipadmini' />
                        </div>
                    </div>
                </div>
                <ul className='ballnav'>
                    <li className='active'></li>
                    <li></li>
                    <li></li>
                </ul>
            </div>
        </section>
        <section className='area2' id='features'>
            <div className='wrapper'>
                <div className='feadesc'>
                    <h3 className='featitle'>Tinyone features</h3>
                    <span>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent vitae eros eget tellus tristique
                        bibendum. Donec rutrum sed sem quis venenatis.</span>
                </div>
                <div className='options'>
                    <div className='fully'>
                        <div className='img-fully'>
                            <img src='/images/fullyicon.png' alt='icon ipad'/>
                        </div>
                        <div className='content-fully'>
                            <span className='fullytitle'>Fully Responsive</span>
                            <span>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent vitae eros eget tellus
                                tristique bibendum</span>
                        </div>
                    </div>
                    <div className='fully'>
                        <div className='img-fully'>
                            <img src='/images/psdicon.png' alt='icon imagem psd'/>
                        </div>
                        <div className='content-fully'>
                            <span className='fullytitle'>Fully Layered PSD</span>
                            <span>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent vitae eros eget tellus
                                tristique bibendum.</span>
                        </div>
                    </div>
                    <div className='fully'>
                        <div className='img-fully'>
                            <img src='/images/fonticon.png' alt='icon imagem pasta'/>
                        </div>
                        <div className='content-fully'>
                            <span className='fullytitle'>Font Awesome Icons</span>
                            <span>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent vitae eros eget tellus
                                tristique bibendum.</span>
                        </div>
                    </div>
                    <div className='fully'>
                        <div className='img-fully'>
                            <img src='/images/htmlicon.png' alt='icon de tags de programação'/>
                        </div>
                        <div className='content-fully'>
                            <span className='fullytitle'>HTML5 & CSS3</span>
                            <span>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent vitae eros eget tellus
                                tristique bibendum.</span>
                        </div>
                    </div>
                    <div className='fully'>
                        <div className='img-fully'>
                            <img src='/images/emailicon.png' alt='icon de e-mail'/>
                        </div>
                        <div className='content-fully'>
                            <span className='fullytitle'>Email Template</span>
                            <span>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent vitae eros eget tellus
                                tristique bibendum.</span>
                        </div>
                    </div>
                    <div className='fully'>
                        <div className='img-fully'>
                            <img src='/images/downicon.png' alt='icon de download'/>
                        </div>
                        <div className='content-fully'>
                            <span className='fullytitle'>Free to download</span>
                            <span>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent vitae eros eget tellus
                                tristique bibendum.</span>
                        </div>
                    </div>
                </div>
            </div>
        </section>
     </body>

    );
};

export default Body