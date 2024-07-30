// assets
import { ChromeOutlined, QuestionOutlined } from '@ant-design/icons';

// icons
const icons = {
  ChromeOutlined,
  QuestionOutlined
};

// ==============================|| MENU ITEMS - SAMPLE PAGE & DOCUMENTATION ||============================== //

const support = {
  id: 'support',
  title: 'Support',
  type: 'group',
  children: [
    // {
    //   id: 'sample-page',
    //   title: 'Sample Page',
    //   type: 'item',
    //   url: '/sample-page',
    //   icon: icons.ChromeOutlined
    // },
    {
      id: 'documentation',
      title: 'Documentation',
      type: 'item',
      url: 'https://docs.realproton.com',
      icon: icons.QuestionOutlined,
      external: true,
      target: true
    },
    {
      id: 'how-to-buy-token',
      title: 'How to Buy Token',
      type: 'item',
      url: 'https://realproton.com',
      icon: icons.QuestionOutlined,
      external: true,
      target: true
    },
    {
      id: 'how-to-invest',
      title: 'How to Invest',
      type: 'item',
      url: 'https://realproton.com/how-to-invest',
      icon: icons.QuestionOutlined,
      external: true,
      target: true
    }
  ]
};

export default support;
