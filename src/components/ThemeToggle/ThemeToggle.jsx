import { useState } from 'react';

import { useTheme } from '../../hooks/useTheme';
import { THEME } from '../../constants/theme';

import './ThemeToggle.css';

const IGNITE_DURATION = 620;

function ThemeToggle() {
    const { theme, toggleTheme } = useTheme();
    const [isIgniting, setIsIgniting] = useState(false);

    const isDark = theme === THEME.dark;

    const handleClick = () => {
        const goingDark = !isDark;

        toggleTheme();

        if (goingDark) {
            setIsIgniting(true);
            setTimeout(() => setIsIgniting(false), IGNITE_DURATION);
        }
    };

    const classes = [
        'theme-toggle',
        isDark ? 'is-lit' : '',
        isIgniting ? 'is-igniting' : '',
    ]
        .filter(Boolean)
        .join(' ');

    return (
        <button
            type='button'
            className={classes}
            role='switch'
            aria-checked={isDark}
            aria-label={
                isDark
                    ? 'Темна тема увімкнена. Натисніть, щоб увімкнути світлу'
                    : 'Світла тема увімкнена. Натисніть, щоб увімкнути темну'
            }
            onClick={handleClick}
        >
            <svg
                className='bulb-icon'
                viewBox='0 0 48 48'
                aria-hidden='true'
            >
                <path
                    className='bulb-glass'
                    d='M24 7c7.7 0 12.5 5.8 12.5 12.3c0 5.6-3.8 8.4-5.7 11.6c-.9 1.6-1.3 3.2-1.3 5.1H18.5c0-1.9-.4-3.5-1.3-5.1C15.3 27.7 11.5 24.9 11.5 19.3 11.5 12.8 16.3 7 24 7Z'
                />
                <path
                    className='bulb-filament'
                    d='M19 17 21.8 21 24 17 26.2 21 29 17'
                />
                <rect
                    className='bulb-neck'
                    x='18.3'
                    y='33.6'
                    width='11.4'
                    height='3.8'
                    rx='1'
                />
                <rect
                    className='bulb-thread'
                    x='17.4'
                    y='38.2'
                    width='13.2'
                    height='5.2'
                    rx='1.4'
                />
                <rect
                    className='bulb-cap'
                    x='18.7'
                    y='43.8'
                    width='10.6'
                    height='3.4'
                    rx='1.4'
                />
            </svg>
        </button>
    );
}

export default ThemeToggle;
