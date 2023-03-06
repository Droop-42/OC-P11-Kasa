/* eslint-disable react/react-in-jsx-scope */
import footer from './Footer.module.css';
import logo from '../../assets/logo_white.svg';

export default function Footer() {
    return (
        <div className={footer.foot}>
             <img
                        src={logo}
                        alt="Logo"
                        height="30px"
                        //width="100px" 
                        />
             <div>© 2020 Kasa. All rights reserved</div> 
        </div>      
    )
}
