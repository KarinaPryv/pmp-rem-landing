import './Card.css';

function AboutCard({ number, title, description }) {
    return (
        <div className='card about-card'>
            <div className='about-icon text-gradient-gold'>{number}.</div>

            <h4 className='about-title'>{title}</h4>

            <p className='about-description'>{description}</p>
        </div>
    );
}

export default AboutCard;
