import AppLink from '../AppLink/AppLink';

import Logo from '../Logo/Logo';

import './Footer.css';

function Footer({
    description = '',
    socials = [],
    columns = [],
    legalLinks = [],
}) {
    return (
        <footer className='footer'>
            <div className='container footer-container'>
                <div className='footer-columns'>
                    <div>
                        <Logo />
                    </div>
                </div>
            </div>
        </footer>
    );
}

export default Footer;
