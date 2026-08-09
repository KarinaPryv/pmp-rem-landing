import { contactInfoItems } from '../../../configs/contactConfig';
import { HOME_SECTION_IDS } from '../../../constants/sectionIds';

import AnimatedBlock from '../../../components/AnimatedBlock/AnimatedBlock';
import SectionIntro from '../../../components/SectionIntro/SectionIntro';
import ContactInfoItem from './ContactInfoItem';
import ContactForm from './ContactForm';

function ContactSection() {
    return (
        <section
            className='section contact-section'
            id={HOME_SECTION_IDS.contact}
        >
            <div className='container'>
                <div className='contact-layout'>
                    <div className='contact-intro'>
                        <SectionIntro
                            label='Контакти'
                            title={
                                <>
                                    Зв’яжіться з{' '}
                                    <span className='text-gradient-gold'>
                                        ПМП «РЕМ»
                                    </span>
                                </>
                            }
                            description={`Маєте запитання або плануєте реалізацію проєкту? Зв’яжіться з нами — ми допоможемо підібрати оптимальне рішення.`}
                        />

                        <div className='contact-info-list'>
                            {contactInfoItems.map((item) => (
                                <ContactInfoItem
                                    key={item.id}
                                    {...item}
                                />
                            ))}
                        </div>

                        <div className='map-stub-grid'>
                            <iframe
                                src='https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2530.8690892954005!2d26.221844176414844!3d50.62954867162699!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x472f6ca3c10ce50d%3A0x2f5b911303fda818!2z0LLRg9C70LjRhtGPINCh0L7QsdC-0YDQvdCwLCAzNjQg0LIsINCg0ZbQstC90LUsINCg0ZbQstC90LXQvdGB0YzQutCwINC-0LHQu9Cw0YHRgtGMLCAzMzAxNw!5e0!3m2!1suk!2sua!4v1751545874973!5m2!1suk!2sua'
                                width='100%'
                                height='100%'
                                loading='lazy'
                            ></iframe>
                        </div>
                    </div>
                    <ContactForm />
                </div>
            </div>
        </section>
    );
}

export default ContactSection;
