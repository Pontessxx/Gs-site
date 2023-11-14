// SidebarItem.jsx
import React from 'react';
import { Link } from 'react-router-dom';
import { Container } from './styles';

const SidebarItem = ({ Icon, to, Text }) => {
  return (
    <Container>
      <Link to={to}>
        <Icon />
        {Text}
      </Link>
    </Container>
  );
};

export default SidebarItem;
