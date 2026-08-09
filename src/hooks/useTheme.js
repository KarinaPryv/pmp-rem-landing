import { useCallback, useEffect, useState } from 'react';

import { THEME, THEME_STORAGE_KEY } from '../constants/theme';

function getStoredTheme() {
    if (typeof window === 'undefined') {
        return THEME.dark;
    }

    return localStorage.getItem(THEME_STORAGE_KEY) === THEME.light
        ? THEME.light
        : THEME.dark;
}

function applyTheme(theme) {
    document.documentElement.setAttribute('data-theme', theme);
}

export function useTheme() {
    const [theme, setTheme] = useState(getStoredTheme);

    useEffect(() => {
        applyTheme(theme);
        localStorage.setItem(THEME_STORAGE_KEY, theme);
    }, [theme]);

    const toggleTheme = useCallback(() => {
        setTheme((prev) => (prev === THEME.light ? THEME.dark : THEME.light));
    }, []);

    return { theme, toggleTheme };
}
