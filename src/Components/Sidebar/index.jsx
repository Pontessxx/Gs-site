// Sidebar.jsx
import React from 'react';
import { FaTimes, FaHome, FaChartBar, FaUserAlt, FaEnvelope, FaRegCalendarAlt, FaIdCardAlt, FaRegFileAlt, FaRegSun } from 'react-icons/fa';
import SidebarItem from '../SidebarItem';
import { Container, Content } from './styles';

const Sidebar = ({ active }) => {
  const closeSidebar = () => {
    active(false);
  };

  return (
    <Container sidebar={active}>
      <FaTimes onClick={closeSidebar} />
      <Content>
        <SidebarItem Icon={FaHome} to="/" Text="Home" />
        <SidebarItem Icon={FaChartBar} to="/statistics" Text="Statistics" />
        <SidebarItem Icon={FaUserAlt} to="/users" Text="Users" />
        <SidebarItem Icon={FaEnvelope} to="/mail" Text="Mail" />
        <SidebarItem Icon={FaRegCalendarAlt} to="/calendar" Text="Calendar" />
        <SidebarItem Icon={FaIdCardAlt} to="/employees" Text="Employees" />
        <SidebarItem Icon={FaRegFileAlt} to="/reports" Text="Reports" />
        <SidebarItem Icon={FaRegSun} to="/settings" Text="Settings" />
      </Content>
    </Container>
  );
};

export default Sidebar;
