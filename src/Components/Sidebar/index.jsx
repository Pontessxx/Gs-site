// Sidebar.jsx
import React from 'react';
import { FaTimes, FaHome, FaChartBar, FaUserAlt, FaEnvelope, FaRegCalendarAlt, FaIdCardAlt, FaRegFileAlt, FaRegSun } from 'react-icons/fa';
import SidebarItem from '../SidebarItem';
import { Container, Content } from './styles';

const Sidebar = ({ active }) => {
  const closeSidebar = () => {
    active(false);
  };
  const handleItemClick = () => {
    closeSidebar(); // Fecha o sidebar ao clicar em um item
  };

  return (
    <Container sidebar={active}>
      <FaTimes onClick={closeSidebar} />
      <Content>
        <SidebarItem Icon={FaHome} to="/" Text="Home"  onClick={handleItemClick}/>
        <SidebarItem Icon={FaChartBar} to="/statistics" Text="Statistics"  onClick={handleItemClick} />
        <SidebarItem Icon={FaUserAlt} to="/users" Text="Users"  onClick={handleItemClick}/>
        <SidebarItem Icon={FaEnvelope} to="/mail" Text="Mail"  onClick={handleItemClick}/>
        <SidebarItem Icon={FaRegCalendarAlt} to="/calendar" Text="Calendar"  onClick={handleItemClick}/>
        <SidebarItem Icon={FaIdCardAlt} to="/employees" Text="Employees"  onClick={handleItemClick}/>
        <SidebarItem Icon={FaRegFileAlt} to="/reports" Text="Reports"  onClick={handleItemClick}/>
        <SidebarItem Icon={FaRegSun} to="/settings" Text="Settings"  onClick={handleItemClick}/>
      </Content>
    </Container>
  );
};

export default Sidebar;
