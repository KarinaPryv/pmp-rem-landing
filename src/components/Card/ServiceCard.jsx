import './Card.css';

function ServiceCard({ icon, title, description, listItems = [] }) {
    return (
        <div className='card service-card'>
            {/* <div className='circle-orbit'>
                <div className='bg-circle'></div>
            </div> */}

            <div className='service-icon'>{icon}</div>

            <h3>{title}</h3>

            <p className='service-description'>{description}</p>
{/* 
            <ul className='details'>
                {listItems.map((item, index) => (
                    <li key={index}>{item}</li>
                ))}
            </ul> */}
        </div>
    );
}

export default ServiceCard;
