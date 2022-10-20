import { Layout, Menu } from 'antd';
import { FC, useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { routes } from './routes';

export const SideMenu: FC = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const [collapsed, setCollapsed] = useState(false);

  const onMenuClick = (event: { key: string }) => {
    navigate(event.key);
  };

  return (
    <Layout.Sider
      collapsed={collapsed}
      collapsible
      onCollapse={(value: boolean) => setCollapsed(value)}
    >
      <Menu
        defaultSelectedKeys={['dashboard']}
        items={routes}
        mode="inline"
        onClick={onMenuClick}
        selectedKeys={[location.pathname]}
        theme="dark"
      />
    </Layout.Sider>
  );
};
