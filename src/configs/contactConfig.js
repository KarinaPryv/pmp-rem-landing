import { FaLocationDot, FaEnvelope, FaPhone } from 'react-icons/fa6';

export const PHONE_LINK = 'tel:+38097XXXXXXX';
export const PHONE_LABEL = '+38 (097) XXX-XX-XX';

export const contactInfoItems = [
    {
        id: 'address',
        icon: FaLocationDot,
        title: 'Адреса',
        text: '33024, Україна, Рівненська область, м. Рівне, вул. Соборна, буд. 364в',
    },
    {
        id: 'email',
        icon: FaEnvelope,
        title: 'Email',
        link: 'mailto:info@pmp-rem.com',
        label: 'info@pmp-rem.com',
    },
    {
        id: 'phone',
        icon: FaPhone,
        title: 'Телефон',
        link: PHONE_LINK,
        label: PHONE_LABEL,
    },
];
