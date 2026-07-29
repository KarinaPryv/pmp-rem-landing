import AppLink from '../AppLink/AppLink';

import Button from '../Button/Button';

import { navigationItems } from '../../configs/navigationConfig';

import './MobileMenu.css';

function MobileMenu({ isOpen, onClose }) {
    if (!isOpen) {
        return null;
    }

    return (
        <div className={`mobile-menu ${isOpen ? 'mobile-menu-open' : ''}`}>
            {navigationItems.map((item) => (
                <AppLink
                    key={item.id}
                    to={item.to}
                    className='mobile-menu-link'
                    onClick={onClose}
                >
                    {item.label}
                </AppLink>
            ))}

            <Button
                to='/contact'
                className='mobile-menu-button'
                onClick={onClose}
            >
                Start Cooperation
            </Button>
        </div>
    );
}

export default MobileMenu;
