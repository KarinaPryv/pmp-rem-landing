import { useState, useEffect } from 'react';

import Button from '../Button/Button';
import HamburgerButton from '../HamburgerButton/HamburgerButton';
import MobileMenu from '../MobileMenu/MobileMenu';
import Navigation from '../Navigation/Navigation';
import Logo from '../Logo/Logo';
import ThemeToggle from '../ThemeToggle/ThemeToggle';

import './Header.css';

function Header() {
    const [isScrolled, setIsScrolled] = useState(false);
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 20);
        };

        handleScroll();

        window.addEventListener('scroll', handleScroll);

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    useEffect(() => {
        document.body.classList.toggle('no-scroll', isMenuOpen);

        return () => {
            document.body.classList.remove('no-scroll');
        };
    }, [isMenuOpen]);

    return (
        <>
            <header className={`header ${isScrolled ? 'header-scrolled' : ''}`}>
                <div className='container header-container'>
                    <Logo />

                    <Navigation />

                    <div className='header-actions'>
                        <ThemeToggle />

                        <Button
                            to='/contact'
                            variant='primary'
                        >
                            Розпочати співпрацю
                        </Button>

                        <HamburgerButton
                            isOpen={isMenuOpen}
                            onClick={() => setIsMenuOpen((prev) => !prev)}
                        />
                    </div>
                </div>
            </header>
            <MobileMenu
                isOpen={isMenuOpen}
                onClose={() => setIsMenuOpen(false)}
            />
        </>
    );
}

export default Header;
