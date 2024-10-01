// import paths from 'routes/paths';

export interface SubMenuItem {
  name: string;
  pathName: string;
  path: string;
  active?: boolean;
  items?: SubMenuItem[];
}

export interface MenuItem {
  id: string;
  subheader: string;
  path?: string;
  icon?: string;
  avatar?: string;
  active?: boolean;
  items?: SubMenuItem[];
  messages?: number;
}

const sitemap: MenuItem[] = [
  {
    id: 'dashboard',
    subheader: 'Dashboard',
    path: '/',
    icon: 'solar:widget-bold',
    active: true,
  },
  {
    id: 'analytics',
    subheader: 'Analytics',
    path: '/analytics',
    icon: 'solar:chart-square-bold',
  },
  {
    id: 'invoice',
    subheader: 'Invoice',
    path: '/invoice',
    icon: 'solar:ticket-bold',
  },
  {
    id: 'schedule',
    subheader: 'Schedule',
    path: '/schedule',
    icon: 'solar:document-text-bold',
  },
  {
    id: 'calendar',
    subheader: 'Calendar',
    path: '/calendar',
    icon: 'mage:calendar-2-fill',
  },
  {
    id: 'messages',
    subheader: 'Messages',
    path: '/messages',
    icon: 'mage:dashboard-chart-fill',
    messages: 49,
  },
  {
    id: 'notification',
    subheader: 'Notification',
    path: '/notification',
    icon: 'solar:bell-bold',
  },
  {
    id: 'settings',
    subheader: 'Settings',
    path: '/settings',
    icon: 'solar:settings-bold',
  },
  {
    id: 'signin',
    subheader: 'Sign In',
    path: '/signin',
    icon: 'mage:lock-fill',
    active: true,
  },
  {
    id: 'signup',
    subheader: 'Sign Up',
    path: '/signup',
    icon: 'mage:user-plus-fill',
    active: true,
  },
];

export default sitemap;
