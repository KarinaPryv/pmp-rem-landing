import AppLink from '../AppLink/AppLink';

import { navigationItems } from '../../configs/navigationConfig';

import './Navigation.css';

function Navigation() {
    return (
        <nav className='navigation'>
            <ul className='navigation-list'>
                {navigationItems.map((item) => (
                    <li key={item.id}>
                        <AppLink to={item.to}>{item.label}</AppLink>
                    </li>
                ))}
            </ul>
        </nav>
    );
}

export default Navigation;
