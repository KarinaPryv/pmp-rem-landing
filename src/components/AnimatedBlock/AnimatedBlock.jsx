import { useEffect, useRef, useState } from 'react';

import './AnimatedBlock.css';

function AnimatedBlock({
    children,
    as: Component = 'div',
    animation = 'up',
    delay = 0,
    className = '',
}) {
    const ref = useRef(null);

    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        const element = ref.current;

        if (!element) {
            return;
        }

        const observer = new IntersectionObserver(
            ([entry]) => {
                if (!entry.isIntersecting) {
                    return;
                }

                setIsVisible(true);

                observer.unobserve(element);
            },
            {
                threshold: 0.15,
            }
        );

        observer.observe(element);

        return () => observer.disconnect();
    }, []);

    return (
        <Component
            ref={ref}
            className={`animated-block animated-block-${animation} ${
                isVisible ? 'animated-block-visible' : ''
            } ${className}`}
            style={{
                transitionDelay: `${delay}ms`,
            }}
        >
            {children}
        </Component>
    );
}

export default AnimatedBlock;