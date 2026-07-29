import { NavLink } from 'react-router-dom';
import { HashLink } from 'react-router-hash-link';

function AppLink({ to, children, ...props }) {
    const isHashLink = to?.includes('#');

    if (isHashLink) {
        return (
            <HashLink
                smooth
                to={to}
                {...props}
            >
                {children}
            </HashLink>
        );
    }

    return (
        <NavLink
            to={to}
            {...props}
        >
            {children}
        </NavLink>
    );
}

export default AppLink;
