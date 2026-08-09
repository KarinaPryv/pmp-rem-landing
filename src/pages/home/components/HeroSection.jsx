import { useEffect, useRef } from 'react';

import AnimatedBlock from '../../../components/AnimatedBlock/AnimatedBlock';
import Button from '../../../components/Button/Button';
import ArrowIcon from '../../../assets/icons/ArrowIcon';
import { HOME_SECTION_IDS } from '../../../constants/sectionIds';

const SWEEP_START_DELAY = 400;

function HeroSection() {
    const sectionRef = useRef(null);
    const sweepAnimateRef = useRef(null);

    useEffect(() => {
        const element = sectionRef.current;

        if (!element) {
            return;
        }

        let timeoutId;

        const observer = new IntersectionObserver(
            ([entry]) => {
                if (!entry.isIntersecting) {
                    return;
                }

                timeoutId = setTimeout(() => {
                    sweepAnimateRef.current?.beginElement();
                }, SWEEP_START_DELAY);

                observer.unobserve(element);
            },
            {
                threshold: 0.15,
            }
        );

        observer.observe(element);

        return () => {
            observer.disconnect();
            clearTimeout(timeoutId);
        };
    }, []);

    return (
        <section
            className='section hero-section'
            id={HOME_SECTION_IDS.main}
            ref={sectionRef}
        >
            <div className='hero-grid'></div>

            <svg
                className='circuit-layer'
                viewBox='0 0 1400 760'
                preserveAspectRatio='xMidYMid slice'
                aria-hidden='true'
            >
                <defs>
                    <radialGradient
                        id='heroGlow'
                        cx='1280'
                        cy='150'
                        r='380'
                        gradientUnits='userSpaceOnUse'
                    >
                        <stop
                            offset='0%'
                            stopColor='var(--blue)'
                            stopOpacity='0.16'
                        />
                        <stop
                            offset='55%'
                            stopColor='var(--blue)'
                            stopOpacity='0.05'
                        />
                        <stop
                            offset='100%'
                            stopColor='var(--blue)'
                            stopOpacity='0'
                        />
                    </radialGradient>

                    <radialGradient
                        id='heroSweep'
                        cx='1280'
                        cy='150'
                        r='0'
                        gradientUnits='userSpaceOnUse'
                    >
                        <stop
                            offset='0%'
                            stopColor='var(--blue)'
                            stopOpacity='0'
                        />
                        <stop
                            offset='72%'
                            stopColor='var(--blue)'
                            stopOpacity='0'
                        />
                        <stop
                            offset='84%'
                            stopColor='var(--gold)'
                            stopOpacity='0.5'
                        />
                        <stop
                            offset='94%'
                            stopColor='var(--blue)'
                            stopOpacity='0.45'
                        />
                        <stop
                            offset='100%'
                            stopColor='var(--blue)'
                            stopOpacity='0'
                        />
                        <animate
                            ref={sweepAnimateRef}
                            attributeName='r'
                            from='0'
                            to='1750'
                            dur='3.2s'
                            begin='indefinite'
                            fill='remove'
                            calcMode='spline'
                            keySplines='0.16 1 0.3 1'
                            keyTimes='0;1'
                        />
                    </radialGradient>
                </defs>

                <circle
                    cx='1280'
                    cy='150'
                    r='380'
                    fill='url(#heroGlow)'
                />

                <g
                    stroke='var(--hero-circuit-trace)'
                    strokeWidth='1.3'
                    fill='none'
                    strokeLinecap='square'
                >
                    <path d='M1400 40 H1220 V140 H1040 V90 H900' />
                    <path d='M1400 140 H1280 V240 H1100' />
                    <path d='M1180 0 V80 H1000 V220' />
                    <path d='M900 0 V60 H760 V180 H560' />
                    <path d='M1400 260 H1240 V340 H1000 V420 H760' />
                    <path d='M0 120 H260 V220 H520 V150 H820 V260' />
                    <path d='M0 340 H180 V400 H460 V320 H700' />
                    <path d='M0 560 H320 V480 H600 V620 H900 V540 H1120' />
                    <path d='M1400 460 H1180 V560 H960 V500' />
                    <path d='M1400 600 H1240 V520 H1040 V660' />
                    <path d='M1400 700 H1080 V680 H860' />
                    <path d='M0 700 H240 V640 H420' />
                    <path d='M120 0 V90 H340 V260' />
                    <path d='M560 760 V640 H340 V700' />
                    <path d='M780 760 V660 H980' />
                    <path d='M1180 760 V680' />
                </g>

                <g fill='var(--hero-circuit-via)'>
                    <circle
                        cx='1220'
                        cy='40'
                        r='3'
                    />
                    <circle
                        cx='1220'
                        cy='140'
                        r='3'
                    />
                    <circle
                        cx='1040'
                        cy='140'
                        r='3'
                    />
                    <circle
                        cx='1040'
                        cy='90'
                        r='3'
                    />
                    <circle
                        cx='1280'
                        cy='140'
                        r='3'
                    />
                    <circle
                        cx='1280'
                        cy='240'
                        r='3'
                    />
                    <circle
                        cx='1180'
                        cy='80'
                        r='3'
                    />
                    <circle
                        cx='1000'
                        cy='80'
                        r='3'
                    />
                    <circle
                        cx='900'
                        cy='60'
                        r='3'
                    />
                    <circle
                        cx='760'
                        cy='60'
                        r='3'
                    />
                    <circle
                        cx='760'
                        cy='180'
                        r='3'
                    />
                    <circle
                        cx='1240'
                        cy='260'
                        r='3'
                    />
                    <circle
                        cx='1240'
                        cy='340'
                        r='3'
                    />
                    <circle
                        cx='1000'
                        cy='340'
                        r='3'
                    />
                    <circle
                        cx='1000'
                        cy='420'
                        r='3'
                    />
                    <circle
                        cx='260'
                        cy='120'
                        r='3'
                    />
                    <circle
                        cx='520'
                        cy='220'
                        r='3'
                    />
                    <circle
                        cx='520'
                        cy='150'
                        r='3'
                    />
                    <circle
                        cx='820'
                        cy='150'
                        r='3'
                    />
                    <circle
                        cx='180'
                        cy='340'
                        r='3'
                    />
                    <circle
                        cx='460'
                        cy='400'
                        r='3'
                    />
                    <circle
                        cx='460'
                        cy='320'
                        r='3'
                    />
                    <circle
                        cx='320'
                        cy='560'
                        r='3'
                    />
                    <circle
                        cx='600'
                        cy='480'
                        r='3'
                    />
                    <circle
                        cx='600'
                        cy='620'
                        r='3'
                    />
                    <circle
                        cx='900'
                        cy='620'
                        r='3'
                    />
                    <circle
                        cx='900'
                        cy='540'
                        r='3'
                    />
                    <circle
                        cx='1180'
                        cy='460'
                        r='3'
                    />
                    <circle
                        cx='1180'
                        cy='560'
                        r='3'
                    />
                    <circle
                        cx='960'
                        cy='560'
                        r='3'
                    />
                    <circle
                        cx='1240'
                        cy='600'
                        r='3'
                    />
                    <circle
                        cx='1040'
                        cy='520'
                        r='3'
                    />
                    <circle
                        cx='1080'
                        cy='700'
                        r='3'
                    />
                    <circle
                        cx='1080'
                        cy='680'
                        r='3'
                    />
                    <circle
                        cx='240'
                        cy='700'
                        r='3'
                    />
                    <circle
                        cx='240'
                        cy='640'
                        r='3'
                    />
                    <circle
                        cx='340'
                        cy='90'
                        r='3'
                    />
                    <circle
                        cx='340'
                        cy='700'
                        r='3'
                    />
                </g>

                <g
                    fill='none'
                    stroke='var(--hero-circuit-chip)'
                    strokeWidth='1.2'
                >
                    <rect
                        x='990'
                        y='130'
                        width='40'
                        height='24'
                        rx='3'
                    />
                    <rect
                        x='430'
                        y='290'
                        width='36'
                        height='22'
                        rx='3'
                    />
                    <rect
                        x='1150'
                        y='430'
                        width='40'
                        height='24'
                        rx='3'
                    />
                    <rect
                        x='640'
                        y='560'
                        width='36'
                        height='22'
                        rx='3'
                    />
                    <line
                        x1='998'
                        y1='130'
                        x2='998'
                        y2='118'
                    />
                    <line
                        x1='1022'
                        y1='130'
                        x2='1022'
                        y2='118'
                    />
                    <line
                        x1='438'
                        y1='290'
                        x2='438'
                        y2='278'
                    />
                    <line
                        x1='458'
                        y1='290'
                        x2='458'
                        y2='278'
                    />
                </g>

                <g
                    stroke='url(#heroSweep)'
                    strokeWidth='1.3'
                    fill='none'
                    strokeLinecap='square'
                    opacity='0.95'
                >
                    <path d='M1400 40 H1220 V140 H1040 V90 H900' />
                    <path d='M1180 0 V80 H1000 V220' />
                    <path d='M1400 260 H1240 V340 H1000 V420 H760' />
                    <path d='M0 560 H320 V480 H600 V620 H900 V540 H1120' />
                    <path d='M1400 600 H1240 V520 H1040 V660' />
                    <path d='M120 0 V90 H340 V260' />
                    <path d='M0 120 H260 V220 H520 V150 H820 V260' />
                </g>
            </svg>

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
