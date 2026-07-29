import AppLink from '../AppLink/AppLink';

import './Button.css';

function Button({
    children,
    variant = 'primary',
    icon,
    to,
    className = '',
    ...props
}) {
    const classes = ['button', `button-${variant}`, className]
        .filter(Boolean)
        .join(' ');

    const content = (
        <>
            <span>{children}</span>

            {icon && <span className='button-icon'>{icon}</span>}
        </>
    );

    if (to) {
        return (
            <AppLink
                to={to}
                className={classes}
                {...props}
            >
                {content}
            </AppLink>
        );
    }

    return (
        <button
            className={classes}
            {...props}
        >
            {content}
        </button>
    );
}

export default Button;
