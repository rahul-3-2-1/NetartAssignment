import React from 'react'
import {SiFacebook} from 'react-icons/si';
import {FaPhoneSquareAlt} from 'react-icons/fa';




function Footer() {
    return (
        <div className="footer">
            <div><FaPhoneSquareAlt className="pad"/><p>Toll free 1800 200 1234</p></div>
            <div><SiFacebook className="pad"/><p>www.facebook.com/cripumps</p></div>
            <div><i className="fas pad fa-globe"></i><p>www.crigroups.com</p></div>
        </div>
    )
}

export default Footer
