import { services } from '../../../configs/servicesConfig';
import { HOME_SECTION_IDS } from '../../../constants/sectionIds';

import SectionIntro from '../../../components/SectionIntro/SectionIntro';
import AnimatedBlock from '../../../components/AnimatedBlock/AnimatedBlock';
import ServiceCard from '../../../components/Card/ServiceCard';

function ServicesSection() {
    return (
        <section
            className='section services-section'
            id={HOME_SECTION_IDS.services}
        >
            <div className='container'>
                <AnimatedBlock>
                    <SectionIntro
                        label='НАШІ ПОСЛУГИ'
                        title={
                            <>
                                Комплексні{' '}
                                <span className='text-gradient-blue'>
                                    інженерні рішення
                                </span>
                            </>
                        }
                        description='Пропонуємо повний спектр електромонтажних робіт — від проєктування та монтажу до технічного обслуговування електрообладнання.'
                        align='center'
                    />
                </AnimatedBlock>

                <div className='cards-grid'>
                    {services.map((service, index) => (
                        <AnimatedBlock
                            delay={index * 100}
                            key={service.id}
                        >
                            <ServiceCard {...service} />
                        </AnimatedBlock>
                    ))}
                </div>
                {/* <ServicesCarousel /> */}
            </div>
        </section>
    );
}

export default ServicesSection;
