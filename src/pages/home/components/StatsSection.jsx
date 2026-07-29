import { homeStats } from '../../../configs/statsConfig';

import AnimatedBlock from '../../../components/AnimatedBlock/AnimatedBlock';

function StatsSection() {
    return (
        <section className='stats-section'>
            <div className='container'>
                <div className='stats-row'>
                    {homeStats.map(
                        ({ id, value, label, description }, index) => (
                            <AnimatedBlock
                                delay={index * 150}
                                key={id}
                            >
                                <div className='stats-card'>
                                    <div className='stats-value text-gradient-gold'>
                                        {value}
                                    </div>

                                    <div className='stats-label'>{label}</div>

                                    <div className='stats-description'>
                                        {description}
                                    </div>
                                </div>
                            </AnimatedBlock>
                        ),
                    )}
                </div>
            </div>
        </section>
    );
}

export default StatsSection;
