function LogoIcon() {
    return (
        <svg
            width='48'
            height='48'
            viewBox='0 0 52 52'
            fill='none'
            aria-hidden='true'
        >
            <rect
                x='0.75'
                y='0.75'
                width='50.5'
                height='50.5'
                rx='13.25'
                strokeWidth='1.5'
                className='logo-icon-bg'
            />

            <rect
                x='14'
                y='14'
                width='8'
                height='24'
                rx='3'
                className='logo-icon-bar-amber'
            />

            <rect
                x='30'
                y='14'
                width='8'
                height='24'
                rx='3'
                className='logo-icon-bar-blue'
            />

            <line
                x1='18'
                y1='17'
                x2='34'
                y2='35'
                strokeWidth='2.4'
                strokeLinecap='round'
                className='logo-icon-lever'
            />
        </svg>
    );
}

export default LogoIcon;
