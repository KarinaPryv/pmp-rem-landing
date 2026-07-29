import './Checklist.css';

function AboutChecklistItem({ title, description }) {
    return (
        <div className='about-checklist-item'>
            <div className='about-check'>✓</div>

            <div className='about-checklist-body'>
                <h4>{title}</h4>

                <p>{description}</p>
            </div>
        </div>
    );
}

export default AboutChecklistItem;
