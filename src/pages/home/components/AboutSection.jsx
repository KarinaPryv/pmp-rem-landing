import SectionIntro from '../../../components/SectionIntro/SectionIntro';
import AboutCard from '../../../components/Card/AboutCard';
import AboutChecklistItem from '../../../components/Checklist/AboutChecklistItem';

import { aboutCards, checklistItems } from '../../../configs/aboutConfig';
import { HOME_SECTION_IDS } from '../../../constants/sectionIds';
import AnimatedBlock from '../../../components/AnimatedBlock/AnimatedBlock';

const AboutSection = () => {
    return (
        <section
            className='section about-section'
            id={HOME_SECTION_IDS.about}
        >
            <div className='container'>
                <div className='about-layout'>
                    <div className='about-content'>
                        <AnimatedBlock animation='left'>
                            <SectionIntro
                                label='Чому обирають ПМП «РЕМ»'
                                title={
                                    <>
                                        Досвід. Якість.
                                        <br />
                                        <span className='text-gradient-gold'>
                                            Надійність.
                                        </span>
                                    </>
                                }
                                description='Ми виконуємо електромонтажні роботи будь-якої складності, забезпечуючи професійний підхід, дотримання термінів та відповідність сучасним стандартам безпеки.'
                                align='left'
                            />
                        </AnimatedBlock>

                        <div className='about-checklist'>
                            {checklistItems.map((item, index) => (
                                <AnimatedBlock
                                    key={item.id}
                                    animation='left'
                                    delay={index * 100}
                                >
                                    <AboutChecklistItem {...item} />
                                </AnimatedBlock>
                            ))}
                        </div>
                    </div>

                    <div className='about-cards-column'>
                        <AnimatedBlock animation='right'>
                            <div className='about-subcaption'>
                                <span>Як ми працюємо</span>
                            </div>
                        </AnimatedBlock>

                        <div className='about-grid'>
                            {aboutCards.map((card) => (
                                <AnimatedBlock
                                    animation='right'
                                    key={card.id}
                                >
                                    <AboutCard {...card} />
                                </AnimatedBlock>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default AboutSection;
