import './SectionIntro.css';

function SectionIntro({ label, title, description, align = 'left' }) {
    return (
        <div className={`section-intro section-intro--${align}`}>
            {label && <div className='section-intro-label'>{label}</div>}

            <h1 className='section-intro-title'>{title}</h1>

            {description && (
                <p className='section-intro-description'>{description}</p>
            )}
        </div>
    );
}

export default SectionIntro;
