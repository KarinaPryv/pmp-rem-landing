import AnimatedBlock from '../../../components/AnimatedBlock/AnimatedBlock';
import Button from '../../../components/Button/Button';
import ArrowIcon from '../../../assets/icons/ArrowIcon';
import OrbitIcon from '../../../assets/icons/OrbitIcon';
import { HOME_SECTION_IDS } from '../../../constants/sectionIds';

function HeroSection() {
    return (
        <section
            className='section hero-section'
            id={HOME_SECTION_IDS.main}
        >
            <div className='hero-grid'></div>
            <div className='orb orb-a'></div>
            <div className='orb orb-b'></div>
            <div className='orb orb-c'></div>

            <div className='hero-deco'>
                <OrbitIcon />
            </div>

            <div className='container'>
                <div className='hero-content'>
                    <AnimatedBlock>
                        <div className='hero-badge'>
                            <span className='hero-badge-dot' />
                            ПРОЄКТНО-МОНТАЖНЕ ПІДПРИЄМСТВО
                        </div>

                        <h1 className='hero-title'>
                            <span>
                                Комплексні рішення у сфері{' '}
                                <span className='text-gradient-gold'>
                                    електромонтажу
                                </span>
                            </span>
                        </h1>

                        <p className='hero-description'>
                            Виконуємо{' '}
                            <strong>
                                електромонтажні роботи, монтаж електрообладнання
                            </strong>{' '}
                            та{' '}
                            <strong>
                                технічне обслуговування енергетичних систем
                            </strong>{' '}
                            для промислових, комерційних і житлових об'єктів.
                        </p>

                        <div className='hero-actions'>
                            <Button
                                to={`/#${HOME_SECTION_IDS.contact}`}
                                variant='primary'
                                icon={<ArrowIcon />}
                            >
                                Розпочати співпрацю
                            </Button>

                            <Button
                                to={`/#${HOME_SECTION_IDS.about}`}
                                variant='outline'
                            >
                                Про компанію
                            </Button>
                        </div>
                    </AnimatedBlock>
                </div>
            </div>
        </section>
    );
}

export default HeroSection;
