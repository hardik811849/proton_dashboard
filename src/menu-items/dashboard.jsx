// assets
import { DashboardOutlined } from '@ant-design/icons';

// icons
const icons = {
  DashboardOutlined
};

// ==============================|| MENU ITEMS - DASHBOARD ||============================== //

const dashboard = {
  id: 'group-dashboard',
  title: 'Navigation',
  type: 'group',
  children: [
    {
      id: 'dashboard',
      title: 'Dashboard',
      type: 'item',
      url: '/dashboard/default',
      icon: icons.DashboardOutlined,
      breadcrumbs: false
    },
    {
      id: 'portfolio',
      title: 'Portfolio',
      type: 'item',
      url: '/portfolio/default',
      icon: icons.DashboardOutlined,
      breadcrumbs: false
    },
    {
      id: 'wallet',
      title: 'Wallet',
      type: 'item',
      url: '/wallet/default',
      icon: icons.DashboardOutlined,
      breadcrumbs: false
    },
    {
      id: 'partners',
      title: 'Partners',
      type: 'item',
      url: '/partners/default',
      icon: icons.DashboardOutlined,
      breadcrumbs: false
    }
  ]
};

export default dashboard;
