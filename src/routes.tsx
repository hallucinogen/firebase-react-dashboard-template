import {
  DesktopOutlined,
  FileImageOutlined,
  DollarOutlined,
  LineChartOutlined,
  FlagOutlined,
  PlusCircleOutlined,
} from '@ant-design/icons';

import { ItemType } from 'antd/lib/menu/hooks/useItems';
import { ReactNode } from 'react';
import { Route, Routes } from 'react-router-dom';
import { Creatives } from './pages/Creatives';
import { Campaigns } from './pages/Campaigns';
import { NewCampaign } from './pages/NewCampaign';

type MenuItem = ItemType & {
  children?: MenuItem[];
  component?: ReactNode;
};

export const routes: MenuItem[] = [
  {
    component: <>Home</>,
    icon: <DesktopOutlined />,
    key: '/',
    label: 'Home',
  },
  {
    /*children: [
      {
        component: <>New Campaign</>,
        icon: <PlusCircleOutlined />,
        key: '/campaigns/new',
        label: 'New Campaign',
      },
    ],*/
    component: <Campaigns />,
    icon: <FlagOutlined />,
    key: '/campaigns',
    label: 'Campaigns',
  },
  {
    component: <NewCampaign />,
    icon: <PlusCircleOutlined />,
    key: '/campaigns/new',
    label: 'New Campaign',
  },
  {
    component: <Creatives />,
    icon: <FileImageOutlined />,
    key: '/creatives',
    label: 'Creatives',
  },
  {
    component: <>Add Funds</>,
    icon: <DollarOutlined />,
    key: '/add-funds',
    label: 'Add Funds',
  },
  {
    component: <>Reports</>,
    icon: <LineChartOutlined />,
    key: '/reports',
    label: 'Reports',
  },
];

export const RouteContent: React.FC = () => {
  const result: Array<ReactNode> = [];

  const dfs = (routes: MenuItem[]) => {
    routes.forEach((item: MenuItem) => {
      result.push(
        <Route
          element={item.component}
          key={item.key}
          path={item.key?.toString()}
        />,
      );
      if (item.children) {
        dfs(item.children);
      }
    });
  };

  dfs(routes);

  return <Routes>{result}</Routes>;
};
