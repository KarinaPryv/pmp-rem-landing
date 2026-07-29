import { HOME_SECTION_IDS } from '../constants/sectionIds.js';

export const navigationItems = [
    {
        id: 'main',
        label: 'Головна',
        to: `/#${HOME_SECTION_IDS.main}`,
    },
    {
        id: 'about',
        label: 'Про нас',
        to: `/#${HOME_SECTION_IDS.about}`,
    },
    {
        id: 'services',
        label: 'Послуги',
        to: `/#${HOME_SECTION_IDS.services}`,
    },
    {
        id: 'contact',
        label: 'Контакти',
        to: `/#${HOME_SECTION_IDS.contact}`,
    },
];
