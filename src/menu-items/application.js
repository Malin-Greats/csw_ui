// third-party
import { FormattedMessage } from 'react-intl';

// assets
import { IconUserCheck, IconBasket, IconMessages, IconLayoutKanban, IconMail, IconCalendar, IconNfc } from '@tabler/icons';

// constant
const icons = {
    IconUserCheck,
    IconBasket,
    IconMessages,
    IconLayoutKanban,
    IconMail,
    IconCalendar,
    IconNfc
};

// ==============================|| APPLICATION MENU ITEMS ||============================== //

const application = {
    id: 'applications',
    title: <FormattedMessage id="application" />,
    type: 'group',
    children: [
        {
            id: 'account-profile1',
            title: <FormattedMessage id="Member Profile" />,
            type: 'item',
            url: '/users/account-profile/profile3',
            forPublisher: false,
          },         
          {
            id: 'account-profile2',
            title: <FormattedMessage id="Re-Registration" />,
            type: 'item',
            url: '/users/account-profile/profile2',
            forPublisher: false,
          },
            {
            id: 'members',
            title: <FormattedMessage id="members" />,
            type: 'item',
            url: '/members',
            forPublisher: true,
            icon: icons.IconCalendar,
            breadcrumbs: false
            },
        {
            id: 'memberPayments',
            title: <FormattedMessage id="memberPayments" />,
            type: 'item',
            url: '/member-payments',
            forPublisher: true,
            icon: icons.IconCalendar,
            breadcrumbs: true
        },
        {
            id: 'allBooks',
            title: <FormattedMessage id="allBooks" />,
            type: 'item',
            url: '/all-applications',
            forPublisher: true,
            icon: icons.IconCalendar,
            breadcrumbs: false
        },

        {
            id: 'serviceFees',
            title: <FormattedMessage id="serviceFees" />,
            type: 'item',
            url: '/services-fees',
            forPublisher: true,
            icon: icons.IconCalendar,
            breadcrumbs: false
        }


    ]
};

export default application;
