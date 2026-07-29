import LogoIcon from '../../assets/icons/LogoIcon';
import AppLink from '../AppLink/AppLink';

import './Logo.css';

function Logo() {
    return (
        <AppLink
            to='/'
            className='logo'
        >
            <LogoIcon className='logo-icon' />

            <div className='logo-name'>
                ПМП <span className='text-gold'>РЕМ</span>
            </div>
        </AppLink>
    );
}

export default Logo;
