import { HOME_SECTION_IDS } from '../../../constants/sectionIds';

import ArrowIcon from '../../../assets/icons/ArrowIcon';
import Button from '../../../components/Button/Button';
import SectionIntro from '../../../components/SectionIntro/SectionIntro';

function CooperationSection() {
    return (
        <section className='section cooperation-section'>
            <div className='container'>
                <div className='cooperation-wrapper'>
                    <SectionIntro
                        label='Готові до співпраці'
                        title={
                            <>
                                Комплексні рішення для{' '}
                                <span className='text-gradient-gold'>
                                    вашого проєкту
                                </span>
                            </>
                        }
                        description="Зв'яжіться з нами, щоб отримати професійну консультацію та індивідуальне рішення для вашого об'єкта."
                        align='center'
                    />

                    <div className='cooperation-buttons'>
                        <Button
                            to={`/#${HOME_SECTION_IDS.contact}`}
                            icon={<ArrowIcon />}
                        >
                            Залишити заявку
                        </Button>

                        <Button
                            to={`/#${HOME_SECTION_IDS.contact}`}
                            variant='outline'
                        >
                            Зв'язатися з нами
                        </Button>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default CooperationSection;
