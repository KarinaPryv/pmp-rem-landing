import './HamburgerButton.css';

function HamburgerButton({
    isOpen,
    onClick,
}) {
    return (
        <button
            type='button'
            className={`hamburger-button ${
                isOpen
                    ? 'hamburger-button-open'
                    : ''
            }`}
            aria-label={
                isOpen
                    ? 'Close menu'
                    : 'Open menu'
            }
            aria-expanded={isOpen}
            onClick={onClick}
        >
            <span />
            <span />
            <span />
        </button>
    );
}

export default HamburgerButton;