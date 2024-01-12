import React from 'react';
import { Link } from 'react-router-dom';

const Main = () => {
    const containerStyle = {
        display: 'flex',
        flexDirection: 'column', // Align children elements vertically
        alignItems: 'center', // Center items horizontally
        marginTop: '50px',
    };

    const menuLinkStyle = {
        color: '#fff', // White text color
        textDecoration: 'none', // Remove underline
    };

    const imageStyle = {
        width: '100%', // 100% of the image container
        height: '100%', // 100% of the image container
        objectFit: 'cover', // Maintain aspect ratio and cover the container
    };


    return (
        <div style={containerStyle}>
            <div className='container'>
            <div className='row'>
                <div className='col-md-6' style={{padding:"5px"}}>
                    <div>
                        <img
                            src='https://www.jetsetter.com/uploads/sites/7/2018/04/N-8dtAdp.jpeg'
                            alt='Menu'
                            style={imageStyle}
                        />
                        <br></br>
                        <br></br>
                        <center>
                        <Link to="/Customer" className="btn btn-primary" style={menuLinkStyle}>
                            Menu
                        </Link>
                        </center>
                    </div>
                </div>
                <div className='col-md-6' style={{padding:"5px"}}>
                    <div>
                        <img
                            src='https://www.posist.com/restaurant-times/wp-content/uploads/2017/01/The-Ultimate-Guide-To-Open-A-Cloud-Kitchen-In-India-In-2023.jpg'
                            alt='Kitchen'
                            style={imageStyle}
                        />
                        <center>
                        <br></br>
                        <Link to="/Chef" className="btn btn-primary" style={menuLinkStyle}>
                        Chef 
                        </Link>
                        </center>
                    </div>
                </div>
            </div>
            </div>
        </div>
    );
}

export default Main;
