import { HOME_SECTION_IDS } from '../../constants/sectionIds';

import { contactInfoItems } from '../../configs/contactConfig';
import { workingHours } from '../../configs/workingHoursConfig';

import ArrowIcon from '../../assets/icons/ArrowIcon';
import Button from '../Button/Button';
import Logo from '../Logo/Logo';

import './Footer.css';

function Footer() {
    return (
        <footer className='footer'>
            <div className='container'>
                <div className='footer-columns'>
                    <div>
                        <Logo />

                        <p className='footer-brand-description'>
                            Проєктно-монтажне підприємство. Електромонтажні
                            роботи, проєктування та технічне обслуговування
                            енергетичних систем з 2014 року.
                        </p>

                        <Button
                            to={`/#${HOME_SECTION_IDS.contact}`}
                            icon={<ArrowIcon />}
                            className='footer-brand-cta'
                        >
                            Залишити заявку
                        </Button>
                    </div>

                    <div>
                        <div className='footer-title'>Контакти</div>

                        <div className='footer-contact-list'>
                            {contactInfoItems.map(
                                ({ id, icon: Icon, link, label, text }) => (
                                    <div
                                        key={id}
                                        className='footer-contact-item'
                                    >
                                        <div className='footer-contact-icon'>
                                            <Icon />
                                        </div>

                                        <div className='footer-contact-text'>
                                            {link ? (
                                                <a href={link}>{label}</a>
                                            ) : (
                                                <p>{text}</p>
                                            )}
                                        </div>
                                    </div>
                                )
                            )}
                        </div>
                    </div>

                    <div>
                        <div className='footer-title'>Графік роботи</div>

                        <div className='footer-hours-list'>
                            {workingHours.map(
                                ({ id, day, time, isClosed }) => (
                                    <div
                                        key={id}
                                        className='footer-hours-row'
                                    >
                                        <span className='footer-hours-day'>
                                            {day}
                                        </span>
                                        <span
                                            className={`footer-hours-time${
                                                isClosed ? ' is-closed' : ''
                                            }`}
                                        >
                                            {time}
                                        </span>
                                    </div>
                                )
                            )}
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    );
}

export default Footer;
