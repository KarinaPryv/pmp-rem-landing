function ContactInfoItem({ icon, title, label, link, text }) {
    const Icon = icon;

    return (
        <div className='contact-info-item'>
            <div className='contact-info-icon'>
                <Icon />
            </div>

            <div className='contact-info-text'>
                <h4>{title}</h4>

                {link ? <a href={link}>{label}</a> : <p>{text}</p>}
            </div>
        </div>
    );
}

export default ContactInfoItem;
